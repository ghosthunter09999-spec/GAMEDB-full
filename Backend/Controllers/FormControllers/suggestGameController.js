import SuggestGame from "../../models/suggestGame.js";

// CREATE
export const suggestGameController = (req, res) => {
  const { gameTitle, developer, releaseYear, genre, platforms, reason, email } = req.body;
  const newItem = new SuggestGame({ gameTitle, developer, releaseYear, genre, platforms, reason, email });

  newItem
    .save()
    .then(() => res.status(201).send("SuggestGame saved successfully"))
    .catch((error) => res.status(500).send("Error saving: " + error));
};

// READ ALL
export const getAllSuggestGameController = (req, res) => {
  SuggestGame.find()
    .then((items) => res.status(200).json(items))
    .catch((error) => res.status(500).send("Error fetching: " + error));
};

// READ ONE
export const getSuggestGameByIdController = (req, res) => {
  SuggestGame.findById(req.params.id)
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).json(item);
    })
    .catch((error) => res.status(500).send("Error fetching: " + error));
};

// UPDATE
export const updateSuggestGameController = (req, res) => {
  SuggestGame.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).json(item);
    })
    .catch((error) => res.status(500).send("Error updating: " + error));
};

// DELETE
export const deleteSuggestGameController = (req, res) => {
  SuggestGame.findByIdAndDelete(req.params.id)
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).send("SuggestGame deleted successfully");
    })
    .catch((error) => res.status(500).send("Error deleting: " + error));
};
