require('dotenv').config();
require(mongoose)

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true });

let Person;

const createAndSavePerson = (done) => {
  done(null /*, data*/);
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;

// require('dotenv').config();
// const bodyParser = require('body-parser');

// let express = require('express');
// let app = express();

// const pathToIndex = __dirname + '/views/index.html';
// const pathToPublic = __dirname + '/public';

// function handler (req, res) {
//     res.sendFile(pathToIndex);
// }
// console.log( process.env.MESSAGE_STYLE)

// function jsonResponse(req, res) {
//     let string = "Hello json";
//     const env = process.env.MESSAGE_STYLE;
//     const returnedString = env == "uppercase" ? string.toUpperCase() : string;
//     res.json({"message": returnedString})
// }

// function requestsLogger(req, res, next) {
//     console.log(`${req.method} ${req.path} - ${req.ip}`);
//     next();
// }

// function routeParametersHandler(req, res) {
//     req.body
//     const firstName = req.query.first;
//     const lasttName = req.query.last
//     res.json({name: `${firstName} ${lasttName}`});
// }

// function formSubmitHandler(req, res) {
//     const firstName = req.body.first;
//     const lasttName = req.body.last
//     res.json({name: `${firstName} ${lasttName}`});
// }

// app.use("/public", express.static(pathToPublic));
// // app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: false}))
// app.use(requestsLogger);

// app.get("/", handler);
// app.get("/public", handler);
// app.get("/json", jsonResponse);
// app.get('/now', function(req, res, next) {
//     req.time = new Date().toString()
//     next();
//   }, function(req, res) {
//     res.json({time: req.time});
//   }
// );
// app.get('/:word/echo', function (req, res) {
//     res.json({echo: req.params.word})
// })
// // app.route('/name').get(routeParametersHandler).post(formSubmitHandler)
// app.post("/name", function (req, res) {
//     var string = req.body.first + " " + req.body.last;
//     res.json({ name: string });
// });

// module.exports = app;
