const puppeteer = require('puppeteer')

let scrape = async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  
  let count = 0
  let result
  await page.goto('https://www.geradordecpf.org/')
  while (count < process.argv[2]) {
    await page.click('#btn-gerar-cpf')
    await page.waitFor(1000)
    
    result = await page.evaluate(() => {
      
      let data = []
      const cpf = document.querySelector('#numero').value
      data.push(cpf)
      return data
    
    })
    
    count++

    console.log(result)
  }
  browser.close()
  return result
}

scrape().then((value) => {
  console.log(value) // Success!
})