import Rating from "../../models/rating.js";

// CREATE
export const ratingController = (req, res) => {
  const { gameTitle, rating, platform, hoursPlayed, recommend, notes } = req.body;
  const newItem = new Rating({ gameTitle, rating, platform, hoursPlayed, recommend, notes });

  newItem
    .save()
    .then(() => res.status(201).send("Rating saved successfully"))
    .catch((error) => res.status(500).send("Error saving: " + error));
};

// READ ALL
export const getAllRatingController = (req, res) => {
  Rating.find()
    .then((items) => res.status(200).json(items))
    .catch((error) => res.status(500).send("Error fetching: " + error));
};

// READ ONE
export const getRatingByIdController = (req, res) => {
  Rating.findById(req.params.id)
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).json(item);
    })
    .catch((error) => res.status(500).send("Error fetching: " + error));
};

// UPDATE
export const updateRatingController = (req, res) => {
  Rating.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).json(item);
    })
    .catch((error) => res.status(500).send("Error updating: " + error));
};

// DELETE
export const deleteRatingController = (req, res) => {
  Rating.findByIdAndDelete(req.params.id)
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).send("Rating deleted successfully");
    })
    .catch((error) => res.status(500).send("Error deleting: " + error));
};
