import "./App.css";
// import UserApis from "../src/api/api";
import Routes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./UserContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
