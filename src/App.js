import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Counter from './Components/Counter';
import Store from './Redux/Store';

function App() {
  return (
    <div className="App">
      <Provider store={Store} >
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
