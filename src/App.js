import logo from './logo.svg';
import './App.css';
import './Styles/Misc.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserProvider, { UserContext } from './Context/UserContext';
import CreateProfile from './Pages/CreateProfile';
import LogIn from './Pages/LogIn';
import Home from './Pages/Home';
import CreateCharacter from './Pages/CreateCharacter';
import CharacterList from './Pages/CharacterList';
import Rules from './Pages/Rules';
import About from './Pages/About';
import NavBar from './Components/NavBar';
import DataProvider from './Context/DataContext';
import CharacterSheet from './Pages/CharacterSheet';
import CharacterProvider from './Context/CharacterContext';
import ForgotPassword from './Pages/ForgotPassword';

function App() {
  

  return (
    <div className="App">
      <UserProvider>
        <DataProvider>
          <CharacterProvider>
            <BrowserRouter>
              <NavBar />                             
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/create' element={<CreateCharacter />} />
                <Route path='/list' element={<CharacterList />} />
                <Route path='/sheet' element={<CharacterSheet />} />
                <Route path='/rules' element={<Rules />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<LogIn />} />
                <Route path='/createaccount' element={<CreateProfile />} />
                <Route path='/passwordreset' element={<ForgotPassword />} />
                <Route path='*' element={<Home />} />
              </Routes>
            </BrowserRouter>
          </CharacterProvider>
        </DataProvider>
      </UserProvider>
    </div>
  );
}

export default App;
