const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');
const getSearchResults = require('./service')

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(cors());


router.get('/api/data', async (ctx) => {
    try {
      const {search, pageNumber} = ctx.query;
      const { data, isResultFromDB } = await getSearchResults(search,Number(pageNumber))
      ctx.body = { data, isResultFromDB };
    } catch (error) {
      ctx.status = 500;
      ctx.body = { error: error.message, stack: error.stack };
    }
  });

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;
app.listen(5000, () => {
  console.log(`Server running on port ${5000}`);
});