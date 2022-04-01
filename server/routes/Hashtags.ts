import express from 'express';
import controller from '../controllers/hashtags';

const router = express.Router();

router.get('/hashtags', controller.getAllTags);

export = router;
