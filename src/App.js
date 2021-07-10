import "./App.css";
import Navigation from "./Components/Navigation/Navigation.jsx";
import Banner from "./Components/Banner/Banner";
import Beginner from "./Components/Beginner/Beginner";
import InterMediate from "./Components/InterMediate/InterMediate";
import Advance from "./Components/Advanced/Advance";
import Footer from "./Components/Footer/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";
import VideoPage from "./Components/VideoPage/VideoPage.jsx";
import { SearchPage } from "./Components/SearchPage/SearchPage";
import ListingPage from "./Components/ListingPage/ListingPage";
import { UserPage } from "./Components/UserPage/Userpage";
import { useEffect } from "react";
import { useAuth } from "./Context/AuthContext";
import { usePlaylistAction } from "./Context/PlaylistContext";
import axios from "axios";
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

const LandingPage = () => {
  return (
    <>
      <Banner />
      <Beginner />
      <InterMediate />
      <Advance />
    </>
  );
};

function App() {
  const {
    createPlaylist,
    setCreatePlaylist,
    like,
    setLike,
    watchList,
    setWatchList,
  } = usePlaylistAction();
  const navigate = useNavigate()
  const { userData, setUserData, setUserLogin, isUserLogin, token, setToken } = useAuth();

  useEffect(() => {
    if (!isUserLogin) {
      (async function () {
        try {
          let tempToken = localStorage?.getItem("login");
          tempToken = tempToken && JSON.parse(tempToken);
          const { data } = await axios.post(
            "https://mongoDBInventorySetup.vaibhavdesai888.repl.co/user/login",
            {},
            { headers: { Authorization: tempToken?.token } }
          );
          setUserData(data.user);
          setUserLogin(true);
          setLike(data.user.like);
          setWatchList(data.user.watchlist);
          setCreatePlaylist(data.user.userPlaylist)
          setToken(tempToken?.token)
        } catch (error) {
          console.log(error.message);
        }
      })();
    }
  },[]);

  console.log(token,"meh aya useeffect")
  useEffect(()=>{
    
    console.log(token,"meh aya useeffectmeh")
    if(token){
      console.log(token,"meh aya if useeffectmeh")
      navigate('/')
    }
  },[token])

  useEffect(()=>{

    if(isUserLogin && like.length > 0 && createPlaylist.length > 0 && watchList.length > 0){
      (async function(){
        try{
          const { data } = await axios.post(`https://mongodbinventorysetup.vaibhavdesai888.repl.co/user/${userData._id}`,
          {
            data:{
              like:like,
              watchlist:watchList,
              userPlaylist:createPlaylist
            },
          })
        }
        catch(error){
          console.log(error.message)
        }
      }())
    }

  },[like,watchList,createPlaylist])

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/searchvideo" element={<SearchPage />}></Route>
        <Route path="/videopage/:videoId" element={<VideoPage />}></Route>
        <PrivateRoute path="/listingpage" element={<ListingPage />}></PrivateRoute>
        <Route path="/userpage" element={<UserPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
