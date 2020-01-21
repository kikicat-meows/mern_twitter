// module.exports = {
//   mongoURI:
//     "mongodb+srv://dev:qx9rPVh69Mz4t3Li@cluster0-tqq0p.mongodb.net/test?retryWrites=true&w=majority",
//     secretOrKey: 'thisshitisbananas'
//   //Make sure this is your own unique string
// };

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = require("./keys_dev");
}