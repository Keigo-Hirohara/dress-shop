import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import {
  authRoutes,
  bannerRoutes,
  cartRoutes,
  categoryRoutes,
  checkoutRoutes,
  dashboardRoutes,
  orderRoutes,
  productRoutes,
  userRoutes,
  wishlistRoutes,
} from './routes';

const app = express();

const start = () => {
  // routing
  app.use('/api/auth', authRoutes);
  app.use('/api/banners', bannerRoutes);
  app.use('/api/categories', categoryRoutes);
  app.use('/api/wishlist', wishlistRoutes);
  app.use('/api/cart', cartRoutes);
  app.use('/api/checkout', checkoutRoutes);
  app.use('/api/orders', orderRoutes);
  app.use('/api/products', productRoutes);
  app.use('/api/users', userRoutes);
  app.use('/api/dashboard', dashboardRoutes);

  app.listen(5000, () => {
    console.log(`Server is running on port: 5000`);
  });
};

start();
