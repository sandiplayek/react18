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
import Reducerhook from './pages/Reducerhook';
import Hoc from './pages/Hoc';
import Pure from './pages/Pure';
import Slug from './pages/Slug';
import Nested from './pages/Nested';
import Product1 from './pages/Components/Product1';
import Product2 from './pages/Components/Product2';
import Form from './pages/Form';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='test' element={<Test/>}/>
    <Route path='redux' element={<Reduxx/>}/>
    <Route path='type' element={<Type />}/>
    <Route path='login' element={<Login />}/>
    <Route path='sandip' element={<Sandip />}/>
    <Route path='ref' element={<Ref></Ref>}/>
    <Route path='class' element={<Classcompo />}/>
    <Route path='reducer' element={<Reducerhook />}/>
    <Route path='hoc' element={<Hoc />}/>
    <Route path='pure' element={<Pure />}/>
    <Route path='slug/:id/:val' element={<Slug />} />
    <Route path='nested' element={<Nested />} >
      <Route path='product1' element={<Product1 />}/>
      <Route path='product2' element={<Product2 />}/>
    </Route>
    <Route path='form' element={<Form />} />

    </Routes>
    </BrowserRouter>
    
      
    </div>
  );
}

export default App;
