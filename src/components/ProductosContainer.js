import React from 'react';
import Grid from '@material-ui/core/Grid';
import Tarjeta from "./Tarjeta";
import Filtro from "./Filtro";

const ProductosContainer = ({productos}) => {

    return (
            <Grid
                container
                spacing={3}
                direction="row"
                justify="space-around"
                alignItems="flex-start">

                <Grid item xs={4}>
                    <Filtro />
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

    )

}

export default ProductosContainer;