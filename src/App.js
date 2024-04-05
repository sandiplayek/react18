import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Test from './pages/Test';
//import Navbar from './pages/Components/Navbar';
import Reduxx from './pages/Reduxx';
import Type from './pages/Type';
import Login from './pages/Login';
import Sandip from './pages/Sandip';
import Ref from './pages/Ref';
import Classcompo from './pages/Classcompo';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/test' element={<Test/>}/>
    <Route path='/redux' element={<Reduxx/>}/>
    <Route path='/type' element={<Type />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/sandip' element={<Sandip />}/>
    <Route path='/ref' element={<Ref></Ref>}/>
    <Route path='/class' element={<Classcompo />}/>

    </Routes>
    </BrowserRouter>
    
      
    </div>
  );
}

export default App;
