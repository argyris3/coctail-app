import cocktailModel from '../models/cocktailModel.js';
import fs from 'fs';

//add cocktail item
const addCocktail = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const cocktail = new cocktailModel({
    name: req.body.name,
    recipe: req.body.recipe,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
    method:req.body.method,
    servedAt: req.body.servedAt,

  });
  try {
    await cocktail.save();
    res.json({ success: true, message: 'Cocktail Added' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error' });
  }
};

//all cocktail list
const listCocktail = async (req, res) => {
  try {
    const cocktails = await cocktailModel.find({});
    res.json({ success: true, data: cocktails });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'error' });
  }
};

//remove food item
const removeCocktail = async (req, res) => {
  try {
    const cocktail = await cocktailModel.findById(req.body.id);
    fs.unlink(`uploads/${cocktail.image}`, () => {});
    await cocktailModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: 'Cocktail removed' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'error' });
  }
};

export { addCocktail, listCocktail, removeCocktail };
