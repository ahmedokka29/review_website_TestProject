import { user } from '../models/user.js';
export const getUsers = async (req, res) => {
  try {
    const foundUsers = await user.find({});
    if (foundUsers.length <= 0) {
      res.send("There's no users");
    } else {
      res.send(foundUsers);
    }
  } catch (error) {
    console.log(error);
  }
};
export const signup = async (req, res) => {
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    await user.create({
      name: req.body.name,
      email: req.body.email,
      password: newPassword,
    });
    res.status(200).send('User is created');
  } catch (error) {
    res.send({ message: error.message });
  }
};


export const getUser = async (req, res) => {
  const token = req.headers['token'];
  try {
    const decoded = jwt.verify(token, '123456');
    const email = decoded.email;
    const foundUser = await user.findOne({ email: email });
    if (!foundUser) {
      return res.send('User not found');
    } else {
      return res.send(foundUser);
    }
  } catch (error) {
    res.send({ message: error.message });
  }
};


