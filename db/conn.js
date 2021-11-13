const mongoose = require ("mongoose");
const DB = process.env.DATABASE;

mongoose.connect(DB , {
    useUnifiedTopology: true,
    useNewUrlParser : true
}).then(() => {
    console.log("Connected to database !");
}).catch( () => {
  console.log("No connection");
})