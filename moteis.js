const fs = require('fs')
const puppeteer = require('puppeteer')

let scrape = async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  await page.goto('https://www.guiademoteis.com.br/lista-motel/belem')

  const result = await page.evaluate(() => {
    let data = [] 
    let elements = document.querySelectorAll('.normal') 
    elements.forEach((element) => {
      const nome = element.querySelector('#resultado-motel-nome').innerText.trim()
      const endereco = element.querySelector('#resultado-motel-cidade > span.endereco > span.logradouro').innerText.trim()
      const complemento = element.querySelector('#resultado-motel-cidade > span.endereco > span.complemento').innerText.trim()
      const telefone = element.querySelector('#resultado-motel-cidade > span.tel').innerText.trim()
      let menorValor = 'Não existe informação'
      let maiorValor = 'Não existe informação'
      let upvotes = '0'
      if (element.querySelector('#precoSuites')) {
        menorValor = element.querySelector('#resultado-motel-menor-valor-suite').innerText.trim()
        maiorValor = element.querySelector('#resultado-motel-maior-valor-suite').innerText.trim()
      }
      if (element.querySelector('#moteis-resultado > div:nth-child(8) > div > div > div.details-box.details-right > div > div > ul.menuDetalhesUp.relativeLinksMenuBox > ul > li.mIcons')) {
        upvotes = element.querySelector('#moteis-resultado > div:nth-child(8) > div > div > div.details-box.details-right > div > div > ul.menuDetalhesUp.relativeLinksMenuBox > ul > li.mIcons > span.sonho.homeico-sprite > font').innerText.trim()
      }
      const imagem = element.querySelector('#resultado-motel-img').innerText.trim()
      data.push({ nome, endereco, complemento, telefone, upvotes, menorValor, maiorValor, imagem }) 
    })
    
    
    return data 
  })
  
  await page.click('#paginacao > div > ul > li.numero > a:nth-child(3)')
  await page.waitFor(1000)
  
  const result1 = await page.evaluate(() => {
    let data = []
    let elements = document.querySelectorAll('.normal')
    elements.forEach((element) => {
      const nome = element.querySelector('#resultado-motel-nome').innerText.trim()
      const endereco = element.querySelector('#resultado-motel-cidade > span.endereco > span.logradouro').innerText.trim()
      const complemento = element.querySelector('#resultado-motel-cidade > span.endereco > span.complemento').innerText.trim()
      const telefone = element.querySelector('#resultado-motel-cidade > span.tel').innerText.trim()
      let menorValor = 'Não existe informação'
      let maiorValor = 'Não existe informação'
      let upvotes = '0'
      if (element.querySelector('#precoSuites')) {
        menorValor = element.querySelector('#resultado-motel-menor-valor-suite').innerText.trim()
        maiorValor = element.querySelector('#resultado-motel-maior-valor-suite').innerText.trim()
      }
      if (element.querySelector('#moteis-resultado > div:nth-child(8) > div > div > div.details-box.details-right > div > div > ul.menuDetalhesUp.relativeLinksMenuBox > ul > li.mIcons')) {
        upvotes = element.querySelector('#moteis-resultado > div:nth-child(8) > div > div > div.details-box.details-right > div > div > ul.menuDetalhesUp.relativeLinksMenuBox > ul > li.mIcons > span.sonho.homeico-sprite > font').innerText.trim()
      }
      const imagem = element.querySelector('#resultado-motel-img').innerText.trim()
      data.push({ nome, endereco, complemento, telefone, upvotes, menorValor, maiorValor, imagem }) 
    })


    return data 
  })
  
  await page.click('#paginacao > div > ul > li.numero > a:nth-child(5)')
  await page.waitFor(1000)

  const result2 = await page.evaluate(() => {
    let data = []
    let elements = document.querySelectorAll('.normal')
    elements.forEach((element) => {
      const nome = element.querySelector('#resultado-motel-nome').innerText.trim()
      const endereco = element.querySelector('#resultado-motel-cidade > span.endereco > span.logradouro').innerText.trim()
      const complemento = element.querySelector('#resultado-motel-cidade > span.endereco > span.complemento').innerText.trim()
      const telefone = element.querySelector('#resultado-motel-cidade > span.tel').innerText.trim()
      let menorValor = 'Não existe informação'
      let maiorValor = 'Não existe informação'
      let upvotes = '0'
      if (element.querySelector('#precoSuites')) {
        menorValor = element.querySelector('#resultado-motel-menor-valor-suite').innerText.trim()
        maiorValor = element.querySelector('#resultado-motel-maior-valor-suite').innerText.trim()
      }
      if (element.querySelector('#moteis-resultado > div:nth-child(8) > div > div > div.details-box.details-right > div > div > ul.menuDetalhesUp.relativeLinksMenuBox > ul > li.mIcons')) {
        upvotes = element.querySelector('#moteis-resultado > div:nth-child(8) > div > div > div.details-box.details-right > div > div > ul.menuDetalhesUp.relativeLinksMenuBox > ul > li.mIcons > span.sonho.homeico-sprite > font').innerText.trim()
      }
      const imagem = element.querySelector('#resultado-motel-img').innerText.trim()
      data.push({ nome, endereco, complemento, telefone, upvotes, menorValor, maiorValor, imagem }) 
    })


    return data 
  })
  
  
  await page.click('#paginacao > div > ul > li.numero > a:nth-child(7)')
  await page.waitFor(1000)

  const result3 = await page.evaluate(() => {
    let data = []
    let elements = document.querySelectorAll('.normal')
    elements.forEach((element) => {
      const nome = element.querySelector('#resultado-motel-nome').innerText.trim()
      const endereco = element.querySelector('#resultado-motel-cidade > span.endereco > span.logradouro').innerText.trim()
      const complemento = element.querySelector('#resultado-motel-cidade > span.endereco > span.complemento').innerText.trim()
      const telefone = element.querySelector('#resultado-motel-cidade > span.tel').innerText.trim()
      let menorValor = 'Não existe informação'
      let maiorValor = 'Não existe informação'
      let upvotes = '0'
      if (element.querySelector('#precoSuites')) {
        menorValor = element.querySelector('#resultado-motel-menor-valor-suite').innerText.trim()
        maiorValor = element.querySelector('#resultado-motel-maior-valor-suite').innerText.trim()
      }
      if (element.querySelector('#moteis-resultado > div:nth-child(8) > div > div > div.details-box.details-right > div > div > ul.menuDetalhesUp.relativeLinksMenuBox > ul > li.mIcons')) {
        upvotes = element.querySelector('#moteis-resultado > div:nth-child(8) > div > div > div.details-box.details-right > div > div > ul.menuDetalhesUp.relativeLinksMenuBox > ul > li.mIcons > span.sonho.homeico-sprite > font').innerText.trim()
      }
      const imagem = element.querySelector('#resultado-motel-img').innerText.trim()
      data.push({ nome, endereco, complemento, telefone, upvotes, menorValor, maiorValor, imagem }) 
    })


    return data 
  })
  
  await page.click('#paginacao > div > ul > li.numero > a:nth-child(9)')
  await page.waitFor(1000)

  const result4 = await page.evaluate(() => {
    let data = []
    let elements = document.querySelectorAll('.normal')
    elements.forEach((element) => {
      const nome = element.querySelector('#resultado-motel-nome').innerText.trim()
      const endereco = element.querySelector('#resultado-motel-cidade > span.endereco > span.logradouro').innerText.trim()
      const complemento = element.querySelector('#resultado-motel-cidade > span.endereco > span.complemento').innerText.trim()
      const telefone = element.querySelector('#resultado-motel-cidade > span.tel').innerText.trim()
      let menorValor = 'Não existe informação'
      let maiorValor = 'Não existe informação'
      let upvotes = '0'
      if (element.querySelector('#precoSuites')) {
        menorValor = element.querySelector('#resultado-motel-menor-valor-suite').innerText.trim()
        maiorValor = element.querySelector('#resultado-motel-maior-valor-suite').innerText.trim()
      }
      if (element.querySelector('#moteis-resultado > div:nth-child(8) > div > div > div.details-box.details-right > div > div > ul.menuDetalhesUp.relativeLinksMenuBox > ul > li.mIcons')) {
        upvotes = element.querySelector('#moteis-resultado > div:nth-child(8) > div > div > div.details-box.details-right > div > div > ul.menuDetalhesUp.relativeLinksMenuBox > ul > li.mIcons > span.sonho.homeico-sprite > font').innerText.trim()
      }
      const imagem = element.querySelector('#resultado-motel-img').innerText.trim()
      data.push({ nome, endereco, complemento, telefone, upvotes, menorValor, maiorValor, imagem }) 
    })


    return data 
  })  
  
  let teste = []
  teste.push(result)
  teste.push(result1)
  teste.push(result2)
  teste.push(result3)
  teste.push(result4)
  browser.close()
  return teste
}

scrape().then((value) => {
  console.log(value) // Successo!
  escreveJsonMoteis(value)
})

const escreveJsonMoteis = (value) => {
  fs.writeFile('moteis.json', JSON.stringify(value, null, 4), function (err) {
    console.log('Arquivo escrito com sucesso!');
  })
}