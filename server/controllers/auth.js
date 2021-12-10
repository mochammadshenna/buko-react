const { User } = require('../models');
const { compare } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');

class AuthController {
  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body;
      
      const role = 'admin';
      const result = await User.create({ username, email, password, phoneNumber, address, role });

      res.status(201).json({
        message: 'Register successful',
        email: result.email,
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ 
        where: { email },
      });

      if (user && password && compare(password, user.password)) {
        const access_token = generateToken({ 
          id: user.id, 
          username: user.username,
          email: user.email,
          role: user.role,
        });

        res.status(200).json({
          message: 'Login successful',
          access_token,
        });
      } else throw { name: 'Invalid' };
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;
