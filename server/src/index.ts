import express from 'express';
import dotenv from 'dotenv';
import bodyparser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
/** Route imports */
import dashboardRoutes from './routes/dashboardRoutes';
import productRoutes from './routes/productRoutes';


/** Configurations */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

/** Routes */
app.use('/dashboard', dashboardRoutes); // http://localhost:8000/dashboard
app.use('/products', productRoutes); // http://localhost:8000/products


/** Server */
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
