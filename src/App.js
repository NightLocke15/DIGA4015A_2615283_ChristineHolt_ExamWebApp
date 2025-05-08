import logo from './logo.svg';
import './App.css';
import './Styles/Misc.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateProfile from './Pages/CreateProfile';
import UserProvider from './Context/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <CreateProfile />
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
