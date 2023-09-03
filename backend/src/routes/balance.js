const router = require("express").Router();
const generateFakeData = require("../utils/FakeBalanceSheetData");

router.get("/balance-sheet", async (req, res) => {
  try {
    const AccountingProviderData = generateFakeData();

    const { name, ownerEmail } = req.body;

    // sample balance sheet
    res.status(200).json(AccountingProviderData);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
