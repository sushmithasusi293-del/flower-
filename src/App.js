
import './App.css';
import Nav from './components/Navbar'
import Home from './pages/Home';
import Footer from './pages/Footer';
import Shop from './pages/Shop';
import About from './pages/About';
import Contectus from './pages/Contectus'
import Blog from './pages/Blog'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <div >
     <BrowserRouter>
     <Navbar/>
     <Routes>
      
      <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/blog' element={<Blog/>}/>
       <Route path='/shop' element={<Shop/>}/>
       

       
       <Route path='/contectus' element={<Contectus/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
