import React , {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import SendIcon from '@material-ui/icons/Send';
import SettingsIcon from '@material-ui/icons/Settings';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch'
import img from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'
import img5 from './téléchargement.jpg'
import '../Messagerie/messagerie.css'



const useStyles = makeStyles((theme) => ({
    
    
    large: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
    xlarge: {
        width: theme.spacing(9),
        height: theme.spacing(9),
      },
      xxlarge: {
        width: theme.spacing(15),
        height: theme.spacing(15),
      },
  }));



export default function Messagerie() {
    const classes = useStyles();
    const [switch1, setswitch1]=useState(true);
    const [div3, setdiv3]=useState(true);

  

    const div =() => {
        setswitch1(!switch1);
        setdiv3(!div3);
    }
  


    return (
        <div className='contenaire'>




            <div className='div1' >
            
            <div className='haut shadow-lg'>
            <div className='flex myAvatar shadow-lg'>
            <Avatar alt="Reseau social"  src={img} className={classes.large} /> 
            <h1> Ma Messagerie </h1>
            </div>
            <div>
            <form>
            
            <TextField label="Recherche Contacts"/> 
            <Button  
            className='btncntct'
            type='submit'
            variant="contained"
            color="primary"
            endIcon={<SearchIcon/>}>
                Search
            </Button>
                
            </form> 
            </div>
            </div>
            <div className='bas block'>


            <div className='flex' style={{margin:"10px",  background:"rgb(209, 209, 209)", padding:"5px", borderRadius:"10px"}}>
            <div> 
            <Avatar alt="Reseau social"  src={img2} className={classes.large}/> 
            </div>
            <div style={{marginLeft:"10px"}}> 
            <p>Bessaha<br/>Naim</p>
            </div>
            </div>


            <div className='flex' style={{margin:"10px",  background:"rgb(209, 209, 209)", padding:"5px", borderRadius:"10px"}}>
            <div> 
            <Avatar alt="Reseau social"  src={img3} className={classes.large}/> 
            </div>
            <div style={{marginLeft:"10px"}}> 
            <p>Hadji<br/>Salim</p>
            </div>
            </div>

            <div className='flex' style={{margin:"10px",  background:"rgb(209, 209, 209)", padding:"5px", borderRadius:"10px"}}>
            <div> 
            <Avatar alt="Reseau social"  src={img4} className={classes.large}/> 
            </div>
            <div style={{marginLeft:"10px"}}> 
            <p>Hadji <br/>Soraya</p>
            </div>
            </div>

            <div className='flex' style={{margin:"10px",  background:"rgb(209, 209, 209)", padding:"5px", borderRadius:"10px"}}>
            <div> 
            <Avatar alt="Reseau social"  src={img5} className={classes.large}/> 
            </div>
            <div style={{marginLeft:"10px"}}> 
            <p>Nom <br/>Prenom</p>
            </div>
            </div>


            </div>
            </div>



















            <div className='div2'>
            <div className='entete flex shadow-lg'>
            <div className='enteteInformation flex'>
            <div>
            <Avatar alt="Neseau social"  src={img2} className={classes.xlarge}/> 
            </div>
            <div className='block infpersonel'>
            <p>Bessaha</p>
            <p>Naim</p>
            </div>
            </div>
            <div className='enteteButton'>
            <Switch inputProps={{ 'aria-label': 'primary checkbox' }} onClick={div} color='primary' checked={switch1} />
            
        
            </div>
            </div>



            <div className='message block' >
            <div className='theirMessages' style={{textAlign:"left"}}>
            <p style={{backgroundColor:"rgb(214, 214, 214)", padding:"10px",marginRight:"50vh" }}>anwali achou ayilin</p>
            </div>
            <div className='myMessages' style={{textAlign:"right"}}><p>hjhvhhhhhhhhhhhhhhurd</p>
            </div>
            </div>












            <div className='envoie shadow'>
         
            <form className='form'>
             <Input
            className='input'
            placeholder='Type Message...'
            
            /> 
            
            <Button  
            type='submit'
            variant="contained"
            color="primary"
            endIcon={<SendIcon/>}>
            </Button>
            
             </form>
             </div>
            
            




            </div>
           
            {div3 && (
                
                <div className='div3'>
                 <div className='entete3 shadow-lg'>
                <Avatar alt="Neseau social"  src={img2} className={classes.xxlarge} />
                <h1><a href="#">Bessaha Naim</a></h1>
                <p>anwali achou ayilin</p>
                 </div>
                <div className='bas3'>
                <p>Nom Prenom</p>
                </div>
                </div>
            )}
                
           
                
            
           
            
            
            
            
        </div>

    )
}
