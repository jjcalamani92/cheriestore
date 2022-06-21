import mongoose, { Schema, model, Model } from 'mongoose';
import { IMakeup } from '../interfaces';

const makeupSchema = new Schema({
  name: { type: String, default: ''},
  brand: { type: String, default: ''},
  image: [{ type: String}],
  description: { type: String, default: ''},
  category: { type: String, default: ''},
  section: { type: String, default: ''},
  item: { type: String, default: ''},
  inStock: { type: Number, default: 0},
  price: { type: Number, default: 0},
  oldPrice: { type: Number, default: 0},
  tags: [{ type: String}],
  site: { type: String, default: 0},
  slug: { type: String},
  status: { type: Boolean},
  
  tone: { type: String, default: 'tono'},
  color: [{ type: String}],
})

const Makeup:Model<IMakeup> = mongoose.models.Makeup || model('Makeup',makeupSchema);

export default Makeup;

