import express from 'express';
import cors from 'cors';
import routes from './routes';
import {errors} from 'celebrate';
import mongoose from 'mongoose';

const app = express();

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/forms', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(process.env.APP_URL || 3333, () => {
    console.log('🚀 Server started on port 3333!');
});
  