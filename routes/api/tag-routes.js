const router = require('express').Router();
const { Tag, Item, ItemTag } = require('../../models');

// get one tag by its `id` with associated Item data
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Item}],
    });
    if (!tagData) {
      res.status(404).json({ message: "No tag found with this id!" });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json({ message: "Tag not found!" });
  }
});

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Item}],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json({message: "Tag not found"});
  }
});


// create new tag with associated Itemdata
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json({ message: "Tag fail to create" });
  }
});

// update a tag's name by its `id` value with associated Itemdata
router.put('/:id', async (req, res) => {
  try {
    const updated = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    !updated[0]
      ? res.status(404).json({ message: "No tag is found with id!" })
      : res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Tag update failed" });
  }
});

// delete on tag by its `id` value with associated Itemdata.
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Tag.destroy({ where: { id: req.params.id } });
    !deleted
      ? res.status(404).json({ message: "No tag found with this id!" })
      : res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json({ message: "Tag deletion failed" });
  }
});

module.exports = router;
