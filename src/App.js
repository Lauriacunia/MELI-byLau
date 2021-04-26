import React, { useState, useEffect } from 'react';
import ProductoDetalle from "./components/ProductoDetalle";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NavBar from "./components/NavBar";
import ProductosContainer from "./components/ProductosContainer";


const useStyles = makeStyles({
  root: {
    backgroundColor: "#e7e7e7",
    padding:20,
  },
  pos: {
      marginBottom: 12,
    },

});



const App = () => {

  const [productos, setProductos] = useState([]);
  const [valorDelInput, setValorDelInput] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [productoDetalle, setProductoDetalle] = useState({});
  const [tipoDeVista, setTipoDeVista] = useState("busqueda")
  const [idProductoDetalle, setIdProductoDetalle] = useState('')

  useEffect(() => {
    const BASE_URL = `https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`
    const searchString = BASE_URL 
  
    fetch(searchString)
      .then(res => res.json())
      .then(data => {
          setProductos(data.results)
      })
  }, [busqueda]);


  useEffect(() => {
    const BASE_URL = `https://api.mercadolibre.com/items/${idProductoDetalle}`
    const searchString = BASE_URL 

    idProductoDetalle && 
    fetch(searchString)
      .then(res => res.json())
      .then(data => {
          console.log(data)
          setIdProductoDetalle(data)
      })
  }, [idProductoDetalle]);



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

  const handleClickProductoDetalle = (id) => {
    console.log(id)
    //setTipoDeVista("detalle")
    setIdProductoDetalle(id)
  }

  return (
    <>
      <NavBar 
          valorDelInput={valorDelInput}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
      />     
      <Container className={classes.root}>

      {tipoDeVista === "busqueda" && 
        <ProductosContainer
        productos={productos}
        busqueda={busqueda}
        handleClickProductoDetalle={handleClickProductoDetalle}
        />
       }
    
      {tipoDeVista === "detalle" && 
       <ProductoDetalle 
        productoDetalle={productoDetalle}
       />
       } 
          
        </Container>
      </>
  );
}

export default App;
