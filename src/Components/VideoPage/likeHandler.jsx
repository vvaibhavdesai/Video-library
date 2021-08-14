export const likeHandler = (video, like, setLike) => {
  if (like.find((videos) => videos._id === video._id)) {
    setLike((prev) => prev.filter((videos) => videos._id !== video._id));
  } else {
    setLike((videos) => [...videos, video]);
  }
};
export const watchListHandler = (video, watchList, setWatchList) => {
  if (watchList.find((videos) => videos._id === video._id)) {
    setWatchList((prev) => prev.filter((videos) => videos._id !== video._id));
  } else {
    setWatchList((videos) => [...videos, video]);
  }
};
