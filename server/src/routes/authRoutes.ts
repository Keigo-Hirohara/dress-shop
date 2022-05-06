import { Router } from 'express';

const router = Router();

router.route('/signup');
router.route('/login');
router.route('/google');

router.route('/me');

router.route('/change-password');

export { router as authRoutes };
