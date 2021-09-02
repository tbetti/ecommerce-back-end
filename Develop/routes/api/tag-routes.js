const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Get all tags
router.get('/', async (req, res) => {
  try{
    // find all tags
    const tagData = await Tag.findAll({
      // Can't include ProductTag otherwise I get SequelizeEagerLoadingError
      include: [{model: Product}], 
    })
    res.status(200).json(tagData);
  }catch(err){
    res.status(500).json(err);
  }
});

// Get single tag based on id
router.get('/:id', async (req, res) => {
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
    res.status(200).json(tagData);
  }catch(err){
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try{
    // create a new tag
    const tagData = await Tag.create(req.body);
    res.status(200).json('Successfully created new tag!');
  }catch(err){
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try{
    // Ensure id exists
    const exists = await Tag.findByPk(req.params.id);
    if(!exists){
      res.status(400).json(`ID:${req.params.id} does not exist`);
    }
    
    // update a tag's name by its `id` value
    await Tag.update({'tag_name': req.body.tag_name},
    {
      where: {id: req.params.id},
    })
    res.status(200).json(`Successfully updated tag at ID:${req.params.id}`);
  }catch(err){
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try{
    // Ensure id exists
    const exists = await Tag.findByPk(req.params.id);
    if(!exists){
      res.status(400).json(`ID:${req.params.id} does not exist`);
    }
    
    // delete on tag by its `id` value
    await Tag.destroy({
      where: {id: req.params.id},
    })
    res.status(200).json(`Successfully deleted tag at ID:${req.params.id}`);
  }catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;
