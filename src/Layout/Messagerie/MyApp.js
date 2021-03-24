import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedInUser } from './actions';
import store from './store';
import { Provider } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import ListAmis from './components/ListAmis'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper'
import { BsSearch } from 'react-icons/bs'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import './App.css'

import ChatFeed from "./components/ChatFeed"
import Divider from '@material-ui/core/Divider';
import UserInfo from "./components/UserInfo"

import PrivateRoute from './componenents/PrivateRoute';





function MyApp(props) {


    return (
        <div>
            <Grid container direction="row"  >


                <Grid item sm={3} xs={5}  >
                    <Card style={{ backgroundColor: '#f0f7f7', minHeight: '100vh', }}>
                        <Typography variant='h4' style={{ padding: '10px' }}>
                            Messagerie
                        </Typography>


                        <TextField
                            style={{ marginLeft: "15px", marginTop: '20px', marginBottom: '20px', width: '88%' }}
                            variant="outlined"
                            label="Chercher un ami"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <BsSearch color='action' />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                        />
                        <div className="mylistami">
                            <ListAmis />
                        </div>

                    </Card>
                </Grid>

                <Grid item sm={6} xs={7} >
                    <Card style={{ backgroundColor: '#f0f7f7', height: '100%' }}>
                        <ChatFeed />
                    </Card>


                </Grid>




                <Grid item sm={3}  >
                    <Card style={{ backgroundColor: '#f0f7f7', maxHeight: '100vh' }}>
                        <UserInfo />
                    </Card>
                </Grid>

            </Grid>

        </div >
    )

}

export default MyApp;
