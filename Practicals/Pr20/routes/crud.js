const express = require('express');
const router = express.Router();
const { Item } = require('./models'); // Import your Mongoose model


// Create a new item
router.post('/items', async (req, res) => {
    try {
        const { name, description } = req.body;
        const newItem = new Item({ name, description });
        await newItem.save();
        res.status(201).json(newItem);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
    
    
    // Read all items
    router.get('/items', async (req, res) => {
      try {
        const items = await Item.find();
        res.status(200).json(items);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
    
    
    // Update an item
    router.put('/items/:id', async (req, res) => {
      try {
        const { name, description } = req.body;
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, { name, description }, { new: true });
        res.status(200).json(updatedItem);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
    
    
    // Delete an item
    router.delete('/items/:id', async (req, res) => {
      try {
        await Item.findByIdAndRemove(req.params.id);
        res.status(204).send();
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
    
    
    module.exports = router;
    