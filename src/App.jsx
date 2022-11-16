import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Question1 from './pages/Question1';
import Question2 from './pages/Question2';
import Nav from './components/Navbar';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route exact path ="/" element={<Question1/>}/>
        <Route exact path ="/q1" element={<Question1/>}/>
        <Route exact path ="/q2" element={<Question2/>}/>
      </Routes>
   </Router>
  );
}

export default App;
