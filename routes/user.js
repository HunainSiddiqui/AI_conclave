const express = require('express');
const { registerUser, loginUser, logout, forgotPassword, resetPassword, getUserDetails, updatePassword } = require('../controllers/UserController');
const { isAuthenticatedUser} = require('../middleware/authuser');

const router = express.Router();


router.route("/register").post(registerUser) ;
router.route("/login").post(loginUser)
router.route("/logout").get(logout) ;
router.route("/forgetPassword").post(forgotPassword)
router.route("/password/reset/:token").put(resetPassword)

router.route("/me").get(isAuthenticatedUser, getUserDetails);

router.route("/password/update").put(isAuthenticatedUser, updatePassword);


module.exports = router ;