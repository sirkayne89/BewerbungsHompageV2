import "./App.css";
import Layout from "./Layout/layout";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Layout />
    </div>
    </BrowserRouter>
  );
}

export default App;
