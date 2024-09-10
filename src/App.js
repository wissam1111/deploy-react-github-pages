import { BrowserRouter as Router, NavLink, Routes,Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Dashboard from './components/dashboard';
import Error from './components/error';
import User from './components/user';
import Search from './components/search';
import NavBar from './components/nav';

function App() {
  return (
    <Router>
      <NavBar/>
          <hr/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Error />} />
      </Routes>
  </Router>
  );
}

export default App;
