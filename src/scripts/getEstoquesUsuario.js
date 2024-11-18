
import api from "../services/api";

async function GetEstoquesUsuario(idclifor, idempresa) {
    try {
        const response = await Promise.all([
            api.get(`/estoques?idclifor=${idclifor}&idempresa=${idempresa}`),
            api.get('/produtos')
        ]);

        const [todosEstoquesList, produtosList] = response;

        const todosEstoques = todosEstoquesList.data;
        const todosProdutos = produtosList.data;

        const estoquesCliente = todosEstoques.map(estoque => {
            const produto = todosProdutos.find(prod => prod.idproduto === estoque.idproduto);
            return {
                ...estoque,
                produto: produto ? produto.nome : "Produto não encontrado",
                qtd: estoque.qtd.toFixed(2),
                qtd_sc: (estoque.qtd / 60).toFixed(2),
                baixado: estoque.baixado.toFixed(2),
                baixado_sc: (estoque.baixado / 60).toFixed(2),
                transfe: estoque.transfe.toFixed(2),
                transfe_sc: (estoque.transfe / 60).toFixed(2),
                transfs: estoque.transfs.toFixed(2),
                transfs_sc: (estoque.transfs / 60).toFixed(2),
                saldo: estoque.saldo.toFixed(2),
                saldo_sc: (estoque.saldo / 60).toFixed(2),
            };
        });

        localStorage.setItem('estoquesCliente', JSON.stringify(estoquesCliente));

        const produtosEstoque = [...new Set(estoquesCliente.map(estoque => estoque.idproduto))];
        const prodEstoqueNew = produtosEstoque.map(idproduto => {
            const produto = todosProdutos.find(prod => prod.idproduto === idproduto);
            return produto ? { idproduto, nome: produto.nome } : null;
        }).filter(item => item !== null);

        localStorage.setItem('selectProdutosEstoque', JSON.stringify(prodEstoqueNew));

        const anosSafra = [...new Set(estoquesCliente.map(estoque => estoque.ano_safra))].sort();
        const selectSafraEstoque = anosSafra.map(ano_safra => ({ ano_safra }));

        localStorage.setItem('selectSafraEstoque', JSON.stringify(selectSafraEstoque));

    } catch (error) {
        console.error("Erro ao buscar saidas e produtos:", error);
    }

}

export default GetEstoquesUsuario