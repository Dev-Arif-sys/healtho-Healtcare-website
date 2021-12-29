import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ServiceDetail from './component/Home/ServiceDetail/ServiceDetail';
import ContextProvider from './ContextProvider/ContextProvider';
import Signin from './component/Signin/Signin';
import Register from './component/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import About from './component/About/About';
import Doctors from './component/Doctors/Doctors';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div class="App">
      <ContextProvider>
      <Router>
      <Header></Header>
      <Routes>
       <Route  path='/' element={<Home/>}/>
        
       <Route  path='/home' element={<Home/>}/>

       <Route  path='/service/:serviceId' element={<PrivateRoute><ServiceDetail/></PrivateRoute>}/>
            
       
       <Route path='/signin' element={<Signin/>}/>
        
       <Route path='/register' element={<Register/>}/>
       <Route  path='/about' element={<PrivateRoute><About/></PrivateRoute>}/>
           

          <Route  path='/doctors' element={<PrivateRoute><Doctors/></PrivateRoute>}/>
           
  
        
       <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer></Footer>
    </Router>
      </ContextProvider>

    </div>
  );
}

export default App;
