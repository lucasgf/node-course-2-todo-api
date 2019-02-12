//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoSB Server');
  }
  console.log('Connected to MongoDB Server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result)
  // })

  db.collection('Users').deleteMany({name: 'Lucas'});

  db.collection('Users').findOneAndDelete({_id: new ObjectID("5c620599f523ab7b183e2aaf")}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  //db.close();
});