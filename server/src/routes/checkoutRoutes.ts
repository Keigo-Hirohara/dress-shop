import { Router } from 'express';

const router = Router();

router.route('/create-stripe-charge');

router.route('/create-paypal-transaction');

router.route('/capture-paypal-transaction');

export { router as checkoutRoutes };
