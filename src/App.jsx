import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import SignUpPage from './pages/signUpPage';
import AdminHomePage from './pages/adminHomePage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
    <Toaster
  position="top-right"
  reverseOrder={false}
  
/>

      <div>
        {/* Navigation Bar */}
        {/* <nav className="p-4 bg-blue-500 text-white">
          <ul className="flex gap-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav> */}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          <Route path='/admin/*' element={<AdminHomePage />} />
          


          <Route path="/*" element={<h1 className="text-center text-red-500">404 Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
