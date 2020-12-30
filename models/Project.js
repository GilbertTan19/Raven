const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  collaborators: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  ],
  applications: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "joinApplication",
    },
  ],
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
});

module.exports = Project = mongoose.model("project", ProjectSchema);
