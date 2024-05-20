import './App.css';
import { Footer1 } from './Component/Footer';
import { Body } from './Component/Body';
import { NavigationBar } from './Component/NavigationBar';
import { Outlet } from 'react-router-dom';

export function App() {
  return (
    <div className='App'>
    <NavigationBar/>
    <Outlet/>
    <Footer1/>
    </div> 
  );
}


//default export
//named export
//default import
//named import


