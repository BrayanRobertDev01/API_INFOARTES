import { Router } from "express";
import { CreateProdutoController } from "../../controllers/produto/CreateProdutoController";
import { GetAllProdutoController } from "../../controllers/produto/GetAllProdutoController";
import { GetProdutoController } from "../../controllers/produto/GetProdutoController";
import { DeleteProdutoController } from "../../controllers/produto/DeleteProdutoController";
import { UpdateProdutoController } from "../../controllers/produto/UpdateProdutoController";

export const ProdutoRouter = Router();

ProdutoRouter.get("/", new GetAllProdutoController().handle);
ProdutoRouter.post("/", new CreateProdutoController().handle);
ProdutoRouter.get("/:id", new GetProdutoController().handle);
ProdutoRouter.delete("/:id", new DeleteProdutoController().handle);
ProdutoRouter.put("/:id", new UpdateProdutoController().handle);
