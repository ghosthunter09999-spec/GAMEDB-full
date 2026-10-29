import Premium from "../../models/premium.js";

// CREATE
export const premiumController = (req, res) => {
  const { fullName, email, plan } = req.body;
  const newItem = new Premium({ fullName, email, plan });

  newItem
    .save()
    .then(() => res.status(201).send("Premium saved successfully"))
    .catch((error) => res.status(500).send("Error saving: " + error));
};

// READ ALL
export const getAllPremiumController = (req, res) => {
  Premium.find()
    .then((items) => res.status(200).json(items))
    .catch((error) => res.status(500).send("Error fetching: " + error));
};

// READ ONE
export const getPremiumByIdController = (req, res) => {
  Premium.findById(req.params.id)
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).json(item);
    })
    .catch((error) => res.status(500).send("Error fetching: " + error));
};

// UPDATE
export const updatePremiumController = (req, res) => {
  Premium.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).json(item);
    })
    .catch((error) => res.status(500).send("Error updating: " + error));
};

// DELETE
export const deletePremiumController = (req, res) => {
  Premium.findByIdAndDelete(req.params.id)
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).send("Premium deleted successfully");
    })
    .catch((error) => res.status(500).send("Error deleting: " + error));
};
