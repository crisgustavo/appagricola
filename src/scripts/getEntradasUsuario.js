
import api from "../services/api";

async function GetEntradasUsuario(idclifor, idempresa) {
    try {
        const response = await Promise.all([
            api.get(`/entradas?idclifor=${idclifor}&idempresa=${idempresa}`),
            api.get('/produtos')
        ]);

        const [todasEntradasList, produtosList] = response;

        const todasEntradas = todasEntradasList.data;
        const todosProdutos = produtosList.data;

        const entradasCliente = todasEntradas.map(entrada => {
            const produto = todosProdutos.find(prod => prod.idproduto === entrada.idproduto);
            return {
                ...entrada,
                produto: produto ? produto.nome : "Produto não encontrado",
                peso_liquido_entrada: entrada.peso_liquido_entrada.toFixed(2),
                peso_liquido_entrada_sc: (entrada.peso_liquido_entrada / 60).toFixed(2),
                peso_liquido: entrada.peso_liquido.toFixed(2),
                peso_liquido_sc: (entrada.peso_liquido / 60).toFixed(2),
                desconto_total: entrada.desconto_total.toFixed(2),
                desconto_total_sc: ((entrada.peso_liquido_entrada - entrada.peso_liquido) / 60).toFixed(2)
            };
        });


        localStorage.setItem('entradasCliente', JSON.stringify(entradasCliente));

        const produtosEntrada = [...new Set(entradasCliente.map(entrada => entrada.idproduto))];
        const prodEntradaNew = produtosEntrada.map(idproduto => {
            const produto = todosProdutos.find(prod => prod.idproduto === idproduto);
            return produto ? { idproduto, nome: produto.nome } : null;
        }).filter(item => item !== null);

        localStorage.setItem('selectProdutosEntrada', JSON.stringify(prodEntradaNew));

        const anosSafra = [...new Set(entradasCliente.map(entrada => entrada.ano_safra))].sort();
        const selectSafra = anosSafra.map(ano_safra => ({ ano_safra }));

        localStorage.setItem('selectSafraEntrada', JSON.stringify(selectSafra));


    } catch (error) {
        console.error("Erro ao buscar entradas e produtos:", error);
    }

}

export default GetEntradasUsuario;