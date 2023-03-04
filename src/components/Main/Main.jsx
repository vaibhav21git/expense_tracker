import React, { useState, useEffect ,useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { useSpeechContext } from '@speechly/react-client';
// import { ExpenseTrackerContext } from '../../context/context';
import useStyles from './styles';
// import Form from './Form/Form';
// import List from './List/List';
// import InfoCard from '../InfoCard';



const Main = () => {

    const classes = useStyles();

  return (
      <Card className={classes.root}>
          <CardHeader title='Expense Tracker' subheader="Powered by Speechly" />
          <CardContent>
              <Typography align="center" variant="h5">Total Balance $100</Typography>
              <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
              {/* <infocard></infocard> */}
                  try saying income of 1 hunderd dollars in category salary for monday 
              </Typography>
              <Divider />
              {/* {form} */}
          </CardContent>
          <CardContent className ={classes.cardContent}>
              <Grid container spacing={2}>
                  <Grid item xs={12}>
                      {/* <List/> */}
                  </Grid>
              </Grid>
          </CardContent>
          
    </Card>
  )
}

export default Main
