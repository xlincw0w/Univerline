import React, { useState } from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import AmiCard from './AmiCard'





function ListAmis(props) {
    // const classes = useStyles();
    // const [ami, setAmi] = useState([{ nom: 1 }, { nom: 1 }, { nom: 1 }, { nom: 2 }, { nom: 2 }, { nom: 2 }, { nom: 2 }, { nom: 2 }]);
    const user = props.user

    return (
        <div style={{ padding: '10px' }}>
            {
                user.users && user.users.map(u => <AmiCard user={u} key={u.uid} onClick={props.initChat} />)

            }
        </div>
    )




}
export default ListAmis