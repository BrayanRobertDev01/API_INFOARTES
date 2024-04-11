import { Request, Response } from "express";
import { ManageTipoProdutoService } from "../../services/ManageTipoProdutoService";

export class GetAllTipoProdutoController {
  async handle(req: Request, res: Response) {
    const response = await new ManageTipoProdutoService().getAll();

    if (response instanceof Error) {
      return res.status(400).send({ error: response.message });
    }

    return res.status(200).send(response);
  }
}