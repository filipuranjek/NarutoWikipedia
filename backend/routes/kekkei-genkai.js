const express = require("express");
const router = express.Router();
const axios = require("axios");

const apiUrl = "https://narutodb.xyz/api/kekkei-genkai";

router.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 15;

  try {
    const response = await axios.get(`${apiUrl}?page=${page}&limit=${limit}`);
    res.json(response.data);
  } catch (err) {
    console.error("Error fetching kekkei-genkai from API:", err.message);
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const response = await axios.get(`${apiUrl}/${req.params.id}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/search/:name", async (req, res) => {
  try {
    const response = await axios.get(`${apiUrl}/search?name=${req.params.name}`);
    res.json(response.data);
  } catch (err) {
    console.error("Error fetching kekkei-genkai by name from API:", err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
