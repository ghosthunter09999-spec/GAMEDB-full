import Contact from "../../models/contact.js";

// CREATE
export const contactController = (req, res) => {
  const { name, email, subject, message } = req.body;
  const newItem = new Contact({ name, email, subject, message });

  newItem
    .save()
    .then(() => res.status(201).send("Contact saved successfully"))
    .catch((error) => res.status(500).send("Error saving: " + error));
};

// READ ALL
export const getAllContactController = (req, res) => {
  Contact.find()
    .then((items) => res.status(200).json(items))
    .catch((error) => res.status(500).send("Error fetching: " + error));
};

// READ ONE
export const getContactByIdController = (req, res) => {
  Contact.findById(req.params.id)
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).json(item);
    })
    .catch((error) => res.status(500).send("Error fetching: " + error));
};

// UPDATE
export const updateContactController = (req, res) => {
  Contact.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).json(item);
    })
    .catch((error) => res.status(500).send("Error updating: " + error));
};

// DELETE
export const deleteContactController = (req, res) => {
  Contact.findByIdAndDelete(req.params.id)
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).send("Contact deleted successfully");
    })
    .catch((error) => res.status(500).send("Error deleting: " + error));
};
