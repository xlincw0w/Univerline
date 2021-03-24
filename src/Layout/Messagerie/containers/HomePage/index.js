import React, { useEffect, useState } from 'react';
import { getRealtimeUsers, updateMessage, getRealtimeConversations } from '../../actions';
import Layout from '../../componenents/Layout';
import { useDispatch, useSelector } from 'react-redux';

import Divider from '@material-ui/core/Divider';
import AvatarUsers from '../../components/AvatarUsers'
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { BsSearch } from 'react-icons/bs'
import ListAmis from '../../components/ListAmis'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import AmiCard from '../../components/AmiCard'
import UserInfo from '../../components/UserInfo'
import './style.css';

import MonMessage from "../../components/MonMessage"
import LeurMessage from "../../components/LeurMessage"
import IconButton from '@material-ui/core/IconButton';
import { BsFillImageFill } from "react-icons/bs"
import { IoSend } from "react-icons/io5"
import { filter } from 'lodash'
import Axios from 'axios'

const User = (props) => {


  const { user, onClick } = props;
  return (
    <div onClick={() => onClick(user)} className="displayName">
      <div className="displayPic">
        <img src="https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg" alt="" />
      </div>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between', margin: '0 10px' }}>
        <span style={{ fontWeight: 500 }}>{user.firstName} {user.lastName}</span>
        <span className={user.isOnline ? `onlineStatus` : `onlineStatus off`}></span>
      </div>
    </div>
  );
}

