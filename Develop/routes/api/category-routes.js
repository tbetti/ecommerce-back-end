const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Get all categories
router.get('/', async (req, res) => {
  try{
    // find all categories
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData);
  }catch(err){
    res.status(500).json(err);
  }
});

// Get one category
router.get('/:id', async (req, res) => {
  try{
    // Ensure id exists
    const exists = await Category.findByPk(req.params.id);
    if(!exists){
      res.status(400).json({msg: `ID:${req.params.id} does not exist`})
    }
    // find one category by its `id` value
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData);
  }catch(err){
    res.status(500).json(err);
  }
});

// Create a category
router.post('/', async (req, res) => {
  try{
    // create a new category
    const newCategory = req.body;
    const categoryData = await Category.create(newCategory);
    res.status(200).json(categoryData);
  }catch(err){
    res.status(500).json(err, 'Some things to try: make sure you have use the correct column name ("category_name") \nOnly create one new category at a time');
  }
});

// Update a category
router.put('/:id', async (req, res) => {
  try{
    // Ensure id exists
    const exists = await Category.findByPk(req.params.id);
    if(!exists){
      res.status(400).json({msg: `ID:${req.params.id} does not exist`})
    }

    // update a category by its `id` value
    await Category.update(
      { "category_name": req.body.category_name },
      {
        where: { id: req.params.id }
      }
    );
    res.status(200).json(`Category name at id ${req.params.id} successfully updated`)
  }catch(err){
    res.status(500).json(err);
  }
});

// Delete a category
router.delete('/:id', async (req, res) => {
  try{
    const exists = await Category.findByPk(req.params.id);
    if(!exists){
      res.status(400).json({msg: `ID:${req.params.id} does not exist`})
    }
    // delete a category by its `id` value
    await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({ message: `Category at ${req.params.id} successfully deleted` });
  }catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;
