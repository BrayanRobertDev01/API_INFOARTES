import { Produto, TipoProduto } from "@prisma/client";
import { prisma } from "../configs/database";

export class ManageTipoProdutoService {
  create(tipoProduto: TipoProduto) {
    try {
      return prisma.tipoProduto.create({
        data: {
          caracteristicas: tipoProduto.caracteristicas,
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }

  getAll() {
    try {
      return prisma.tipoProduto.findMany({
        select: {
          id: true,
          caracteristicas: true,
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }

  get(id: number) {
    try {
      return prisma.tipoProduto.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          caracteristicas: true,
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }

  update(id: number, tipoProduto: TipoProduto) {
    try {
      return prisma.tipoProduto.update({
        where: {
          id,
        },
        data: {
          caracteristicas: tipoProduto.caracteristicas,
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }

  delete(id: number) {
    try {
      return prisma.tipoProduto.delete({
        where: {
          id,
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }
}
