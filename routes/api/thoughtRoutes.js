const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
    
} = require('../../controllers/thoughtController');
// endpoint: /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// endpoint: /api/thoughts/:thoughtsId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// endpoint: /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

//endpoint: /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;



