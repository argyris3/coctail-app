import express from 'express';
import { addCocktail, listCocktail, removeCocktail } from '../controllers/cocktailController.js';
import multer from 'multer';

const cocktailRouter = express.Router();

//image storage engine

const storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

cocktailRouter.post('/add', upload.single('image'), addCocktail);
cocktailRouter.get('/list', listCocktail);
cocktailRouter.post('/delete', removeCocktail);

export default cocktailRouter;
