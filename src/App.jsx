import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
