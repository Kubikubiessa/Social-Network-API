const { Schema, model } = require("mongoose");
const moment = require("moment");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // mongoose getter method for timestamp
      get: (timeCreated) =>
        moment(timeCreated).format("MMM DD, YYYY [at] hh:mm a"),
    },
  },

  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    text: {
      String,
      required: true,
      maxLength: 280,
    },

    username: {
      String,
      required: true,
      trim: true
    },

    reactions: [reactionSchema],

    createdAt: {
      type: Date,
      default: Date.now,
      get: (timeCreated) =>
        moment(timeCreated).format("MMM DD, YYYY [at] hh:mm a"),
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `commentCount` that gets the amount of comments per post
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Initialize our Post model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
