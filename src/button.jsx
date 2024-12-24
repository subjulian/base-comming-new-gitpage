import React, {useState} from 'react'
import imagenes from './assets/imagenes'

const Validator = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(true);
  const [inputBorder, setInputBorder] = useState('');
  const [errorIcon, setErrorIcon] = useState(false);
  const [errorText, setErrorText] = useState(false);


  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    setError(!emailRegex.test(value));
  };

  const handleClick = () => {
    if (error) {
      setInputBorder('2px solid red');
      setErrorIcon(true);
      setErrorText(true);
    } else {
      setInputBorder('');
      setErrorIcon(false);
      setErrorText(false);
    }
  };

  return (
    <>
      <input
        className='container__input'
        type="text"
        placeholder='Email Address'
        value={email}
        style={{border: inputBorder}}
        onChange={handleChange}
      />
      <img className='container__error' src={imagenes.error} alt="Error" style={{display: errorIcon ? 'inline-block' : 'none'}}></img>
      <button
        className='container__button'
        onClick={handleClick}
      >
        <img src={imagenes.arrow} alt="Arrow" />
      </button>
      <p className='container__error-text' style={{display: errorText ? 'inline-block' : 'none'}}>Please provide a valid email</p>
    </>
  );
};

export default Validator;
