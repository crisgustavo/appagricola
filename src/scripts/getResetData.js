import moment from "moment"

function GetResetData(entradasclientenew, datainicial, datafinal) {
    let filterData = entradasclientenew.filter(item => {
        const itemData = moment(item.data, 'DD/MM/YYYY').format('YYYY-MM-DD')
        const dataInicial = moment('1970-01-01', 'YYYY-MM-DD').format('YYYY-MM-DD')
        const dataFinal = moment().format('YYYY-MM-DD')

        return itemData >= dataInicial && itemData <= dataFinal
    })
    return filterData
}

export default GetResetData