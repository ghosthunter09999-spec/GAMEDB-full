import Search from "../../models/search.js";

// CREATE
export const searchController = (req, res) => {
  const { query, genre, platform, yearFrom, yearTo, sortBy } = req.body;
  const newItem = new Search({ query, genre, platform, yearFrom, yearTo, sortBy });

  newItem
    .save()
    .then(() => res.status(201).send("Search saved successfully"))
    .catch((error) => res.status(500).send("Error saving: " + error));
};

// READ ALL
export const getAllSearchController = (req, res) => {
  Search.find()
    .then((items) => res.status(200).json(items))
    .catch((error) => res.status(500).send("Error fetching: " + error));
};

// READ ONE
export const getSearchByIdController = (req, res) => {
  Search.findById(req.params.id)
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).json(item);
    })
    .catch((error) => res.status(500).send("Error fetching: " + error));
};

// UPDATE
export const updateSearchController = (req, res) => {
  Search.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).json(item);
    })
    .catch((error) => res.status(500).send("Error updating: " + error));
};

// DELETE
export const deleteSearchController = (req, res) => {
  Search.findByIdAndDelete(req.params.id)
    .then((item) => {
      if (!item) return res.status(404).send("Not found");
      res.status(200).send("Search deleted successfully");
    })
    .catch((error) => res.status(500).send("Error deleting: " + error));
};
