const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');
const getSearchResults = require('./service')

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(cors());

let cacheHitCount = 0

router.get('/api/data', async (ctx) => {
    try {
      const searchTerm = ctx.query.search;
      const { data, isResultFromDB } = await getSearchResults(searchTerm)
      if (isResultFromDB) {
        cacheHitCount += 1;
      }
      ctx.body = { data, cacheHitCount, isResultFromDB };
    } catch (error) {
      ctx.status = 500;
      ctx.body = { error: error.message };
    }
  });

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;
app.listen(5000, () => {
  console.log(`Server running on port ${5000}`);
});