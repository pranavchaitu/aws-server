import { Hono } from 'hono'
import { authMiddleware } from './middleware';

const app = new Hono()

app.get('/', async (c) => {
  const a : number = Number(c.req.query('a'))
  return c.text(`${a*a}`)
})

app.post('/', authMiddleware ,async (c) => {
  const body = await c.req.json();
  const headers = c.req.header('Authorization')
  const param = c.req.query('param')
  console.log("hello");
  return c.json({
    body,
    headers,
    param,
  })
})

export default app
