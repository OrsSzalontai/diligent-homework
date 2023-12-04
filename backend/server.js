const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');
const data = require('./data.js')

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(cors());

router.get('/api/data', async (ctx) => {
    try {
      const searchTerm = ctx.query.search;

      ctx.body = data;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { error: error.message };
    }
  });

  // app.use(async (ctx) => {
  //   if (ctx.path === '/api/data' && ctx.method === 'GET') {
  //     ctx.response.body = data;
  //     ctx.response.status = 200; // OK status
  //   } else {
  //     ctx.response.status = 404; // Not Found for other routes
  //   }
  // });


app.use(router.routes());
app.use(router.allowedMethods());

// const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;
app.listen(5000, () => {
  console.log(`Server running on port ${5000}`);
});