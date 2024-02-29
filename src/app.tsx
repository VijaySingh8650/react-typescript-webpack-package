import React from 'react';
import logo from "./logo.svg";
import "./style/app.css";

const App = () => {
  return (
    <div className='h-screen w-screen bg-primary flex flex-col justify-center items-center gap-2'>
        <h1 className='text-4xl text-white text-center'>
          Welcome to the one stop solution of 
        </h1>
        <p className='text-2xl text-white'>
           React+TypeScript+Webpack+Tailwind
        </p>
        <p className='text-2xl text-white'>Happy coding :)</p>
        <img className='logo' src={logo} alt="logo"/>
    </div>
  )
}

export default App;
