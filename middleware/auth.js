const jwt = require("jsonwebtoken");
const { User } = require("../db");

const authUser = async (req, res, next) => {
  const bearerToken = req.headers.authorization;

  if (!bearerToken) {
    return res.status(403).json({ message: "Not authorized" });
  }

  const token = bearerToken.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, process.env.SERVER_SECRET_KEY);

    const user = await User.findOne({ _id: decoded._id }, "-password -__v", {
      lean: true,
    });

    if (!user) {
      return res.status(403).json({ message: "Not authorized" });
    }

    req.user = user;

    return next();
  } catch (error) {
    console.log(error);
    return res.status(403).json({ message: "Not authorized" });
  }
};

module.exports = { authUser };
