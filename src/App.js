import React from 'react';
import './App.css';
import Login from './pages/Login'
import Index from "./pages/index"
import PrivateRouter from './component/privateRouter'

//引入路由
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom"

function App() {
  return (
    <Router>

    <div className="App">
        <div>
          {/* 两个方法 */}
          <Route path="/" exact render={()=><Redirect to={"/login"}/>}></Route>
          {/* <Route path="/" exact component={Login}></Route> */}
          <Route path="/login" component={Login}></Route>
          {/* <Route path="/index" component={index}></Route> */}
          <Route path="/index" render={()=>
          <Index>
              <PrivateRouter></PrivateRouter>
          </Index>
          
          }>


          </Route>
        </div>
    </div>
    
     </Router>
  );
}

export default App;
