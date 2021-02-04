const auth = require("./auth");

const authenticate = require("../middlewares/authenticate");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.status(200).send({
      message: "Welcome to mern stack backend",
    });
  });

  app.use("/api/auth", auth);
};
