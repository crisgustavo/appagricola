
import api from "../services/api";

async function GetSaidasUsuario(idclifor, idempresa) {
    try {
        const response = await Promise.all([
            api.get(`/saidas?idclifor=${idclifor}&idempresa=${idempresa}`),
            api.get('/produtos')
        ]);

        const [todasSaidasList, produtosList] = response;

        const todasSaidas = todasSaidasList.data;
        const todosProdutos = produtosList.data;

        const saidasCliente = todasSaidas.map(saida => {
            const produto = todosProdutos.find(prod => prod.idproduto === saida.idproduto);
            return {
                ...saida,
                produto: produto ? produto.nome : "Produto não encontrado",
                peso_liquido: saida.peso_liquido.toFixed(2),
                peso_liquido_sc: (saida.peso_liquido / 60).toFixed(2),
                desconto_total: saida.desconto_total.toFixed(2),
                desconto_total_sc: (saida.desconto_total / 60).toFixed(2)
            };
        });


        localStorage.setItem('saidasCliente', JSON.stringify(saidasCliente));

        const produtosSaida = [...new Set(saidasCliente.map(saida => saida.idproduto))];
        const prodSaidaNew = produtosSaida.map(idproduto => {
            const produto = todosProdutos.find(prod => prod.idproduto === idproduto);
            return produto ? { idproduto, nome: produto.nome } : null;
        }).filter(item => item !== null);

        localStorage.setItem('selectProdutosSaida', JSON.stringify(prodSaidaNew));



        const anosSafra = [...new Set(saidasCliente.map(saida => saida.ano_safra))].sort();
        const selectSafraSaida = anosSafra.map(ano_safra => ({ ano_safra }));

        localStorage.setItem('selectSafraSaida', JSON.stringify(selectSafraSaida));


    } catch (error) {
        console.error("Erro ao buscar saidas e produtos:", error);
    }

}

export default GetSaidasUsuario;