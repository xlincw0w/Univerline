import React, { useEffect, useState, useRef } from 'react';
import { getRealtimeUsers, updateMessage, getRealtimeConversations } from '../../actions';
import Layout from '../../componenents/Layout';
import { useDispatch, useSelector } from 'react-redux';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'




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
import './MyStyle.css'

import MonMessage from "../../components/MonMessage"
import LeurMessage from "../../components/LeurMessage"
import IconButton from '@material-ui/core/IconButton';
import { BsFillImageFill } from "react-icons/bs"
import { IoSend } from "react-icons/io5"
import { filter } from 'lodash'
import Axios from 'axios'
import FileModal from './FileModal'

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
  const conversations = useSelector((state) => state.AuthReducer.conversations)

  const [chatStarted, setChatStarted] = useState(false);
  const [chatUser, setChatUser] = useState('');
  const [message, setMessage] = useState('');
  const [userUid, setUserUid] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  {/** *******************************Friends filter******************************* */ }
  const friends = useSelector((state) => state.AuthReducer.friends)
  const user_info = useSelector((state) => state.ProfileReducer.user_info)
  const profile_friends = useSelector((state) => state.ProfileReducer.friends)
  const [filterWord, updateFilter] = useState('')
  const [modal, setModal] = useState(false);

  const scroll = Scroll.animateScroll;

  const messagesEndRef = useRef(null)


  const openModal = () => {
    setModal(true);
  }
  const closeModal = () => {
    setModal(false);
  }


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
  /*
   useEffect(() => {
     { }
     return () => {
       //cleanup
       unsubscribe.then(f => f()).catch(error => console.log(error));
 
     }
   }, []);
   */

  const initChat = (user) => {

    setChatStarted(true)
    setChatUser(`${user.nom} ${user.prenom}`)
    setUserUid(user.id_user);
    setUserAvatar(user.avatar)

    dispatch(getRealtimeConversations({ uid_1: userS.id, uid_2: user.id_user }));
    console.log("ici conversations", user);
    scrollToBottom()


  }
  const submitMessage = (e) => {
    e.preventDefault()

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


  const uploadFile = (file, metadata) => {
    const fileF = []
  }

  return (

    <Grid container direction="row" alignItems="stretch" style={{ height: "max-h-screen" }}  >


      <Grid item sm={3} xs={!chatStarted ? 12 : 5}  >
        {/*****Liste ami */}
        <Card style={{ backgroundColor: '#f0f7f7', maxHeight: "100%", minHeight: '100%' }}>
          <Grid container direction="column">
            <Grid item >
              <Card style={{ backgroundColor: '#f0f7f7', }} >
                <Typography variant='h4' style={{ padding: '10px' }}>
                  Messagerie
                  </Typography>
                <TextField
                  style={{ marginLeft: "15px", marginTop: '10px', marginBottom: '10px', width: '88%' }}
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
              </Card>

            </Grid>
            <Grid item >
              <Card style={{ backgroundColor: '#f0f7f7', paddingLeft: "10px", overflowY: "scroll", maxHeight: '68vh', marginBottom: '10px' }} >

                {filter(friends, (o) => {
                  let searchIn = o.nom + ' ' + o.prenom + ' ' + o.nom
                  return searchIn.includes(filterWord)
                }).map((elem) => {
                  return (
                    <AmiCard onClick={initChat}
                      key={elem.id_user}
                      user={elem} />
                  )
                })}
              </Card>

            </Grid>

          </Grid>


        </Card>
      </Grid>



      <Grid item sm={6} xs={chatStarted ? 7 : null} >
        <Card style={{ backgroundColor: '#f0f7f7', maxHeight: "100%", minHeight: '100%' }} >
          {/***************************************************************************
         * Le Chat Feed
         */}

          <Grid container direction="column" >
            <Grid item  >
              <div className="chat-feed">
                <div className="messageSections h-full"  >
                  {
                    chatStarted ?
                      conversations.map(con => <div style={{ textAlign: con.user_uid_1 == userS.id ? 'right' : 'left' }}>
                        <p className="messageStyle" style={{ backgroundColor: con.user_uid_1 == userS.id ? '#0277bd' : '#0097a7', maxWidth: '60%' }} >{con.message}
                        </p>

                      </div>)
                      : null
                  }


                </div>
              </div>


            </Grid>
            <Grid item >

              <form className="formulaire" onSubmit={submitMessage}>
                <Grid container direction="row">
                  <Grid item sm={10} xs={8}>
                    <input className="champEnvoi" onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      placeholder='votre message...'
                      autoFocus
                    />
                  </Grid>
                  <Grid item sm={1} xs={2}>
                    <IconButton aria-label="img" >
                      <BsFillImageFill onClick={openModal} />
                    </IconButton>
                    <FileModal
                      modal={modal}
                      closeModal={closeModal}
                      uploadFile={uploadFile}

                    />
                  </Grid>
                  <Grid item sm={1} xs={2}>
                    <IconButton aria-label="send" >
                      <IoSend onClick={submitMessage} />
                    </IconButton>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      {/**************************************************************************
          * UserINFO
          */}
      <Grid item sm={3}   >
        <Card style={{ backgroundColor: '#f0f7f7', minHeight: '100%' }} className="max-h-full w-full" >
          {
            chatStarted ? <UserInfo user={chatUser} userAvatar={userAvatar} /> : null
          }

        </Card>
      </Grid>


    </Grid>
  );
}

export default HomePage;