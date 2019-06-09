import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Publicacion from './services/publicacion';
class App extends Component{

      constructor(props){
        super(props);
        this.state = {
          items: [],
          isLoaded : false,
          Publicacion
        }
      }
      componentDidMount(){
        fetch('http://todaviasirve.azurewebsites.net/Api/publicacion/buscar/mase')
        .then(res => res.json())
        .then(json => {
            this.setState({
              isLoaded : true,
              items: json
            });
          });
    } 

    render() {
      var { isLoaded, items} = this.state;
      if (!isLoaded){
        return (
          <div className="App">
            <Navigation titulo="TodaviaSirve"/>                      
              <img src={logo} className="App-logo" alt="logo" />
                              Sin conexion con la Api
                             
          </div>
        );
      }else{
        return (
          <div className="App">
            <header className="App-header">
            <Navigation titulo="TodaviaSirve"/>  
              <img src={logo} className="App-logo" alt="logo" />
                <ul>
                  {items.map(item => (
                    <li key={item.id}> 
                      Nombre  : {item.titulo} | Imagen :  {item.descripcion}
                    </li>
                  )

                  )}
                </ul>
                data has been loaded
            </header>
          </div>
        );
      }


     
    }
  }
export default App;
