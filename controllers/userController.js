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