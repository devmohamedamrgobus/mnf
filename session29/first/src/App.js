import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Nav from "./Nav";
function App() {
  return (
    <>
    <BrowserRouter>
    
      <Nav />

      <Routes>
        <Route path="home" Component={Home} />
        <Route path="about" Component={About} />
        <Route path="contact" Component={Contact} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
