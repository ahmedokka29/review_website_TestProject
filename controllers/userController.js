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