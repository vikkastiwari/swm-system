const bcrypt = require('bcryptjs');

const User = require('../models/user');

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(404).send({
      success: false,
      alerts: [{ type: 'error', message: 'User does not exists.' }],
    });
  }

  // if (!bcrypt.compareSync(password, user.password)) {
  if (password != user.password) {
    return res.status(400).send({
      success: false,
      alerts: [
        { type: 'error', message: 'You have entered incorrect password.' },
      ],
    });
  }

  const token = user.generateAuthToken();
  res.set('x-auth-token', token);
  return res.status(200).send({
    success: true,
    payload: user,
    alerts: [{ type: 'success', message: 'You have logged in successfully.' }],
  });
};

const me = async (req, res) => {
  const { _id } = req.user;

  const user = await User.findById(_id);
  if (!user) {
    return res.status(404).send({
      success: false,
      alerts: [{ type: 'error', message: 'User does not exists.' }],
    });
  }

  const token = user.generateAuthToken();

  res.set('x-auth-token', token);
  return res.status(200).send({
    success: true,
    payload: user,
    alerts: [{ type: 'success', message: 'You have logged in successfully.' }],
  });
};


module.exports = { login, me };
