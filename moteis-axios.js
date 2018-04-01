const axios = require('axios')
const fs = require('fs')

const filtros = { 
  Filtros: { 
    MacroId: "", 
    MicroId: "", 
    CidadeId: 0, 
    PrecoId: "", 
    DescontoId: "NAOIMPORTA",
    SuitesId: [], 
    Paginacao: {
      HasPaginate: true,
      Pagina: 1,
      Quantidade: 10
    }, 
    TipoFiltro: "1", 
    UrlAmigavel: "",
    MoteisEm: "",
    Latitude: 0,
    Longitude: 0, 
    Distancia: 0 
  } 
}

axios.post('https://www.guiademoteis.com.br/Ajax/Busca/AjaxBusca/GetResultadoBuscaAvancada', 
  {
    filtros
  })
  .then((response) => {
    console.log(response.data)
    escreveJsonMoteis(response.data)
  })
  .catch((err) => {
    console.log(err.response)
  })

const escreveJsonMoteis = (value) => {
  fs.writeFile('moteis-axios.json', JSON.stringify(value, null, 2), function (err) {
    console.log('Arquivo escrito com sucesso!');
  })
}