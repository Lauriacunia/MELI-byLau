import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';

const useStyles = makeStyles({
    root: {
      width: 300,
      margin:"15",
    },
    media: {
      height: 280,
      backgroundSize:"contain"

    },
    pos: {
        marginBottom: 12,
      },
    details: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "flex-start",
    height: 120,
    },
    btn: {
        background: 'linear-gradient(45deg, #b2dfdb 30%, #ffeb3b 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 20,
        padding: '0 10px',
    },
    actions: {
        display: 'flex',
        justifyContent: "space-between",
    }
  });
    
const Producto = ({ producto, handleClickProductoDetalle }) => {
console.log(producto)
const classes = useStyles();

const recortarTitulo = (str) => {
    let strCorto = `${str.slice(0,94)}...`
    return strCorto;
};

const handleClick = () =>{
    handleClickProductoDetalle(producto.id)
}

return (
    <Card
        className={classes.root}
        key={producto.id}
        >

       <CardActionArea onClick={handleClick}>
            <CardMedia 
                className={classes.media}
                image={producto.thumbnail}
            />
            <CardContent className={classes.details}>
                    <Typography className={classes.pos} variant="h5">
                        $ {producto.price}
                    </Typography>
                    {producto.shipping.free_shipping && <LocalShippingOutlinedIcon/>} 
                    <Typography gutterBottom variant="body1" color="textSecondary">
                        {producto.title.length < 95 
                        ? producto.title 
                        : recortarTitulo(producto.title)
                        }
                    </Typography>                      
                        
            </CardContent>
        </CardActionArea>

        <CardActions className={classes.actions}>
            <div>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </div>
            <Button 
            onClick={handleClick}
            className={classes.btn}>
                Ver Mas
            </Button>
        </CardActions>
        
    </Card>

       
)
};
 
export default Producto;