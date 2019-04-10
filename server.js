const express = require('express');
const stencil = require('@stencil/core/server');
const path = require('path');

const app = express();
const port = 3030;

const config = stencil.loadConfig(__dirname);

app.use(stencil.ssrPathRegex, stencil.ssrMiddleware({ config }));

app.use(express.static(path.join(__dirname, 'www')));

app.listen(port, () => config.logger.info(`server started at http://localhost:${port}/`));
