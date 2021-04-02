import { userConstants } from "./constants";
import firebase from "firebase/app";
import Axios from 'axios'
import { constants } from "../../../constants"
import moment from 'moment'

import "firebase/auth";

import "firebase/firestore";
import { SetConversation } from "../../../store/auth/auth";
export const getRealtimeUsers = (uid) => {

    //console.log('uid', uid)

    return async (dispatch) => {

        dispatch({ type: `${userConstants.GET_REALTIME_USERS}_REQUEST` });

        const db = firebase.firestore();
        const unsubscribe = db.collection("users")
            //.where("uid", "!=", uid)
            .onSnapshot((querySnapshot) => {
                const users = [];
                querySnapshot.forEach(function (doc) {
                    if (doc.data().uid !== uid) {
                        users.push(doc.data());
                    }
                });
                //console.log(users);

                dispatch({
                    type: `${userConstants.GET_REALTIME_USERS}_SUCCESS`,
                    payload: { users }
                });

            });

        return unsubscribe;

    }

}
export const updateMessage = (msgObj) => {
    return async dispatch => {

        const db = firebase.firestore();
        db.collection('conversations')
            .add({
                ...msgObj,
                isView: false,
                createdAt: moment().utc().format()
            })
            .then((data) => {

                console.log(data)

                //success
                //   dispatch({
                //     type: userConstants.GET_REALTIME_MESSAGES,
                // })
                Axios.all([
                    Axios.post(constants.url + '/api/historique/update/historique',
                        {
                            id_user: msgObj.user_uid_1,
                            id_contact: msgObj.user_uid_2,
                            createdAt: moment().utc().format()
                        }),
                    Axios.post(constants.url + '/api/historique/update/historique',
                        {
                            id_user: msgObj.user_uid_2,
                            id_contact: msgObj.user_uid_1,
                            createdAt: moment().utc().format(),

                        }),

                ])
            })
            .catch(error => {
                console.log(error)
            });

    }
}

export const getRealtimeConversations = (user) => {
    return async dispatch => {

        const db = firebase.firestore();
        db.collection('conversations')
            .where('user_uid_1', 'in', [user.uid_1, user.uid_2])
            .orderBy('createdAt', 'asc')
            .onSnapshot((querySnapshot) => {

                const conversations = [];

                querySnapshot.forEach(doc => {

                    if (
                        (doc.data().user_uid_1 == user.uid_1 && doc.data().user_uid_2 == user.uid_2)
                        ||
                        (doc.data().user_uid_1 == user.uid_2 && doc.data().user_uid_2 == user.uid_1)
                    ) {
                        conversations.push(doc.data())
                    }



                    //  if(conversations.length > 0){

                    // }else{
                    //     dispatch({
                    //         type: `${userConstants.GET_REALTIME_MESSAGES}_FAILURE`,
                    //         payload: { conversations }
                    //     })
                    // }




                });

                dispatch(SetConversation(conversations))


            })
        //user_uid_1 == 'myid' and user_uid_2 = 'yourId' OR user_uid_1 = 'yourId' and user_uid_2 = 'myId'


    }
}