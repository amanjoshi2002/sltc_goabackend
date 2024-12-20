const express = require('express');
const router = express.Router();
const aboutUsController = require('../controllers/aboutUsController');
const { authenticate, adminAuth } = require('../middleware/authMiddleware');

router.get('/:lang?', aboutUsController.getAboutUs);
router.post('/', adminAuth, aboutUsController.updateAboutUs);
router.delete('/', adminAuth, aboutUsController.deleteAboutUs);

module.exports = router;