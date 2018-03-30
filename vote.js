const axios = require('axios')

const randomiza = (n) => {
  const ranNum = Math.round(Math.random() * n);
  return ranNum;
}

const mod = (dividendo, divisor) => {
  return Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor));
}

const geraCpf = (comPontos) => {
  const n = 9
  const n1 = randomiza(n)
  const n2 = randomiza(n)
  const n3 = randomiza(n)
  const n4 = randomiza(n)
  const n5 = randomiza(n)
  const n6 = randomiza(n)
  const n7 = randomiza(n)
  const n8 = randomiza(n)
  const n9 = randomiza(n)
  let d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10
  d1 = 11 - (mod(d1, 11))
  if (d1 >= 10) d1 = 0
  var d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11
  d2 = 11 - (mod(d2, 11))
  if (d2 >= 10) d2 = 0
  let retorno = ''
  if (comPontos) retorno = '' + n1 + n2 + n3 + '.' + n4 + n5 + n6 + '.' + n7 + n8 + n9 + '-' + d1 + d2
  else retorno = '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + d1 + d2
  return retorno
}

let count = 0
while(count < process.argv[2]) {
  setTimeout(() => {
    axios.get(`https://vote.eiplus.com.br/auth-email?cpf=${geraCpf()}`)
      .then((data) => console.log('sucesso!'))
      .catch((err) => console.log('erro!'))
  }, 1000);
}