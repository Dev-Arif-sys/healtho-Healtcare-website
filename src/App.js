import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
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
      <Switch>
       <Route exact path='/'>
        <Home></Home>
       </Route>
       <Route  path='/home'>
        <Home></Home>
       </Route>
       <PrivateRoute path='/service/:serviceId'>
        <ServiceDetail></ServiceDetail>
       </PrivateRoute>
       <Route path='/signin'>
        <Signin></Signin>
       </Route>
       <Route path='/register'>
       <Register></Register>
       </Route>
       <PrivateRoute path='/about'>
        <About></About>
       </PrivateRoute>
       <PrivateRoute path='/doctors'>
         <Doctors></Doctors>
       </PrivateRoute>
       <Route path='*'>
         <NotFound></NotFound>
       </Route>
      </Switch>
      <Footer></Footer>
    </Router>
      </ContextProvider>

    </div>
  );
}

export default App;