const HomePage = (props) => {

  const dispatch = useDispatch();
  // const auth = useSelector(state => state.auth);
  const userS = useSelector((state) => state.AuthReducer.user)

  const [chatStarted, setChatStarted] = useState(false);
  const [chatUser, setChatUser] = useState('');
  const [message, setMessage] = useState('');
  const [userUid, setUserUid] = useState(null);
  {/** *******************************Friends filter******************************* */ }
  const friends = useSelector((state) => state.AuthReducer.friends)
  const user_info = useSelector((state) => state.ProfileReducer.user_info)
  const profile_friends = useSelector((state) => state.ProfileReducer.friends)
  const [filterWord, updateFilter] = useState('')



  {/*********** *
  useEffect(async () => {
    if (user_info.user_type === 'etudiant') {
      if (user_info.id_user === user.id) {
        Axios.get(constants.url + '/api/amis/get/amis/' + user_info.id_user)
          .then((res) => {
            dispatch(SetProfileFriends(res.data))
          })
          .catch((err) => {
            console.log(err)
            dispatch(SetProfileFriends([]))
          })
      } else {
        const res = await Axios.post(constants.url + '/api/amis/isFriend/', {
          id_user: user.id,
          id_friend: user_info.id_user,
        })

        if (res.data.friend) {
          Axios.get(constants.url + '/api/amis/get/amis/' + user_info.id_user)
            .then((res) => {
              dispatch(SetProfileFriends(res.data))
            })
            .catch((err) => {
              console.log(err)
              dispatch(SetProfileFriends([]))
            })
        } else {
          dispatch(SetProfileFriends([]))
        }
      }
    } else {
      if (user_info.id_user === user.id) {
        Axios.get(constants.url + '/api/collegue/get/collegue/ens/' + user_info.id_user)
          .then((res) => {
            dispatch(SetProfileFriends(res.data))
          })
          .catch((err) => {
            console.log(err)
            dispatch(SetProfileFriends([]))
          })
      } else {
        const res = await Axios.post(constants.url + '/api/collegue/isFriend/ens', {
          id_user: user.id,
          id_collegue: user_info.id_user,
        })

        if (res.data.friend) {
          Axios.get(constants.url + '/api/collegue/get/collegue/ens/' + user_info.id_user)
            .then((res) => {
              dispatch(SetProfileFriends(res.data))
            })
            .catch((err) => {
              console.log(err)
              dispatch(SetProfileFriends([]))
            })
        } else {
          dispatch(SetProfileFriends([]))
        }
      }
    }
  }, [user_info.id_user, user.id])
  *********** */ }

  {/**************************************Friends ******************************************* */ }

  console.log(user_info)

  let unsubscribe;

  {
    /**
     * useEffect(() => {
        unsubscribe = dispatch(getRealtimeUsers(auth.uid))
          .then(unsubscribe => {
            return unsubscribe;
          })
          .catch(error => {
            console.log(error);
          })
    
    
      }, [])
     */
  }

  //console.log(user);

  //componentWillUnmount
  useEffect(() => {
    { }
    return () => {
      //cleanup
      unsubscribe.then(f => f()).catch(error => console.log(error));

    }
  }, []);

  const initChat = (user) => {

    setChatStarted(true)
    setChatUser(`${user.firstName} ${user.lastName}`)
    setUserUid(user.id);

    console.log(user);

    dispatch(getRealtimeConversations({ uid_1: userS.id, uid_2: user.id }));

  }
  const submitMessage = (e) => {
    e.preventDefault()
    console.log('ici envoie')
    console.log(friends)
    const msgObj = {
      user_uid_1: userS.id,

      user_uid_2: userUid,
      message
    }


    if (message !== "") {
      dispatch(updateMessage(msgObj))
        .then(() => {
          setMessage('')
        });
      console.log(msgObj)
    }



  }

  return (
    <>
      {/**
       * 
       <section className="container">
        <div className="listOfUsers">

          {
            user.users.length > 0 ?
              user.users.map(user => {
                return (
                  <User
                    onClick={initChat}

                    key={user.uid}
                    user={user} />
                );
              }) : null
          }





        </div>
        <div className="chatArea">
          <div className="chatHeader">
            {
              chatStarted ? chatUser : ''
            }
          </div>
          <div className="messageSections">
            {
              chatStarted ?
                user.conversations.map(con =>
                  <div style={{ textAlign: con.user_uid_1 == auth.uid ? 'right' : 'left' }}>
                    <p className="messageStyle" >{con.message}</p>
                  </div>)
                : null
            }

          </div>
          {
            chatStarted ?
              <div className="chatControls">

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write Message" />
                <button onClick={submitMessage}>Send</button>
              </div> : null

          }

        </div>
      </section>
       */}
      <Grid container direction="row" style={{ height: '90vh' }} >


        <Grid item sm={3} xs={5}  >
          <Card style={{ backgroundColor: '#f0f7f7', minHeight: '100%', }}>
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
              onChange={(e) => updateFilter(e.target.value)}
              fullWidth
            />
            <div className="mylistami">
              {/**
              * 
              * <ListAmis initChat={initChat}
                user={user}
              />
              */}
              <div style={{ padding: '10px' }}>

                {filter(profile_friends, (o) => {
                  let searchIn = o.nom + ' ' + o.prenom + ' ' + o.nom
                  return searchIn.includes(filterWord)
                }).map((elem) => {
                  return (

                    <AmiCard onClick={initChat}

                      key={elem.id}
                      user={u} />

                  )
                })}

                {/*************** */}
                {
                  userS.users && userS.users.map(u => <AmiCard onClick={initChat}

                    key={u.uid}
                    user={u} />)

                }
              </div>
            </div>

          </Card>
        </Grid>

        <Grid item sm={6} xs={7} >
          <Card style={{ backgroundColor: '#f0f7f7', height: '100vh' }}>
            {/***************************************************************************
         * Le Chat Feed
         */}
            <Grid container direction="column" alignItems="stretch">
              <Grid item>
                <div className="chat-feed">
                  <div className="chat-title-container" >
                    {
                      !chatStarted ?
                        <Grid container justify="center" spacing={1}>
                          <Grid item>
                            <AvatarUsers user={chatUser} />
                          </Grid>
                          <Grid item>
                            <div className="chat-title">
                              {chatUser}
                            </div>


                          </Grid>

                        </Grid> : ''

                    }
                  </div>
                  <div className="messageSections">
                    {
                      chatStarted ?
                        user.conversations.map(con =>
                          <div style={{ textAlign: con.user_uid_1 == userS.uid ? 'right' : 'left' }}>
                            <p className="messageStyle" >{con.message}</p>
                          </div>)
                        : userS.id
                    }

                  </div>



                </div>

              </Grid>
              <Grid item >



                <form className="formulaire" onSubmit={submitMessage}>

                  <input className="champEnvoi" onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    placeholder='votre message...'
                  />
                  <IconButton aria-label="img" style={{ marginLeft: '5px' }}>
                    <BsFillImageFill />
                  </IconButton>
                  <IconButton aria-label="send" style={{ marginLeft: '10px' }}>
                    <IoSend onClick={submitMessage} />
                  </IconButton>

                </form>



              </Grid>
            </Grid>
            {/**************************************************************************
          * fin chat feed
          */}
          </Card>


        </Grid>




        <Grid item sm={3}  >
          <Card style={{ backgroundColor: '#f0f7f7', height: '100vh' }}>
            <UserInfo />
          </Card>
        </Grid>

      </Grid>

    </>
  );
}

export default HomePage;