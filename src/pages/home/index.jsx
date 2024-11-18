//importação de bibliotecas
import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../scripts/authContext';
import { useNavigate } from 'react-router-dom';

//importação de componentes
import {
    Background, Header, Table,
    UserSettings, UserLogo, UserName,
    CompanyLogo, CompanyName, Exit,
    Body, Panel, Incoming, Output,
    Stock, Print, IncomingPanel,
    IncomingTable, OutputPanel,
    StockPanel, HeaderIncoming, PageH1,
    IncomingFilter, FilterH1,
    ProductSelect, YearSelect,
    MeasureSelect, Period, PeriodPanel,
    StartPeriod, FinalPeriod, Clear,
    Search, Page, HeaderOutput,
    OutputFilter, OutputTable, HeaderStock,
    StockFilter, StockTable
} from './styles'


//importação de imagens
import user from '../../assets/icons/user1.png'
import company from '../../assets/icons/company1.png'
import printer from '../../assets/icons/printer.png'


//importação de scripts
import GetEntradasUsuario from '../../scripts/getEntradasUsuario';
import GetEntradasProdutoSafra from '../../scripts/getEntradasProdutoSafra';
import GetFilterData from '../../scripts/getFilterData';
import GetSaidasUsuario from '../../scripts/getSaidasUsuario';
import GetEstoquesUsuario from '../../scripts/getEstoquesUsuario';


