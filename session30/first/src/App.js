import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Nav from "./Nav";
import SingleProduct from "./SingleProduct";
import Login from "./Login";
function App() {
  return (
    <>
    <BrowserRouter>
    
      <Nav />

      <Routes>
        <Route path="home" Component={Home} />
        <Route path="about" Component={About} />
        <Route path="contact" Component={Contact} />
        <Route path="products" Component={Products} />
        <Route path="login" Component={Login} />
        <Route path="singleproduct/:id" Component={SingleProduct} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
