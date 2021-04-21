import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
    },
    pos: {
        marginBottom: 12,
      },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));
  



const Filtro = () => {
    
const classes = useStyles();

    return (
    <Card className={classes.root}>
        
        <Typography className={classes.pos} color="textSecondary">
            FILTER BY
        </Typography>
       

        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                <Typography className={classes.heading}>Collection</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="collection" name="gender1">
                        <FormControlLabel value="female" control={<Radio />} label="Modern" />
                        <FormControlLabel value="male" control={<Radio />} label="Classic" />
                    </RadioGroup>
                </FormControl>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                <Typography className={classes.heading}>Color</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="color" name="gender1">
                        <FormControlLabel value="female" control={<Radio />} label="Wood" />
                        <FormControlLabel value="male" control={<Radio />} label="Gray" />
                        <FormControlLabel value="male" control={<Radio />} label="Orange" />
                        <FormControlLabel value="male" control={<Radio />} label="White" />
                    </RadioGroup>
                </FormControl>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                <Typography className={classes.heading}>Category</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="color" name="gender1">
                        <FormControlLabel value="female" control={<Radio />} label="Auxiliar" />
                        <FormControlLabel value="male" control={<Radio />} label="Furniture" />
                    </RadioGroup>
                </FormControl>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                <Typography className={classes.heading}>Price Range</Typography>
            </AccordionSummary>
            <AccordionDetails>
                 <Slider/>

            </AccordionDetails>
        </Accordion>
        
      </Card>
    )};

export default Filtro;