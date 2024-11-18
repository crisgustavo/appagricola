function GetEntradasProdutoSafra(entradascliente,selOptProduto,selOptSafra) {

    let entradasclientenew = entradascliente
        if (selOptProduto != 0 && selOptSafra == 0) {
            entradasclientenew = entradascliente.filter(entrada => entrada.idproduto == selOptProduto)
        }
        if (selOptSafra != 0 && selOptProduto == 0) {
            entradasclientenew = entradascliente.filter(entrada => entrada.ano_safra == `${selOptSafra}`)
        }
        if (selOptProduto!= 0 && selOptSafra != 0) {
            entradasclientenew = entradascliente.filter(entrada => entrada.idproduto == selOptProduto && entrada.ano_safra == `${selOptSafra}`) 
        }
    return entradasclientenew;
}

export default GetEntradasProdutoSafra;