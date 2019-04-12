import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import {join, resolve} from 'path';
import * as Express from 'express';
import {ngExpressEngine} from '@nguniversal/express-engine';
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';

const app = Express();
const PORT = process.env.PORT || 4000;
const DIST_PATH = resolve('../dist');

const {
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP,
} = require('./dist/server/main');

app.engine(
  'html',
  ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [provideModuleMap(LAZY_MODULE_MAP)],
  }),
);

app.set('view engine', 'html');
// 设置模版引擎的目录
app.set('views', join(DIST_PATH, 'browser'));

// 请求转发
app.get('/api/*', (req, res) =>
  res.status(404).send('data request are not support'),
);

// 重定向到首页
app.get('*', (req, res) => res.render('index', {req}));

app.listen(PORT, () =>
  console.info(`Node server listening on http://localhost:${PORT}`),
);
