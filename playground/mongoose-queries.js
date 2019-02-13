const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//let id = '5c631883e92c5fdc53e77e9c';

// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos:', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   if (!todo) {
//     console.log('Id not found');
//   }
//   console.log('Todo:', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     console.log('Id not found');
//   }
//   console.log('Todo:', todo);
// }).catch((e) => console.log(e));

let id = '5c62aa69fef6a5401ce6c4fb'

User.findById(id).then((user) => {
  if (!user) {
    console.log('User not found');
  } else {
    console.log('User:', JSON.stringify(user, undefined, 2));
  }
}).catch((e) => console.log(e));