import express from 'express';
import {sendMessage} from '../controller/messageController.js'

// Here we imported express and send messages from controller - message controller
const router = express.Router();

router.post('/send', sendMessage);

export default router;