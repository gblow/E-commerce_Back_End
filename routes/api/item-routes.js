const router = require("express").Router();
const { Items, List, Tag, ItemTag } = require("../../models");

// Get all Items, including associated List and Tag data
router.get("/", async (req, res) => {
  try {
    const items = await Item.findAll({
      include: [{ model: List }, { model: Tag }],
    });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: "Item not found!" });
  }
});

// Get a single item, including associated List and Tag data
router.get("/:id", async (req, res) => {
  try {
    const Items= await Items.findByPk(req.params.id, {
      include: [{ model: List }, { model: Tag }],
    });
    !item
      ? res.status(404).json({ message: "Item not found!" })
      : res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: "Item not found!" });
  }
});

// Create a new item
router.post("/", (req, res) => {
  item.create(req.body)
    .then((item) => {
      if (req.body.tagIds.length) {
        const ItemTagIds = req.body.tagIds.map((tag_id) => {
          return {
            item_id: item.id,
            tag_id,
          };
        });
        return ItemTag.bulkCreate(ItemTagIds);
      }
      res.status(200).json(item);
    })
    .then((ItemTagIds) => res.status(200).json(ItemTagIds))
    .catch((err) => {
      res.status(400).json({ message: "Creation failed", error: err });
    });
});

router.put("/:id", async (req, res) => {
  try {
    await item.update(req.body, { where: { id: req.params.id } });
    if (req.body.tags && req.body.tags.length > 0) {

      const ItemTags = await ItemTag.findAll({ where: { item_id: req.params.id } });
      const ItemTagIds = ItemTags.map(({ tag_id }) => tag_id);

      const newItemTags = req.body.tags
        .filter((tag_id) => !ItemTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            item_id: req.params.id,
            tag_id,
          };
        });

      const ItemTagsToRemove = ItemTags
        .filter(({ tag_id }) => !req.body.tags.includes(tag_id))
        .map(({ id }) => id);

      await Promise.all([
        ItemTag.destroy({ where: { id: ItemTagsToRemove } }),
        ItemTag.bulkCreate(newItemTags),
      ]);
    }

    // Respond with updated item
    const Item= await Items.findByPk(req.params.id, { include: [{ model: Tag }] });
    return res.json(item);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});


// Delete a Itemby ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Items.destroy({ where: { id: req.params.id } });
    !deleted
      ? res.status(404).json({ message: "id not found" })
      : res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json({ message: "Item not deleted!", error: err });
  }
});

module.exports = router;