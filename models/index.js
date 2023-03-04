const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  avatar: {
    type: String,
  },
  birthDate: {
    type: String,
    minLength: 2,
  },
  experiences: {
    type: Number,
  },
  resumeLink: {
    type: String,
  },
  phone: {
    type: String,
  },
  university: {
    type: String,
  },
  objective: {
    type: [String],
  },
  technologies: {
    type: [String],
  },
});
const miniSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  githubLink: {
    type: String,
    required: true,
  },
  externalLink: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  technologies: {
    type: [String],
  },
  delay: {
    type: Number,
  },
});
const workedSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      unique: true,
      required: true,
    },
    position: {
      type: String,
      unique: true,
      required: true,
    },
    startDate: {
      type: String,
      unique: true,
      required: true,
    },
    endDate: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: [String],
    },
  },
  { timestamps: true }
);
const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  githubLink: {
    type: String,
    required: true,
  },
  externalLink: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  technologies: {
    type: [String],
  },
  wallPaper: {
    type: String,
  },
});

const workModel = mongoose.model("worked", workedSchema);
const miniModel = mongoose.model("project", miniSchema);
const projectModel = mongoose.model("experience", projectSchema);
const aboutModel = mongoose.model("aboutme", aboutSchema);

module.exports = { workModel, miniModel, projectModel, aboutModel };
