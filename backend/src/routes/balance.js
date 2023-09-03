const router = require("express").Router();
const generateFakeData = require("../utils/FakeBalanceSheetData");
const Business = require("../models/Business");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

router.get("/balance-sheet", async (req, res) => {
  try {
    const AccountingProviderData = generateFakeData();

    const { name, email, businessId } = req.body;

    const business = await Business.findById(businessId);

    if (business.userData.email !== email || business.userData.name !== name) {
      res.status(404).json("not yours");
    } else {
      // sample balance sheet
      res.status(200).json({
        name: name,
        email: email,
        balanceSheet: AccountingProviderData,
        business: {
          name: business.name,
          yearEst: business.yearEst,
          profitLossSummary: business.profitLossSummary,
        },
      });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
