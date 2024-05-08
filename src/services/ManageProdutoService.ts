import { Produto } from "@prisma/client";
import { prisma } from "../configs/database";

export class ManageProdutoService {
  create(produto: Produto) {
    try {
      return prisma.produto.create({
        data: {
          id_tipo_produto: produto.id_tipo_produto,
          nome: produto.nome,
          informacoes: produto.informacoes
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }

  getAll() {
    try {
      return prisma.produto.findMany({
        select: {
          id: true,
          tipo_produto: {
            select: {
              caracteristicas: true,
            },
          },
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }

  get(id: number) {
    try {
      return prisma.produto.findFirst({
        where: {
          id,
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }

  update(id: number, produto: Produto) {
    try {
      return prisma.produto.update({
        where: {
          id,
        },
        data: {
          id_tipo_produto: produto.id_tipo_produto,
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }

  delete(id: number) {
    try {
      return prisma.produto.delete({
        where: {
          id,
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }
}
