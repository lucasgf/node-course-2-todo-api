//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoSB Server');
  }
  console.log('Connected to MongoDB Server');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c620593f523ab7b183e2aac')
  },{
    $set: {
      name: 'Lucas'
    },
    $inc: {
      age: 1
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })

  //db.close();
});