const router = require("express").Router();

const Business = require("../models/Business");
const User = require("../models/User");

const AccountingProviderData = [
  {
    year: 2020,
    month: 12,
    profitOrLoss: 250000,
    assetsValue: 1234,
  },
  {
    year: 2020,
    month: 11,
    profitOrLoss: 1150,
    assetsValue: 5789,
  },
  {
    year: 2020,
    month: 10,
    profitOrLoss: 2500,
    assetsValue: 22345,
  },
  {
    year: 2020,
    month: 9,
    profitOrLoss: -187000,
    assetsValue: 223452,
  },
];

router.post("/new", async (req, res) => {
  try {
    const { userData } = req.body;
    // check for user
    let user = await User.findOne({ email: userData.email });

    // initialise new user if they don't exist
    if (user === null) {
      const newUser = new User(userData);
      user = await newUser.save();
    }

    const businessRes = new Business(req.body);
    const response = await businessRes.save();
    await user.updateOne({
      $push: { applicationData: response._id },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.get("/balance-sheet", async (req, res) => {
  try {
    const { name, ownerEmail } = req.body;

    // sample balance sheet
    res.status(200).json(AccountingProviderData);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.get("/:userEmail", async (req, res) => {
  try {
    const data = await Business.find({
      "userData.email": req.params.userEmail,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
