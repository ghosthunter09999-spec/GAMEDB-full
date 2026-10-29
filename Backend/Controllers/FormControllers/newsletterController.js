import Newsletter from "../../models/newsletter.js";

// CREATE
export const newsletterController = (req, res) => {
  const { email, name, frequency, genres } = req.body;
  const newItem = new Newsletter({ email, name, frequency, genres });

  newItem
    .save()
    .then(() => res.status(201).send("Newsletter saved successfully"))
    .catch((error) => res.status(500).send("Error saving: " + error));
};

// READ ALL
export const getAllNewsletterController = (req, res) => {
  Newsletter.find()
    .then((items) => res.status(200).json(items))
    .catch((error) => res.status(500).send("Error fetching: " + error));
};

// READ ONE
export const getNewsletterByIdController = (req, res) => {
  Newsletter.findById(req.params.id)
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).json(item);
    })
    .catch((error) => res.status(500).send("Error fetching: " + error));
};

// UPDATE
export const updateNewsletterController = (req, res) => {
  Newsletter.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).json(item);
    })
    .catch((error) => res.status(500).send("Error updating: " + error));
};

// DELETE
export const deleteNewsletterController = (req, res) => {
  Newsletter.findByIdAndDelete(req.params.id)
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).send("Newsletter deleted successfully");
    })
    .catch((error) => res.status(500).send("Error deleting: " + error));
};
