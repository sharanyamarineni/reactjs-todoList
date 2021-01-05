import React from "react";
import { CardActions, createMuiTheme, Grid, Paper, ThemeProvider, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { orange } from 'material-ui-colors';
import AddTodo from "../molecules/containers/AddTodo";
import Footer from "../molecules/containers/Footer";
import TodoList from "../molecules/containers/TodoList";

const useStyles = makeStyles({
  root: {
    backgroundColor: orange[200],
    borderRadius: 10,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(252, 102, 3, 3)',
  },
  header: {
    color: "black",
    fontSize: 60,
  },
  list: {
    color: "black",
    fontSize: "25px"
  }

});
const Main = () => { 
  
    const theme = createMuiTheme ({
        palette:{
           type: "dark",
           secondary: {
            main: '#e3c53e'
          }
        },
        typography:{
          subtitle1: {
            fontSize: 40,
            fontFamily: 'Lucida Console, Courier, monospace',
            color: "orange",
            textShadow: '-1px 1px 10px rgba(3, 252, 157, 2)'
          },
          button: {
            fontStyle: 'italic',
            backgroundColor: "#5e03fc",
            color: "black",
          },
        }
      });
      const classes = useStyles();
    return(
        <ThemeProvider theme={theme}>
            <Paper style={{height: "100vah" }}>
            <Grid container direction="column">
            <Grid item container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center">
                <Typography variant="subtitle1">TODO LIST</Typography>
            </Grid>
            <Grid item container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center" style={{height:'800px'}}>
                <Grid item xs={12} sm={2} />
                <Grid item xs={12} sm={8}>
                <Card className={classes.root} variant="outlined">
                <CardHeader title="Add Items" variant="contained" className={classes.header}/>
                <CardContent className={classes.list}>
                    <AddTodo />
                    <TodoList />
                </CardContent>
                <CardActions>
                     <Footer />
                </CardActions>
                </Card>
                </Grid>
                <Grid item xs={false} sm={2} />
            </Grid>
            </Grid>
            </Paper>
  </ThemeProvider>
);
}

export default Main;