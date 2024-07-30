const express = require("express");
const router = express.Router();
const axios = require("axios");

const apiUrl = "https://narutodb.xyz/api/tailed-beast";

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${apiUrl}`);
    res.json(response.data);
  } catch (err) {
    console.error("Error fetching tailed-beast from API:", err.message);
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
    console.error("Error fetching tailed-beast by name from API:", err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
