const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`)

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

let glossarySchema = mongoose.Schema({
  word: String,
  definition: String
})

let GlossaryEntry = mongoose.model('GlossaryEntry', glossarySchema);

let save = (entry) => {
  return new GlossaryEntry(entry).save();
}

let getAll = () => {
  return GlossaryEntry.find();
}

let search = (query) => {
  return GlossaryEntry.find({word: {$regex: query, $options:'i'}})
}

let update = (query) => {
  return GlossaryEntry.findOneAndUpdate(
    {word: query.query.word},
    {word: query.query.word, definition: query.newData});
}

let remove = (query) => {
  return GlossaryEntry.deleteOne({word: query.word});
}

module.exports = {
  save: save,
  getAll: getAll,
  search: search,
  update: update,
  delete: remove
}