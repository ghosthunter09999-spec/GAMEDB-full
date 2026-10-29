import Login from "../../models/login.js";

// CREATE
export const loginController = (req, res) => {
  const { email, password, remember } = req.body;
  const newItem = new Login({ email, password, remember });

  newItem
    .save()
    .then(() => res.status(201).send("Login saved successfully"))
    .catch((error) => res.status(500).send("Error saving: " + error));
};

// READ ALL
export const getAllLoginController = (req, res) => {
  Login.find()
    .then((items) => res.status(200).json(items))
    .catch((error) => res.status(500).send("Error fetching: " + error));
};

// READ ONE
export const getLoginByIdController = (req, res) => {
  Login.findById(req.params.id)
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).json(item);
    })
    .catch((error) => res.status(500).send("Error fetching: " + error));
};

// UPDATE
export const updateLoginController = (req, res) => {
  Login.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).json(item);
    })
    .catch((error) => res.status(500).send("Error updating: " + error));
};

// DELETE
export const deleteLoginController = (req, res) => {
  Login.findByIdAndDelete(req.params.id)
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).send("Login deleted successfully");
    })
    .catch((error) => res.status(500).send("Error deleting: " + error));
};
