const User = require("../../models/user");
const { ApolloError } = require("apollo-server-errors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  Mutation: {
    async registerUser(_, { registerInput: { username, email, password } }) {
      //see if user exist with email attempting to register
      const oldUser = await User.findOne({ email });

      if (oldUser) {
        throw new ApolloError(
          "Email has already been registered",
          "USER_ALREADY_EXIST"
        );
      }
      //encrypt password
      var encryptedPassword = await bcrypt.hash(password, 10);

      //mongoose model for user
      const newUser = new User({
        username: username,
        email: email.toLowerCase(),
        password: encryptedPassword,
      });
      //JWT to attach to user model
      const token = jwt.sign({ user_id: newUser._id, email }, "UNSAFE_STRING", {
        expiresIn: "2h",
      });

      newUser.token = token;

      //save user in MONGODB
      const res = await newUser.save();

      return {
        id: res.id,
        ...res._doc,
      };
    },
    async loginUser(_, { loginInput: { email, password } }) {
      //see if user exist with email
      const user = await User.findOne({ email });
      //check password
      if (user && (await bcrypt.compare(password, user.password))) {
        //create new token
        const token = jwt.sign(
          { user_id: newUser._id, email },
          "UNSAFE_STRING",
          {
            expiresIn: "2h",
          }
        );
        //attach token to user model
        user.token = token;

        return {
          id: user.id,
          ...user._doc,
        };
        //return error if user doesnt exist
      } else {
        throw new ApolloError("Incorrect password", "INCORRECT_PASSWORD");
      }
    },
  },
  Query: {
    user: (_, { ID }) => User.findById(ID),
  },
};
