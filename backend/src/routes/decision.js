const router = require("express").Router();

router.post("/decision", async (req, res) => {
  try {
    // balance sheet that is received from the accounting engine
    const balanceSheet = req.body.balanceSheet;
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
