import { chromium, firefox } from 'playwright'
import { BASE_URL, PAGE_TITLE } from './constants'

test('render ./ from cms', async () => {
  for (const browserType of [chromium, firefox]) {
    const browser = await browserType.launch()
    const page = await browser.newPage()

    await page.goto(BASE_URL)

    expect(await page.title()).toBe(PAGE_TITLE)
    expect(await page.$('text=index')).toBeTruthy()
    expect(await page.$('text=This is the new index page.')).toBeTruthy()

    await page.close()
    await browser.close()
  }
})
