import moment from "moment"

function GetFilterData(entradasclientenew, datainicial, datafinal) {
    let filterData = entradasclientenew.filter(item => {
        const itemData = moment(item.data, 'DD/MM/YYYY').format('YYYY-MM-DD')
        const dataInicial = moment(datainicial, 'YYYY-MM-DD').format('YYYY-MM-DD')
        const dataFinal = moment(datafinal, 'YYYY-MM-DD').format('YYYY-MM-DD')

        return itemData >= dataInicial && itemData <= dataFinal
    })
    return filterData
}

export default GetFilterData