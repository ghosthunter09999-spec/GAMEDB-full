import Feedback from "../../models/feedback.js";

// CREATE
export const feedbackController = (req, res) => {
  const { name, email, category, rating, feedback } = req.body;
  const newItem = new Feedback({ name, email, category, rating, feedback });

  newItem
    .save()
    .then(() => res.status(201).send("Feedback saved successfully"))
    .catch((error) => res.status(500).send("Error saving: " + error));
};

// READ ALL
export const getAllFeedbackController = (req, res) => {
  Feedback.find()
    .then((items) => res.status(200).json(items))
    .catch((error) => res.status(500).send("Error fetching: " + error));
};

// READ ONE
export const getFeedbackByIdController = (req, res) => {
  Feedback.findById(req.params.id)
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).json(item);
    })
    .catch((error) => res.status(500).send("Error fetching: " + error));
};

// UPDATE
export const updateFeedbackController = (req, res) => {
  Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).json(item);
    })
    .catch((error) => res.status(500).send("Error updating: " + error));
};

// DELETE
export const deleteFeedbackController = (req, res) => {
  Feedback.findByIdAndDelete(req.params.id)
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).send("Feedback deleted successfully");
    })
    .catch((error) => res.status(500).send("Error deleting: " + error));
};
