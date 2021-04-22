import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Tarjeta from "./components/Tarjeta";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Filtro from "./components/Filtro";
import NavBar from "./components/NavBar";


const useStyles = makeStyles({
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

 
  const useStyles = makeStyles({
    root: {
      backgroundColor: "#e7e7e7",
    },

  });

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
          <Grid 
            container  
            spacing={3}
            direction="row"
            justify="space-around"
            alignItems="flex-start">
              
            <Grid item xs={4}>
              <Filtro/>
            </Grid>      

            {
                productos.map((producto) => {
                  return <Grid item xs={4}>
                           <Tarjeta
                            producto={producto} 
                            />
                          </Grid> 
                })
              }     
                
            </Grid> 
        </Container>
      </>
  );
}

export default App;
