import { chromium } from 'playwright'

const BASE_URL = 'http://localhost:3000/'
const TITLE = 'The Jac'
const PAGE_CONTENT_TITLE = '.PageContent_title__11Ci5'
const PAGE_CONTENT_CONTENT = '.PageContent_content__1EDD_'

it('should render ./ from cms', async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  await page.goto(BASE_URL)

  expect(await page.title()).toBe(TITLE)
  expect(await page.textContent(PAGE_CONTENT_TITLE)).toBe('index')
  expect(await page.textContent(PAGE_CONTENT_CONTENT)).toBe('This is the new index page.')

  await page.close()
  await browser.close()
})

it('should render ./demo/ from cms', async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  await page.goto(`${BASE_URL}demo/`)

  expect(await page.title()).toBe(TITLE)
  expect(await page.textContent(PAGE_CONTENT_TITLE)).toBe('demo')
  expect(await page.textContent(PAGE_CONTENT_CONTENT)).toBe('Demo page')

  await page.close()
  await browser.close()
})

it('should render ./demo/js from cms', async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  await page.goto(`${BASE_URL}demo/js`)

  expect(await page.title()).toBe(TITLE)
  expect(await page.textContent(PAGE_CONTENT_TITLE)).toBe('JS')
  expect(await page.textContent(PAGE_CONTENT_CONTENT)).toBe('JavaScript is a programming language.')

  await page.close()
  await browser.close()
})
