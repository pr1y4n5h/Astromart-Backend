const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Name can't be void",
    },

    username: {
      type: String,
      required: "Username can't be void",
      unique: "Username already exists!",
      trim: true
    },

    email: {
      type: String,
      required: "Email can't be void!",
      unique: "Email ID already exists!",
      trim: true
    },

    password: {
      type: String,
      required: "Password can't be void",
      //  validate: {
      //      validator: function(text) {
      //        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g.test(text);
      //      },
      //      message: props => `Password should contain 8 letters and should be alphanumeric (atleast one number, one smallcase and uppercase alphabets)`
      //    }
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      const hash = await bcrypt.hash(this.password, 12);
      this.password = hash;
    }
    next();
  } catch (error) {
    console.log(error);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
