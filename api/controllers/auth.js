const { Users, validateUser } = require("../models/model");
const _ = require("lodash");
const bcrypt = require("bcrypt");

const logginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { error } = validateUser(req.body);
    if (error) {
      res.send(error.details[0].message).status(404);
    }
    const user = await Users.findOne({ email });
    
    
    if (!user) {
        return res.status(403).json({ message: "Invalid email or password" });
    }

    //harshing the request body  password
    const salt = await bcrypt.genSalt(10);
    const harshedPassword = await bcrypt.hash(password, salt);
    const UserPassword = user.password;
    console.log(UserPassword);
    //compare the harshed password with the User password
    if (!harshedPassword == UserPassword) {
      return res.status(403).json({ message: "Invalid email or password" });
    } else {
      return res.status(201).json({ Token: "Token" + user.generateAuthToken() });
    }

    //generate token for the user
  } catch (error) {
    return res.status(500).json({message: error.details[0].message});
  }
};

module.exports = logginUser;

"none se mwana simbonye byari bikunze ra, yego birakunze tuh gus tugiye gushyiraho status codes kgr ngo ige igaragara nka error "