const User = require('../models/users'); // Import the Mongoose User model

// Registration
const create = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = new User({
      name,
      email,
      password,
    });

    await newUser.save();

    res.status(201).json({
      data: newUser,
      success: true,
      message: 'Successfully Registered a User',
      err: {},
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to Add a User',
      err: error,
    });
  }
};

// Authentication
const get = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (user) {
      res.status(200).json({
        data: user,
        success: true,
        message: 'Successfully fetched the User',
        err: {},
      });
    } else {
      res.status(404).json({
        data: user,
        success: true,
        message: 'User does not exist',
        err: {},
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to fetch the User',
      err: error,
    });
  }
};

module.exports = {
  create,
  get,
};
