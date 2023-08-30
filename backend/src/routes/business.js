const Business = require("../models/Business");

const router = require("express").Router();

router.post("/new", async (req, res) => {
  try {
    const { name, yearEst, profitLossSummary } = req.body;
    const business = new Business({ name, yearEst, profitLossSummary });
    const response = await business.save();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
