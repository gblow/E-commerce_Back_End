const router = require('express').Router();
const { List, Item} = require('../../models');

// The `/api/categories` endpoint

// get all categories with their associated products
router.get('/', async (req, res) => {
  try {
    const categories = await List.findAll({ include: [{ model: Item}] });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: 'not found!' });
  }
});

// get one List by its `id` value with its associated products.
router.get('/:id', async (req, res) => {
  try {
    const List = await List.findByPk(req.params.id, { include: [{ model: Item}] });
    if (!List) {
      res.status(404).json({ message: 'id not found' });
      return;
    }
    res.status(200).json(List);
  } catch (err) {
    res.status(500).json({ message: 'id not found!' });
  }
});

// create a new List.
router.post('/', async (req, res) => {
  try {
    const newList = await List.create(req.body);
    res.status(200).json(newList);
  } catch (err) {
    res.status(400).json({ message: 'creation has failed' });
  }
});

// update a List by its `id` value.
router.put('/:id', async (req, res) => {
  try {
    const updated = await List.update(req.body, { where: { id: req.params.id } });
    !updated[0] ? res.status(404).json({ message: 'id not found' }) : res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: 'update failed' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await List.destroy({ where: { id: req.params.id } });
    !deleted ? res.status(404).json({ message: 'id not found' }) : res.status(200).json(deleted);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
