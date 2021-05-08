import Header from './components/Header';
import './App.css';

function App() {

  let value = 'Sathish Kotha React Demo App';
  return (
    <div className="container">
     <h1>{value} </h1>
     <h2>Author: Sathish</h2>
     {/* <Header/> */}
    </div>
  );
}

export default App;
