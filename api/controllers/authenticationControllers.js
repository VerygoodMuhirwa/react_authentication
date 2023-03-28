const Users= require("../models/model")
const bcrypt = require("bcrypt");

const createNewUser = async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  console.log(username, email, password);

  try {
    //check if the user already exists in the database
    const check = await Users.findOne({ email });
    if (check) {
      console.log("The user already exists in the database");
      return res.status(400).json({ error: "User already exists" });
    } else {
      // hash the user's password
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      const user = await new Users({
        username: username,
        email: email,
        password: hashedPassword,
      });
      await user.save();
      console.log("The user has been created in the database");
      return res.status(201).json({ message: "User created successfully" });
    }
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Server error" });
  }
};

module.exports = createNewUser;