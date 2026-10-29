import Review from "../../models/review.js";

// CREATE
export const reviewController = (req, res) => {
  const { gameTitle, rating, title, review, spoilers, platform } = req.body;
  const newItem = new Review({ gameTitle, rating, title, review, spoilers, platform });

  newItem
    .save()
    .then(() => res.status(201).send("Review saved successfully"))
    .catch((error) => res.status(500).send("Error saving: " + error));
};

// READ ALL
export const getAllReviewController = (req, res) => {
  Review.find()
    .then((items) => res.status(200).json(items))
    .catch((error) => res.status(500).send("Error fetching: " + error));
};

// READ ONE
export const getReviewByIdController = (req, res) => {
  Review.findById(req.params.id)
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).json(item);
    })
    .catch((error) => res.status(500).send("Error fetching: " + error));
};

// UPDATE
export const updateReviewController = (req, res) => {
  Review.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).json(item);
    })
    .catch((error) => res.status(500).send("Error updating: " + error));
};

// DELETE
export const deleteReviewController = (req, res) => {
  Review.findByIdAndDelete(req.params.id)
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).send("Review deleted successfully");
    })
    .catch((error) => res.status(500).send("Error deleting: " + error));
};
