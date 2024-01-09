import logo from './logo.svg';
import './App.css';
import Addtodo from './components/Addtodo';
import {Container} from 'react-bootstrap';
import DisplayTodo from './components/DisplayTodo';
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
  return (
  <Provider store={store}>
      <Container className='py-3' >
      <Addtodo></Addtodo>
      <DisplayTodo></DisplayTodo>
    </Container>
  </Provider>
  );
}

export default App;
