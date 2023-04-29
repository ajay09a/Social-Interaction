import SignUp from "./SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./SignIn";

function App() {
  return (
    <>
    <ToastContainer />
    <div className="App">
      <h1>Hello world</h1>
      <SignIn />
    </div>
    </>
  );
}

export default App;
