const { Category } = require('../models');

class CategoryController {
  static async getCategories(req, res, next) {
    try {
      const response = await Category.findAll()
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  static async createCategory(req, res, next) {
    try {
      const { name } = req.body;
      const response = await Category.create({
        name
      });
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }

  static async deleteCategory(req, res, next) {
    try {
      const { id } = req.params;
      const response = await Category.destroy({
        where: { id },
      });
      if(response) {
        res.status(200).json({
          message: `Category with id ${id} has been deleted`,
        })
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CategoryController;