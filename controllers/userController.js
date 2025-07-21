const asyncHandler = require('express-async-handler');

//Register new user
//@route GET /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    res.json({message: "Register the user"});
});

//Login user
//@route GET /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    res.json({message: "Login the user"});
});

// view current user
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
    res.json({message: "Current user information"});
});


module.exports = { registerUser, loginUser, currentUser };