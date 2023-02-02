const { Thought, User } = require("../models");

module.exports = {
  //getting all thoughts by invoking find() while also populating the document with the belonging reaction. Thoughts are sorted in descending order. Results returned a JSON object, or error caught. Errors cause 500 status code and error message in JSON.
  getThoughts(req, res) {
    Thought.find({})
    .populate({
        path: 'reactions',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  //Getting a single thought using findOne() by thought_id, or error
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
    .populate({
        path: 'reactions',
        select: '-__v'
      })
      .select('-__v')
      //.sort({ _id: -1 })
      .then((thought) => { if
        (!thought) {
          
      res.status(400).json({ message: "No thought with that ID" })
        }
        return res.json(thought)
       
  })
      .catch((err) => res.status(500).json(err));
  },

  //creating a new thought accepting req.body including the entire Thought object.The  User who creates the thought needs to be updated, thoughtId added to thought array.
  createThought(req, res) {
    Thought.create(req.body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: _id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res
              .status(400)
              .json({ message: "Thought created but no user with that Id" })
          : res.json("Created the thought!")
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  //Updates a thought using findOneAndUpdate(). Updates by Id and uses $set operator to put in the req.body - validation required. 
  updateThought(req, res) {
    Thought.findOneAndUpdate(
        {_id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
    ).then((thought) => !thought ? res.status(400).json({message: 'No thought with that Id!'}) : res.json(thought)).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
  },
  //DEletes a thought by thoughId. Then, if thought exists, we look for the user (owner) of the thought and update the thought array for the user in order to avoid orphaned data. 
  deleteThought(req, res) {
   
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>


        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : User.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'thought found but no user with this id!',
            })
          : res.json({ message: 'thought successfully deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },
  //Add a reaction to a thought, adding the body of the reaction using $addToSet.
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
    .populate({path: 'reactions', select: '-__v'})
    .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Remove reactions to thought. This method finds a thought based on ID. It then updates the reactions array associated with the thought in question by removing it's reactionId from the reactions array.
  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionsId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};


