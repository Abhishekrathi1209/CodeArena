import './App.css'
import { Route, Routes } from 'react-router-dom';
import Appbar from './components/Appbar';
import Landing from './pages/Landing';
import ContestPage from './pages/ContestPage';
import ProblemsPage from './pages/ProblemsPage';
import SolutionPage from './pages/SolutionPage';
import LoginPage from './pages/LoginPage';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div>
      <ToastContainer />
      <Appbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contests" element={<ContestPage />} />
        <Route path="/problems" element={<ProblemsPage />} />
        <Route path="/problems/:id" element={<SolutionPage />} />
        {/* <Route path="/" element={<Landing />} />
        <Route path="/" element={<Landing />} /> */}
      </Routes>
    </div>
  )
}

export default App
