import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Tarjeta from "./components/Tarjeta";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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

  useEffect(() => {
    const BASE_URL = 'https://api.mercadolibre.com/sites/MLA/search?q=vino'
    const searchString = BASE_URL 
  
    fetch(searchString)
      .then(res => res.json())
      .then(data => setProductos(data.results))
  }, []);

 
  const useStyles = makeStyles({
    root: {
      backgroundColor: "#e7e7e7",
    },

  });

  const classes = useStyles();


  return (
    <>
      <NavBar/>     
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
                            key={producto.id}
                            title={producto.title} 
                            price = {producto.price}
                            img={producto.thumbnail}
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
