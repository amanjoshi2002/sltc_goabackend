const express = require('express');
const router = express.Router();
const multer = require('multer');
const tenderController = require('../controllers/tenderController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.get('/', tenderController.getTenders);
router.get('/:id', tenderController.getTenderById);
router.post('/', upload.single('pdf'), tenderController.createTender);
router.put('/:id', upload.single('pdf'), tenderController.updateTender);
router.delete('/:id', tenderController.deleteTender);

module.exports = router;