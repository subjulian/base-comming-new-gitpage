import './App.css';
import imagenes from './assets/imagenes'
import Mybutton from './button'
function App() {
  return (
    <div className="App">
      <div className="container">
          <img className='container__img' src={imagenes.logo} alt="logo" />
        <div className='container__design'>
          <h1 className='container__title'>We're <span className='container__span'>Coming soon</span></h1>
          <p className='container__text'>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
          <Mybutton className='container__button' />
        </div>
      </div>

    <div classname="hero">
        <img className='hero__img' src={imagenes.heroD} alt="hero" />
    </div>
    </div>
  );
}

export default App;
