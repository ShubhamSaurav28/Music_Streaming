const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  profilepic: {
    type: String,
    default: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1720609500~exp=1720610100~hmac=a2269570a6d44751991cccddc7fa4c77f70b429b4d48a0281a97678725dc7484'
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  dob: {
    type: Date
  },
  phone: {
    type: String
  },
  location: {
    type: String
  },
  favoriteGenres: {
    type: [String]
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
