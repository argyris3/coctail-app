import mongoose from 'mongoose';

const cocktailSchema = new mongoose.Schema({
  name: { type: String, required: true },
  recipe: [{ type: String }],
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  method: { type: String, required: true },
  servedAt: { type: String, required: true },
});

const cocktailModel = mongoose.models.cocktail || mongoose.model('coctail', cocktailSchema);

export default cocktailModel;
