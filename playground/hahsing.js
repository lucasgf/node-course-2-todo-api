const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = '123abc!';

bcrypt.genSalt(10, (error, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

let hashedPassword = '$2a$10$yMVJOSf9XDgGAPsIFx09DeNA1wtZheDyOa44dHoNL4QL4Nxfwg3N2'

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
})

let data = {
  id: 10
}

let token = jwt.sign(data, '123abc');

let decoded = jwt.verify(token, '123abc');