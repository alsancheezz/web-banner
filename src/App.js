import "./App.css";
import Form from "./components/form.component";
import image from "./assets/Logo.png";

function App() {
  return (
    <div className='main-container'>
      <div className='header'>
        <div className='header-text'>
          <img src={image}></img>
          <span>
            The
            <p className='header-green'>Fastest, Most Accurate</p>
            <p> Way to Close Your Books!</p>
          </span>
        </div>
      </div>
      <div className='form-container'>
        <Form />
      </div>
    </div>
  );
}

export default App;
