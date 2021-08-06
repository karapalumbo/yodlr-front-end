import "./App.css";
// import UserApis from "../src/api/api";
import Routes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./UserContext";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser }}>
          <Routes />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
