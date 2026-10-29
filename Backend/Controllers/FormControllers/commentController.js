import Comment from "../../models/comment.js";

// CREATE
export const commentController = (req, res) => {
  const { gameTitle, username, comment, parentId } = req.body;
  const newItem = new Comment({ gameTitle, username, comment, parentId });

  newItem
    .save()
    .then(() => res.status(201).send("Comment saved successfully"))
    .catch((error) => res.status(500).send("Error saving: " + error));
};

// READ ALL
export const getAllCommentController = (req, res) => {
  Comment.find()
    .then((items) => res.status(200).json(items))
    .catch((error) => res.status(500).send("Error fetching: " + error));
};

// READ ONE
export const getCommentByIdController = (req, res) => {
  Comment.findById(req.params.id)
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).json(item);
    })
    .catch((error) => res.status(500).send("Error fetching: " + error));
};

// UPDATE
export const updateCommentController = (req, res) => {
  Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).json(item);
    })
    .catch((error) => res.status(500).send("Error updating: " + error));
};

// DELETE
export const deleteCommentController = (req, res) => {
  Comment.findByIdAndDelete(req.params.id)
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).send("Comment deleted successfully");
    })
    .catch((error) => res.status(500).send("Error deleting: " + error));
};
