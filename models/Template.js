import mongoose from 'mongoose';

const TemplateSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User ', required: true },
  name: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
});

export default mongoose.model('Template', TemplateSchema);