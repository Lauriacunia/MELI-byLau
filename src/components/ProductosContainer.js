import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Producto from "./Producto";
import Filtro from "./Filtro";


const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: "flex-start",

      },
    cardContainer: {
        display: 'flex',
       
    }
  
  });
  

const ProductosContainer = ({productos, handleClickProductoDetalle}) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>

                <div>
                    <Filtro />
                </div>

                
                <Grid className={classes.cardContainer}
                      container
                      spacing={4}
                      justify="center"                      
                            >
                        
                {
                    productos.map((producto) => {
                        return <Grid 
                                    item xs={6}
                                    alignItems="center"
                                    >
                                    <Producto
                                        producto={producto}
                                        handleClickProductoDetalle={handleClickProductoDetalle}
                                    />
                               </Grid>
                    })
                }
                </Grid>
               
           
      </div>
    )

}

export default ProductosContainer;