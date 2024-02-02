import logo from './logo.svg';
import './App.css';
import Addtodo from './components/Addtodo';
import {Container, ToastContainer} from 'react-bootstrap';
import DisplayTodo from './components/DisplayTodo';
import { Provider } from 'react-redux';
// import store from './redux/store';
import {BrowserRouter , Link, Route , Routes} from 'react-router-dom'
import Home from './second/component/Home'
import Userlisting from "./second/component/Userlisting"
import AddUser from './second/component/Adduser'
import Updateuser from './second/component/Updatae'
import Store from './second/redu/Store';
function App() {
  return (
  <Provider store={Store}>
       <div className='App'>

      {/* <Container className='py-3' >
      <Addtodo></Addtodo>
      <DisplayTodo></DisplayTodo>
    </Container> */}
    <BrowserRouter>
      <div className='header'>
      <Link to={'/'}>Home</Link>
      <Link to={'/user'}>User</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/user' element={<Userlisting></Userlisting>}></Route>
        <Route path='/user/add' element={<AddUser></AddUser>}></Route>
        <Route path='/user/edit/:code' element={<Updateuser></Updateuser>}></Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer className='toast-position' position='bottom-right'></ToastContainer>
    </div>
  </Provider>
  );
}

export default App;
