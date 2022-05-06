import { Router } from 'express';

const router = Router();

router.route('/');

router.route('/:id');

export { router as productRoutes };
