import { chromium, firefox } from 'playwright'
import { BASE_URL, CONTENT_SELECTOR, PAGE_TITLE, TITLE_SELECTOR } from './constants'

it('should render ./ from cms', async () => {
  for (const browserType of [chromium, firefox]) {
    const browser = await browserType.launch()
    const page = await browser.newPage()

    await page.goto(BASE_URL)

    expect(await page.title()).toBe(PAGE_TITLE)
    expect(await page.textContent(TITLE_SELECTOR)).toBe('index')
    expect(await page.textContent(CONTENT_SELECTOR)).toBe('This is the new index page.')

    await page.close()
    await browser.close()
  }
})

it('should render ./demo/ from cms', async () => {
  for (const browserType of [chromium, firefox]) {
    const browser = await browserType.launch()
    const page = await browser.newPage()

    await page.goto(`${BASE_URL}demo/`)

    expect(await page.title()).toBe(PAGE_TITLE)
    expect(await page.textContent(TITLE_SELECTOR)).toBe('demo')
    expect(await page.textContent(CONTENT_SELECTOR)).toBe('Demo page')

    await page.close()
    await browser.close()
  }
})

it('should render ./demo/js from cms', async () => {
  for (const browserType of [chromium, firefox]) {
    const browser = await browserType.launch()
    const page = await browser.newPage()

    await page.goto(`${BASE_URL}demo/js`)

    expect(await page.title()).toBe(PAGE_TITLE)
    expect(await page.textContent(TITLE_SELECTOR)).toBe('JS')
    expect(await page.textContent(CONTENT_SELECTOR)).toBe('JavaScript is a programming language.')

    await page.close()
    await browser.close()
  }
})
