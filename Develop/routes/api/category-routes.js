const router = require('express').Router();
const { Category, Product } = require('../../models');

function errorHandler(err){
  res.json(err);
}

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try{
    // find all categories
    const categoryData = await Category.findAll({include: [{model: Product}]})
    res.json(categoryData);
  }catch(err){
    errorHandler(err)
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
