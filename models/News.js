import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
  newHeading: {
    type: String,
    required: [true, "Title of the news is required"],
  },
  highlightPhoto: {
    type: String,
    required: [true, "Highlight photo is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  date: {
    type: Date,
    required: [true, "News date is required"],
  },
  credit: {
    type: String,
    required: [true, "Credit is required"],
  },
  source: {
    type: String,
    required: [true, "Source of the article is required"],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Writer,
    required: [true, "Author of the article is required"],
  },
  filtertag: {
    type: String,
    enum: [
      "Vulnerabilities",
      "Frauds and Scams",
      "Breaches",
      "Policies and Regulations",
      "Research and Development",
    ],
    required: [true, "Filter Tag is required"],
  },
});

module.exports = mongoose.models.News || mongoose.model("News", NewsSchema);
