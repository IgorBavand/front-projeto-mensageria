import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

  import Pedidos from './pages/Pedidos';
  import Produtos from './pages/Produtos';
  import Home from './pages/Home';




  function AllRoutes(){
    return (
        <Router>

        <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="nav-link itens-navbar">Home</Link>
            <Link to="/produtos" className="nav-link itens-navbar">Produtos</Link>
            <Link to="/pedidos" className="nav-link itens-navbar">Pedidos</Link>


            </div>
        </nav>



        <Routes>
    
            <Route exact path='/' element={<Home />} />
            <Route path='/produtos' element={<Produtos />} />
            <Route path='/pedidos' element={<Pedidos />} />



            </Routes>
        </Router>
    );
  }

  export default AllRoutes;