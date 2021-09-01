const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try{
    // find all categories
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    });
    res.json(categoryData);
  }catch(err){
    res.json(err);
  }
});

router.get('/:id', async (req, res) => {
  try{
    // find one category by its `id` value
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    res.json(categoryData);
  }catch(err){
    res.json(err);
  }
});

router.post('/', async (req, res) => {
  try{
    // create a new category
    const newCategory = req.body;
    const categoryData = await Category.create(newCategory);
    res.json(categoryData);
  }catch(err){
    res.json(err, 'Some things to try: make sure you have use the correct column name ("category_name") \nOnly create one new category at a time');
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
