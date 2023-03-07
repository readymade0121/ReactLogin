import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import SignIn from "./component/Login";
import Report from "./component/Report";
import { store } from "./redux/store";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import PrivateRoute from "./config/privateRoute";

function App() {
  const isLogin = !!localStorage.getItem("user");
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="/home" element={<PrivateRoute isLogin={isLogin} component={<Home/>}/> } />
            <Route path="/report" element={<PrivateRoute isLogin={isLogin} component={<Report />}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
