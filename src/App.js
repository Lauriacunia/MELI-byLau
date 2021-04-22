import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Tarjeta from "./components/Tarjeta";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NavBar from "./components/NavBar";
import ProductosContainer from "./components/ProductosContainer";


const useStyles = makeStyles({
  root: {
    backgroundColor: "#e7e7e7",
  },
  pos: {
      marginBottom: 12,
    },

});



const App = () => {

  const [productos, setProductos] = useState([]);
  const [valorDelInput, setValorDelInput] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [urlBusqueda, setUrlBusqueda] = useState("sites/MLA/search?q=")

  useEffect(() => {
    const BASE_URL = `https://api.mercadolibre.com/${urlBusqueda}${busqueda}`
    const searchString = BASE_URL 
  
    fetch(searchString)
      .then(res => res.json())
      .then(data => setProductos(data.results))
  }, [busqueda]);

 

  const classes = useStyles();

  const handleChange = e => {
    setValorDelInput(e.target.value);
    console.log(valorDelInput)
  };

  const handleSubmit = e => {
    console.log("Enviaste el formulario")
    e.preventDefault();
    setBusqueda(valorDelInput);
  };

  return (
    <>
      <NavBar 
          valorDelInput={valorDelInput}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
      />     
      <Container className={classes.root}>
          <ProductosContainer
          productos={productos}
          busqueda={busqueda}
          />
        </Container>
      </>
  );
}

export default App;
