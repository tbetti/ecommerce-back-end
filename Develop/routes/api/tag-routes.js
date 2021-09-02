const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Get all tags
router.get('/', async (req, res) => {
  // be sure to include its associated Product data
  try{
    // find all tags
    const tagData = await Tag.findAll({
      // Can't include ProductTag otherwise I get SequelizeEagerLoadingError
      include: [{model: Product}], 
    })
    res.json(tagData);
  }catch(err){
    res.status(500).json(err);
  }
});

// Get single tag based on id
router.get('/:id', async (req, res) => {
  // be sure to include its associated Product data
  try{
    // Ensure id exists
    const exists = await Tag.findByPk(req.params.id);
    if(!exists){
      res.status(400).json({msg:`ID:${req.params.id} does not exist`});
    }
    
    // find a single tag by its `id`
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{model: Product}],
    })
    res.json(tagData);
  }catch(err){
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
