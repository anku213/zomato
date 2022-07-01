import './App.css';
import NavBar from './hotel/NavBar'
import HotelRegistration from './hotel/HotelRegistration';
import MenuList from './menu/MenuList';
import MenuRegistration from './menu/MenuRegistration';
import { Routes , Route} from 'react-router-dom';
import HotelList from './hotel/HotelList';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/hotel-list" element={< HotelList />} />

      <Route path="/hotel-registration" element={<HotelRegistration/>} />

      <Route path="/list-menu" element={<MenuList/>} />

      <Route path="/menu-registration" element={<MenuRegistration/>} />
    </Routes>
    </>
  );
}

export default App;
