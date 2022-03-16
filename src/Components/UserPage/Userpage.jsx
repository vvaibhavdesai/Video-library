import styled from "styled-components";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { ToastContainer } from "react-toastify";
const FormContainer = styled.div`
  min-height: 100vh;
  max-height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  height: 450px;
  width: 350px;
  background: rgba(255, 255, 255, 0.1);
  text-align: center;
  align-items: center;
  background: rgba(21, 21, 24, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transform-style: perserve-3d;

  @keyframes shake {
    0% {
      transform: rotate(0.5deg);
    }
    50% {
      transform: rotate(-0.5deg);
    }
    100% {
      transform: rotate(0.5deg);
    }
  }
`;

const FormHeader = styled.h3`
  font-size: 30px;
  padding: 30px 0;
  color: #ccc;
  letter-spacing: 3px;
`;
const FormI = styled.i`
  padding: 0.5px;
  font-size: 20px;
  color: #bbb;
`;

const FormInput = styled.input`
  outline: none;
  border: none;
  height: 40px;
  width: 82%;
  background: rgba(0, 0, 0, 0.1);
  color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5) inset;
  font-size: 1rem;
  padding: 0 10px;
  margin: 15px 0;
  letter-spacing: 1px;
  border-radius: 1rem;

  &:focus {
    color: #fca311;
    border: 1px solid #fca311;
    -webkit-box-shadow: 0 0 0px 1000px #000 inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const SubmitBtn = styled.input`
  width: 90%;
  cursor: pointer;
  //   background: #fca311;
  background-image: linear-gradient(to bottom right, #fca311, black);
  margin-top: 30px;
  border-radius: 50px;
  padding: 0 10px;
  height: 40px;
  color: #ccc;
  font-size: 1rem;
  transition: 0.3s all ease;
  &:hover {
    letter-spacing: 4px;
    animation: shake 75ms infinite;
    animation-timing-function: linear;
  }
`;

export function UserPage() {
  const [signup, setSignUp] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUpUser, loginUser } = useAuth();
  return (
    <div>
      <FormContainer>
        <Form onSubmit={(e) => e.preventDefault()}>
          <FormHeader>{signup ? "SignUp" : "Login"}</FormHeader>
          {signup && (
            <div>
              <FormInput
                onChange={(e) => setUserName(e.target.value)}
                placeholder="username"
              ></FormInput>
            </div>
          )}
          <div>
            <FormInput
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="email"
            ></FormInput>
          </div>
          <div>
            <FormInput
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
            ></FormInput>
          </div>
          <SubmitBtn
            type="submit"
            placeholder="Submit"
            onClick={() =>
              signup
                ? signUpUser(userName, email, password)
                : loginUser(email, password)
            }
          ></SubmitBtn>
          <div>
            <button
              style={{
                backgroundColor: "rgb(166 104 3)",
                color: "#ccc",
                cursor: "pointer",
                padding: "0.5rem 0.7rem",
                margin: "0.5rem 0",
                borderRadius: "20px",
              }}
              onClick={() => setSignUp((prev) => !prev)}
            >
              {signup ? `login` : `signup`}
            </button>
            <button
              style={{
                backgroundColor: "rgb(166 104 3)",
                color: "#ccc",
                cursor: "pointer",
                padding: "0.5rem 0.7rem",
                margin: "0.5rem 0",
                borderRadius: "20px",
              }}
              onClick={() => loginUser("vaibhavdesai888@gmail.com", "vaibhav")}
            >
              Guest Login
            </button>
            {/* {!signup ? (
              <>
                <p style={{ color: "white" }}>
                  <span>TestEmail:</span>
                  <span> vaibhavdesai888@gmail.com</span>
                </p>
                <p style={{ color: "white" }}>
                  <span>Password:</span>
                  <span> vaibhav</span>
                </p>
              </>
            ) : (
              ""
            )} */}
          </div>
        </Form>
      </FormContainer>
    </div>
  );
}
