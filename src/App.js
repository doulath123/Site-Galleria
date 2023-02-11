import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Left from './components/Left';
import Right from './components/Right';

function App() {
  return (
    <div className='App'>
      <Header/>
      <div className='main'>
        <Left/>
        <Right/>
      </div>
    <Footer/>
    </div>
  );
}

export default App;
