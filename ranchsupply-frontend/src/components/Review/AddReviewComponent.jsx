import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from 'axios';
import { toast } from 'react-toastify';
import { UserContext } from '../../context/UserProvider';

const AddReviewComponent = ({ productId, show, handleClose }) => {
  const { userData } = useContext(UserContext);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(2); // Default rating value
  const [hover, setHover] = useState(-1); // For hover feedback

  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

  const getLabelText = (value) => `${value} Star${value !== 1 ? 's' : ''}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userData.id) {
        toast.error('User not authenticated', {
          position: 'bottom-right',
        });
        return;
      }
      
      const review = { reviewText: comment, rating };
  

    try {
      const response = await axios.post(`/reviews/product/${productId}/user/1`, review); // Assuming userId is 1 for now
      toast.success('Review submitted!', {
        position: 'bottom-right',
      });
      handleClose(); 
    } catch (error) {
      console.error(error);
      toast.error('Failed to submit review', {
        position: 'bottom-right',
      });
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Submit Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="rating">
            <Form.Label>Rating:</Form.Label>
            <Box>
              <Typography component="legend">Controlled Rating</Typography>
              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />

              <Typography component="legend">Hover Feedback</Typography>
              <Rating
                name="hover-feedback"
                value={rating}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
              {rating !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : rating]}</Box>
              )}

              <Typography component="legend">Custom Icon and Color</Typography>
              <Rating
                name="customized-color"
                defaultValue={2}
                getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
              />
            </Box>
          </Form.Group>
          <Form.Group controlId="comment">
            <Form.Label>Comment:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Submit Review
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddReviewComponent;