//código da página
function AgricolaLanding() {

    const navigate = useNavigate();

    const [empresa, setEmpresa] = useState('');
    const [nome, setNome] = useState('');
    const [idclifor, setIdclifor] = useState('');
    const [idempresa, setIdempresa] = useState('');

    useEffect(() => {
        //importando do login campos para identificação do usuário
        const empresaData = localStorage.getItem('empresa');
        const nomeData = localStorage.getItem('nome');
        const idcliforData = localStorage.getItem('idclifor');
        const idempresaData = localStorage.getItem('idempresa')

        //importando fantasia da empresa e usuario
        if (empresaData && nomeData) {
            setEmpresa(empresaData);
            setNome(nomeData);
        }

        //importando idclifor e idempresa
        if (idcliforData && idempresaData) {
            setIdclifor(idcliforData);
            setIdempresa(idempresaData)
        }
    }, [])

    const { logout } = useAuth();
    const handleLogout = () => {
        logout(navigate);
    }


    const [entradascliente, setEntradasCliente] = useState('')
    const [saidascliente, setSaidasCliente] = useState('')
    const [estoquescliente, setEstoquesCliente] = useState('')
    const [selectprodutosentrada, setSelectprodutosEntrada] = useState('')
    const [selectprodutossaida, setSelectProdutosSaida] = useState('')
    const [selectprodutosestoques, setSelectProdutosEstoque] = useState('')
    const [selectsafraentrada, setSelectsafraEntrada] = useState('')
    const [selectsafrasaida, setSelectSafraSaida] = useState('')
    const [selectsafraestoque, setSelectSafraEstoque] = useState('')

    //importando dados entrada, saída e estoque do cliente
    useEffect(() => {

        const fetchData = async () => {
            if (idclifor && idempresa) {
                await GetEntradasUsuario(idclifor, idempresa);
                await GetSaidasUsuario(idclifor, idempresa);
                await GetEstoquesUsuario(idclifor, idempresa);
            }

            const entradasCliente = localStorage.getItem('entradasCliente')
            const saidasCliente = localStorage.getItem('saidasCliente')
            const estoquesCliente = localStorage.getItem('estoquesCliente')
            const selectProdutosEntrada = localStorage.getItem('selectProdutosEntrada')
            const selectProdutosSaida = localStorage.getItem('selectProdutosSaida')
            const selectProdutosEstoque = localStorage.getItem('selectProdutosEstoque')
            const selectSafraEntrada = localStorage.getItem('selectSafraEntrada')
            const selectSafraSaida = localStorage.getItem('selectSafraSaida')
            const selectSafraEstoque = localStorage.getItem('selectSafraEstoque')

            if (entradasCliente && selectProdutosEntrada && selectSafraEntrada) {
                setEntradasCliente(JSON.parse(entradasCliente))
                setSelectprodutosEntrada(JSON.parse(selectProdutosEntrada))
                setSelectsafraEntrada(JSON.parse(selectSafraEntrada))
            }

            if (saidasCliente && selectProdutosSaida && selectSafraSaida) {
                setSaidasCliente(JSON.parse(saidasCliente))
                setSelectProdutosSaida(JSON.parse(selectProdutosSaida))
                setSelectSafraSaida(JSON.parse(selectSafraSaida))
            }

            if (estoquesCliente && selectProdutosEstoque && selectSafraEstoque) {
                setEstoquesCliente(JSON.parse(estoquesCliente))
                setSelectProdutosEstoque(JSON.parse(selectProdutosEstoque))
                setSelectSafraEstoque(JSON.parse(selectSafraEstoque))
            }

        }
        fetchData();

    }, [idclifor, idempresa])

    //validação de visibilidade dos painéis entrada, saída e estoque
    const [isShowEntradas, setIsShowEntradas] = useState(false);
    const [isShowSaidas, setIsShowSaidas] = useState(false);
    const [isShowEstoques, setIsShowEstoques] = useState(false);
    const handleEntradas = () => {
        setIsShowEntradas(!isShowEntradas)
        setIsShowSaidas(false)
        setIsShowEstoques(false)
    }
    const handleSaidas = () => {
        setIsShowSaidas(!isShowSaidas)
        setIsShowEntradas(false)
        setIsShowEstoques(false)
    }
    const handleEstoques = () => {
        setIsShowEstoques(!isShowEstoques)
        setIsShowEntradas(false)
        setIsShowSaidas(false)
    }

    //validação de oculto e visível de elementos
    const [isShowDataIncoming, setIsShowDataIncoming] = useState(false);
    const handleDataIncoming = () => {
        setIsShowDataIncoming(!isShowDataIncoming);
        if (isShowDataIncoming && setDataFilterActive(true) ? setDataFilterActive(true) : setDataFilterActive(false));
    }

    const [dataFilterActive, setDataFilterActive] = useState(false);

    //Evento de mudança select produtos
    const [selOptProduto, setSelOptProduto] = useState('0');
    const handleProdutoChange = (event) => {
        const value = event.target.value;
        setSelOptProduto(value);
        return selOptProduto;
    }

    //evento de mudança select safra
    const [selOptSafra, setSelOptSafra] = useState('0');
    const handleSafraChange = (event) => {
        const value = event.target.value;
        setSelOptSafra(value);
        return selOptSafra;
    }

    //evento de mudança de medida de peso
    const [selOptMeasure, setSelOptMeasure] = useState('0');
    const handleMeasureChange = (event) => {
        const measure = event.target.value;
        setSelOptMeasure(measure);
    }

    let [entradasclientenew, setEntradasclientenew] = useState(entradascliente)
    let [saidasclientenew, setSaidasclientenew] = useState(saidascliente)
    let [estoquesclientenew, setEstoquesclientenew] = useState(estoquescliente)

    //atualização tabela entradas de acordo com eventos
    useEffect(() => {
        if (dataFilterActive === false) {
            entradasclientenew = GetEntradasProdutoSafra(entradascliente, selOptProduto, selOptSafra)
            setEntradasclientenew(entradasclientenew)
        } else {
            const filterData = GetFilterData(entradasclientenew, datainicial, datafinal)
            setEntradasclientenew(filterData)
        }
    }, [entradascliente, selOptProduto, selOptSafra, dataFilterActive])

    //atualização tabela saída de acordo com eventos
    useEffect(() => {
        if (dataFilterActive === false) {
            saidasclientenew = GetEntradasProdutoSafra(saidascliente, selOptProduto, selOptSafra)
            setSaidasclientenew(saidasclientenew)
        } else {
            const filterData = GetFilterData(saidasclientenew, datainicial, datafinal)
            setSaidasclientenew(filterData)
        }
    }, [saidascliente, selOptProduto, selOptSafra, dataFilterActive])

    //atualização tabela estoque de acordo com eventos
    useEffect(() => {
        if (dataFilterActive === false) {
            estoquesclientenew = GetEntradasProdutoSafra(estoquescliente, selOptProduto, selOptSafra)
            setEstoquesclientenew(estoquesclientenew)
        } else {
            const filterData = GetFilterData(estoquesclientenew, datainicial, datafinal)
            setEstoquesclientenew(filterData)
        }
    }, [estoquescliente, selOptProduto, selOptSafra, dataFilterActive, idclifor])

    //evento de captação de dados inputs de data
    const [datainicial, setDatainicial] = useState('')
    const [datafinal, setDatafinal] = useState('')
    const handleDatainicial = (event) => {
        const data = event.target.value;
        setDatainicial(data)
    }
    const handleDatafinal = (event) => {
        const data = event.target.value;
        setDatafinal(data)
    }

    //evento click botão imprimir
    const handlePrint = () => {
        window.print();
    }

    //Sicnronização Scroll Tabela
    const theadWrapperRef = useRef(null);
    const tbodyWrapperRef = useRef(null);

    const handleScroll = () => {
        if (theadWrapperRef.current && tbodyWrapperRef.current) {
            theadWrapperRef.current.scrollLeft = tbodyWrapperRef.current.scrollLeft;
        }
    }

    //renderização de visualização da página
    return (
        <>
            <Page>
                <Background />

                <Header>
                    <UserSettings>
                        <UserLogo src={user} />
                        <UserName>{nome}</UserName>
                        <CompanyLogo src={company} />
                        <CompanyName>{empresa}</CompanyName>
                    </UserSettings>

                    <Exit onClick={handleLogout}>Sair</Exit>
                </Header>

                <Body>
                    <Panel>
                        <Incoming type='button' onClick={handleEntradas}>Entradas</Incoming>
                        <Output type='button' onClick={handleSaidas}>Saídas</Output>
                        <Stock type='button' onClick={handleEstoques}>Estoque</Stock>
                        <Print type='button' onClick={handlePrint}><img src={printer} alt="" /></Print>
                    </Panel>
                    {isShowEntradas &&
                        <IncomingPanel>
                            <HeaderIncoming>
                                <PageH1>Entradas</PageH1>
                                <IncomingFilter>
                                    <FilterH1>Produtos</FilterH1>
                                    <ProductSelect value={selOptProduto} onChange={handleProdutoChange}>
                                        <option key='0' value='0' dafaultvalue={0}>TODOS</option>
                                        {
                                            selectprodutosentrada.map((item, index) =>
                                                <option key={index++} value={item.idproduto}>{item.nome}</option>
                                            )
                                        }
                                    </ProductSelect>
                                    <FilterH1>Safra</FilterH1>
                                    <YearSelect value={selOptSafra} onChange={handleSafraChange}>
                                        <option key='0' value='0' defaultValue={0}>TODOS</option>
                                        {
                                            selectsafraentrada.map((item, index) =>
                                                <option key={index++} value={item.ano_safra}>{item.ano_safra}</option>
                                            )
                                        }
                                    </YearSelect>
                                    <MeasureSelect value={selOptMeasure} onChange={handleMeasureChange}>
                                        <option key='0' value='0' dafaultvalue={0}>KG</option>
                                        <option key='1' value='1'>Sc</option>
                                    </MeasureSelect>
                                    <Period type='button' onClick={handleDataIncoming}>Datas</Period>
                                    {isShowDataIncoming && <PeriodPanel>
                                        <FilterH1>De:</FilterH1>
                                        <StartPeriod type='date' value={datainicial} onChange={handleDatainicial} />
                                        <FilterH1>Até:</FilterH1>
                                        <FinalPeriod type='date' value={datafinal} onChange={handleDatafinal} />
                                        <Search onClick={() => setDataFilterActive(true)} />
                                        <Clear onClick={() => setDataFilterActive(false)} />
                                    </PeriodPanel>}
                                </IncomingFilter>
                            </HeaderIncoming>
                            <IncomingTable>
                                <Table className='table'>
                                    <thead className='thead' ref={theadWrapperRef}>
                                        <tr className='tr title'>
                                            <th className='align-left'>Romaneio</th>
                                            <th className='align-center'>Ano Safra</th>
                                            <th className='align-center'>Produto</th>
                                            <th className='align-right'>{selOptMeasure === '0' ? 'Preso Bruto (Kg)' : 'Peso Bruto (Sc)'}</th>
                                            <th className='align-right'>{selOptMeasure === '0' ? 'Peso Líquido (Kg)' : 'Peso Líquido (Sc)'}</th>
                                            <th className='align-center'>Placa</th>
                                            <th className='align-center'>Data</th>
                                            <th className='align-right'>{selOptMeasure === '0' ? 'Desc. Total (Kg)' : 'Desc. Total (Sc)'}</th>
                                        </tr>
                                    </thead>
                                    <tbody className='body' ref={tbodyWrapperRef} onScroll={handleScroll}> 
                                        {
                                            entradasclientenew.map((item, index) =>
                                                <tr key={index} className='tr result'>
                                                    <td className='align-left'>{item.romaneio}</td>
                                                    <td className='align-center'>{item.ano_safra}</td>
                                                    <td className='align-center'>{item.produto}</td>
                                                    <td className='align-right'>{selOptMeasure === '0' ? item.peso_liquido_entrada : item.peso_liquido_entrada_sc}</td>
                                                    <td className='align-right'>{selOptMeasure === '0' ? item.peso_liquido : item.peso_liquido_sc}</td>
                                                    <td className='align-center'>{item.placa}</td>
                                                    <td className='align-center'>{item.data}</td>
                                                    <td className='align-right'>{selOptMeasure === '0' ? item.desconto_total : item.desconto_total_sc}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </IncomingTable>
                        </IncomingPanel>
                    }
                    {isShowSaidas &&
                        <OutputPanel>
                            <HeaderOutput>
                                <PageH1>Saídas</PageH1>
                                <OutputFilter>
                                    <FilterH1>Produtos</FilterH1>
                                    <ProductSelect value={selOptProduto} onChange={handleProdutoChange}>
                                        <option key='0' value='0' dafaultvalue={0}>TODOS</option>
                                        {
                                            selectprodutossaida.map((item, index) =>
                                                <option key={index++} value={item.idproduto}>{item.nome}</option>
                                            )
                                        }
                                    </ProductSelect>
                                    <FilterH1>Safra</FilterH1>
                                    <YearSelect value={selOptSafra} onChange={handleSafraChange}>
                                        <option key='0' value='0' defaultValue={0}>TODOS</option>
                                        {
                                            selectsafrasaida.map((item, index) =>
                                                <option key={index++} value={item.ano_safra}>{item.ano_safra}</option>
                                            )
                                        }
                                    </YearSelect>
                                    <MeasureSelect value={selOptMeasure} onChange={handleMeasureChange}>
                                        <option key='0' value='0' dafaultvalue={0}>KG</option>
                                        <option key='1' value='1'>Sc</option>
                                    </MeasureSelect>
                                    <Period type='button' onClick={handleDataIncoming}>Datas</Period>
                                    {isShowDataIncoming && <PeriodPanel>
                                        <FilterH1>De:</FilterH1>
                                        <StartPeriod type='date' value={datainicial} onChange={handleDatainicial} />
                                        <FilterH1>Até:</FilterH1>
                                        <FinalPeriod type='date' value={datafinal} onChange={handleDatafinal} />
                                        <Search onClick={() => setDataFilterActive(true)} />
                                        <Clear onClick={() => setDataFilterActive(false)} />
                                    </PeriodPanel>}
                                </OutputFilter>
                            </HeaderOutput>
                            <OutputTable>
                                <Table className='table-saida'>
                                    <thead className='thead' ref={theadWrapperRef}>
                                        <tr className='tr-saida' id='title-saida'>
                                            <th className='align-left'>Romaneio</th>
                                            <th className='align-center'>Ano Safra</th>
                                            <th className='align-center'>Produto</th>
                                            <th className='align-center'>Placa</th>
                                            <th className='align-right'>{selOptMeasure === '0' ? 'Peso Líquido (Kg)' : 'Peso Líquido (Sc)'}</th>
                                            <th className='align-center'>Data</th>
                                            <th className='align-right'>{selOptMeasure === '0' ? 'Desc. Total (Kg)' : 'Desc. Total (Sc)'}</th>
                                        </tr>
                                    </thead>
                                    <tbody className='body' ref={tbodyWrapperRef} onScroll={handleScroll}>
                                        {
                                            saidasclientenew.map((item, index) =>
                                                <tr key={index} className='tr-saida result'>
                                                    <td className='align-left'>{item.romaneio}</td>
                                                    <td className='align-center'>{item.ano_safra}</td>
                                                    <td className='align-center'>{item.produto}</td>
                                                    <td className='align-center'>{item.placa}</td>
                                                    <td className='align-right'>{selOptMeasure === '0' ? item.peso_liquido : item.peso_liquido_sc}</td>
                                                    <td className='align-center'>{item.data}</td>
                                                    <td className='align-right'>{selOptMeasure === '0' ? item.desconto_total : item.desconto_total_sc}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </OutputTable>
                        </OutputPanel>}
                    {isShowEstoques &&
                        <StockPanel>
                            <HeaderStock>
                                <PageH1>Saídas</PageH1>
                                <StockFilter>
                                    <FilterH1>Produtos</FilterH1>
                                    <ProductSelect value={selOptProduto} onChange={handleProdutoChange}>
                                        <option key='0' value='0' dafaultvalue={0}>TODOS</option>
                                        {
                                            selectprodutosestoques.map((item, index) =>
                                                <option key={index++} value={item.idproduto}>{item.nome}</option>
                                            )
                                        }
                                    </ProductSelect>
                                    <FilterH1>Safra</FilterH1>
                                    <YearSelect value={selOptSafra} onChange={handleSafraChange}>
                                        <option key='0' value='0' defaultValue={0}>TODOS</option>
                                        {
                                            selectsafraestoque.map((item, index) =>
                                                <option key={index++} value={item.ano_safra}>{item.ano_safra}</option>
                                            )
                                        }
                                    </YearSelect>
                                    <MeasureSelect value={selOptMeasure} onChange={handleMeasureChange}>
                                        <option key='0' value='0' dafaultvalue={0}>KG</option>
                                        <option key='1' value='1'>Sc</option>
                                    </MeasureSelect>
                                    <Period type='button' onClick={handleDataIncoming}>Datas</Period>
                                    {isShowDataIncoming && <PeriodPanel>
                                        <FilterH1>De:</FilterH1>
                                        <StartPeriod type='date' value={datainicial} onChange={handleDatainicial} />
                                        <FilterH1>Até:</FilterH1>
                                        <FinalPeriod type='date' value={datafinal} onChange={handleDatafinal} />
                                        <Search onClick={() => setDataFilterActive(true)} />
                                        <Clear onClick={() => setDataFilterActive(false)} />
                                    </PeriodPanel>}
                                </StockFilter>
                            </HeaderStock>
                            <StockTable>
                                <Table className='table-estoque'>
                                    <thead className='thead' ref={theadWrapperRef}>
                                        <tr className='tr-estoque' id='title-estoque'>
                                            <th className='align-left'>Produto</th>
                                            <th className='align-center'>Ano Safra</th>
                                            <th className='align-right'>{selOptMeasure === '0' ? 'Entrada (Kg)' : 'Entrada (Sc)'}</th>
                                            <th className='align-right'>{selOptMeasure === '0' ? 'Saída Efetiva (Kg)' : 'Saída Efetiva (Sc)'}</th>
                                            <th className='align-right'>{selOptMeasure === '0' ? 'Entrada Transf. (Kg)' : 'Entrada Transf. (Sc)'}</th>
                                            <th className='align-right'>{selOptMeasure === '0' ? 'Saída Transf. (Kg)' : 'Saída Transf. (Sc)'}</th>
                                            <th className='align-right'>{selOptMeasure === '0' ? 'Saldo (Kg)' : 'Saldo (Sc)'}</th>
                                        </tr>
                                    </thead>
                                    <tbody className='body' ref={tbodyWrapperRef} onScroll={handleScroll}>
                                        {
                                            estoquesclientenew.map((item, index) =>
                                                <tr key={index} className='tr-estoque result'>
                                                    <td className='align-left-slim'>{item.produto}</td>
                                                    <td className='align-center'>{item.ano_safra}</td>
                                                    <td className='align-right'>{selOptMeasure === '0' ? item.qtd : item.qtd_sc}</td>
                                                    <td className='align-right'>{selOptMeasure === '0' ? item.baixado : item.baixado_sc}</td>
                                                    <td className='align-right'>{selOptMeasure === '0' ? item.transfe : item.transfe_sc}</td>
                                                    <td className='align-right'>{selOptMeasure === '0' ? item.transfs : item.transfs_sc}</td>
                                                    <td className='align-right'>{selOptMeasure === '0' ? item.saldo : item.saldo_sc}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </StockTable>
                        </StockPanel>}
                </Body>
            </Page>
        </>
    )
}

export default AgricolaLanding