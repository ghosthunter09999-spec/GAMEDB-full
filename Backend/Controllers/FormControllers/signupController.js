import Signup from "../../models/signup.js";

// CREATE
export const signupController = (req, res) => {
  const { username, email, password } = req.body;
  const newItem = new Signup({ username, email, password });

  newItem
    .save()
    .then(() => res.status(201).send("Signup saved successfully"))
    .catch((error) => res.status(500).send("Error saving: " + error));
};

// READ ALL
export const getAllSignupController = (req, res) => {
  Signup.find()
    .then((items) => res.status(200).json(items))
    .catch((error) => res.status(500).send("Error fetching: " + error));
};

// READ ONE
export const getSignupByIdController = (req, res) => {
  Signup.findById(req.params.id)
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).json(item);
    })
    .catch((error) => res.status(500).send("Error fetching: " + error));
};

// UPDATE
export const updateSignupController = (req, res) => {
  Signup.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).json(item);
    })
    .catch((error) => res.status(500).send("Error updating: " + error));
};

// DELETE
export const deleteSignupController = (req, res) => {
  Signup.findByIdAndDelete(req.params.id)
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).send("Signup deleted successfully");
    })
    .catch((error) => res.status(500).send("Error deleting: " + error));
};
