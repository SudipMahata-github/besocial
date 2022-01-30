import Home from "./components/home/Home";
import {Routes, Route} from "react-router-dom"
import Profile from "./components/profile/Profile"

function App() {
  return (<>
    <div className="App">
   <Routes>
     <Route path="/" exact element={<Home/>}></Route>
     <Route path="/profile" element={<Profile/>}></Route>
   </Routes>
    </div>
    </>
  );
}

export default App;
