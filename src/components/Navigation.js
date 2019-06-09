import React , {Component}from 'react'; 
class Navigation extends Component{

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light" style={{background: '#39B54A'}}>

            <a className="navbar-brand" href="/">
            {this.props.titulo}
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Inicio<span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Publicaciones recientes</a>
                </li>
                {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/">Action</a>
                    <a className="dropdown-item" href="/">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">Something else here</a>
                  </div>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" href="/">Login</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
              </form>
            </div>
          </nav>
        );

    }

}

export default Navigation;