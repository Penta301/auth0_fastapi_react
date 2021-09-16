import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Logic from "./Logic";

function App() {
  const { protectedCall, unProtectedCall } = Logic();
  const { loginWithRedirect, logout } = useAuth0();

  return (
    <div className="App">
      <button onClick={loginWithRedirect}>Login</button>
      <button onClick={logout}>Logout</button>
      <button onClick={protectedCall}>Protected Call</button>
      <button onClick={unProtectedCall}>Unprotected Call</button>
    </div>
  );
}

export default App;
