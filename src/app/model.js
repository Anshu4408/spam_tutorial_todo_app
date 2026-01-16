import mongoose from 'mongoose';
const { Schema } = mongoose;

const TodoSchema = new Schema({
  title: String, 
 
  }
);
const Todo= mongoose.models.Todo || mongoose.model('Todo', TodoSchema);
export default Todo;