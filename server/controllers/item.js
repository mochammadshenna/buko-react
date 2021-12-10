const { sequelize, Item, Category, User, Ingredient } = require('../models');

class ItemController {
  static async getItems(req, res, next) {
    try {
      const response = await Item.findAll({
        attributes: {
          exclude: ['authorId', 'createdAt', 'updatedAt']
        },
        include: [
          {
            model: Category,
            required: false,
            attributes: ['name'],
          },
          {
            model: User,
            required: false,
            attributes: ['username', 'email'],
          }
        ]
      })
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  static async getItem(req, res, next) {
    try {
      const { id } = req.params;
      const response = await Item.findOne({
        where: { id },
        attributes: {
          exclude: ['authorId', 'createdAt', 'updatedAt']
        },
        include: [
          {
            model: Category,
            required: false,
            attributes: ['name'],
          },
          {
            model: Ingredient,
            required: false,
            attributes: ['name'],
          }
        ]
      })
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  static async createItem(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { name, description, price, imgUrl, categoryId, ingredients } = req.body;
      const authorId = req.user.id;
      const response = await Item.create({
        name,
        description,
        price: +price,
        imgUrl,
        categoryId: +categoryId,
        authorId: +authorId,
      }, { transaction: t })
      const newIngredients = ingredients.map(ingredient => {
        return {
          ...ingredient,
          itemId: response.id,
        };
      });
      await Ingredient.bulkCreate(newIngredients, { transaction: t })
      await t.commit();
      if (response) {
        const returnWithAssoc = await Item.findOne({
          where: { id: response.id },
          attributes: {
            exclude: ['authorId', 'createdAt', 'updatedAt']
          },
          include: [
            {
              model: Category,
              required: false,
              attributes: ['name'],
            },
            {
              model: User,
              required: false,
              attributes: ['username', 'email'],
            },
            {
              model: Ingredient,
              required: false,
              attributes: ['name'],
            },
          ]
        })
        res.status(201).json(returnWithAssoc);
      }
    } catch (error) {
      await t.rollback();
      next(error)
    }
  }

  static async updateItem(req, res, next) {
    try {
      const { id } = req.params;
      const { name, description, price, imgUrl, categoryId } = req.body;

      const response = await Item.findByPk(id, {
        attributes: {
          exclude: ['authorId', 'createdAt', 'updatedAt']
        },
        include: [
          {
            model: Category,
            required: false,
            attributes: ['name'],
          },
          {
            model: User,
            required: false,
            attributes: ['username', 'email'],
          }
        ]
      });
      response.update({
        name,
        description,
        price,
        imgUrl,
        categoryId,
      });
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  static async deleteItem(req, res, next) {
    try {
      const { id } = req.params;
      const response = await Item.destroy({
        where: { id },
      })
      if(response) {
        res.status(200).json({
          message: `Item with id ${id} has been deleted`,
        })
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ItemController;