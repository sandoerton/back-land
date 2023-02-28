import { Router } from "express";
import { create, find, list } from "../controllers/cadastroCont";

const cadastroRouter = Router();

cadastroRouter.get('/', list);
cadastroRouter.get('/:id', find);
cadastroRouter.post('/', create);

export default cadastroRouter;