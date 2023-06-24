import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import RecipeImage from '../images/recipes.jpg';

import { useNavigate } from 'react-router-dom';
import './RecipeCards.css'
// import { type } from 'os';

export default function FundraisingPostCards(props) {

  const [open, setOpen] = React.useState(false);
  const [recipeBtnOpen, setRecipeBtnOpen] = React.useState(false)
  const navigate = useNavigate()
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const handleOpen = () => {
     setOpen(true) 
  }
  const handleClose = () => {
    setOpen(false)
  }

  const handleRecipeBtnOpen = () => {
    setRecipeBtnOpen(true) 
 }
 const handleRecipeBtnClose = () => {
   setRecipeBtnOpen(false)
 }
 const handleRecipeBtnUpdate = (id) => {
  //here recipe update code will be written
  navigate(`/api/update/:${id}`)
  
}

const handleRecipeBtnDelete = (id) => {

  return () => {
    fetch(`/api/${id}`,{
      method:"DELETE"
  })
  .then(response => response.json())
  .then(data => {
      console.log(data)
      window.location.reload()
  })
  .catch(error => console.error(error));
  }

}
  return (
    <div className='fundraising-post-card'>
    <Card sx={{ maxWidth: 345 }} className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={RecipeImage}
          alt="recipe image"
          className='card-image'
        />
        <CardContent>
        
          <Typography gutterBottom variant="h5" component="div" className='card-setting'>
            Recipe Name:  {props.recipe.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className='card-setting'>
            Recipe Description: {props.recipe.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleRecipeBtnDelete(props.recipe._id)}
        >
          Delete
        </Button>
        <Button size="small" color="primary" onClick={handleRecipeBtnUpdate(props.recipe._id)}>
          Update
        </Button>
        <Dialog open={recipeBtnOpen} onClose={handleRecipeBtnClose}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit your recipe.
          </DialogContentText>
          
                   
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRecipeBtnClose}>Cancel</Button>
          <Button onClick={handleRecipeBtnClose}>Update</Button>
        </DialogActions>
      </Dialog>


        <Button onClick={handleOpen}>View Recipe</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className='modal-container'>
                <div className='modal-image'>
                <CardMedia
                    component="img"
                    height="200"
                    image={RecipeImage}
                    alt="recipe post image"
                    className='card-image'
                />
                </div>
                <div className='modal-content'>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign:'left'}}>
                      <h4 >Title: {props?.recipe?.title}</h4>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{textAlign:'left'}}>
                      <h4 >Description: {props?.recipe?.description}</h4>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{textAlign:'left'}}>
                      <h4 >ingredients: {props?.recipe?.ingredients}</h4>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{textAlign:'left'}}>
                      <h4 >Instructions: {props?.recipe?.instructions}</h4>
                    </Typography>
                </div>
              </div>
              
            </Box>
          </Modal>
      </CardActions>
    </Card>
    </div>
  );
}