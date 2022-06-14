import { BrowserRouter } from "react-router-dom";
import "./App.css";
import GlobalContextProvider from "./GlobalContext/GlobalContext";
import { RoutePaths } from "./RoutePaths/RoutePaths";

function App() {
  return (
    <BrowserRouter>
      <RoutePaths />
    </BrowserRouter>
  );
}

export default App;
