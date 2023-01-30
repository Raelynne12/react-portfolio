const mongoose = require("mongoose");
const pw = process.env.REACT_APP_MONGO_PASSWORD;
const vocaDb = mongoose
  .connect(
    `mongodb+srv://Raelynne:${pw}@cluster0.srs38cr.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "front-test",
    }
  )
  .then(() => {
    console.log("connect success");
  })
  .catch((err) => console.log(err));

module.exports = vocaDb;
