import express from 'express'
import { test } from '../controllers/user.controller.js';

const router = express.Router();

// router.get('/test',(req ,res)=>{
//     res.json({message:'Api is Working !'})    //with function ka sath h without controller
// })

router.get('/test',test)

export default router;