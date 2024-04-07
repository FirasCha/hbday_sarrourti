import HappyBirthdaySlides from './component/component/HappyBirthdaySlides';
import MenuHappyBirthday from './component/component/MenuHappybirthday'
import MessageBirthday from './component/component/MessageBirthday.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path='/hbday_sarrourti' element={<MenuHappyBirthday/>}></Route>
          <Route path='/hbday_sarrourti/happyBirthdayVideo' element={<HappyBirthdaySlides/>}></Route>
          <Route path='/messagebirthday' element={<MessageBirthday/>}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
