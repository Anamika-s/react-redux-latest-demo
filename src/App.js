import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { Shop } from './components/Shop';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Links } from './components/Links';
import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import { Search } from './Search';
import { NotFound } from './components/NotFound';
function App() {
  const amount = useSelector((state) => state.amount.value)
  return (
    <div className="App">
      <BrowserRouter>
      <Links/>
      <Routes>
      <Route index element={<ContactUs/>}/> 
      <Route path='aboutus' Component={AboutUs}/>
      <Route path='contactus' Component={ContactUs}/>
      <Route path='shop' Component={Shop}/>
      <Route path='search/:id/:category' Component={Search}/>
      <Route path='*' Component={NotFound}/>
      </Routes>
      </BrowserRouter>
      {/* {amount}
      <Shop/> */}
    </div>
  );
}

export default App;
