const newsRouter = require('./news');
const sitesRouter = require('./site');
const brandRouter = require('./brands');


function route(app) {
    app.use('/tin-tuc', newsRouter);
    app.use('/danh-sach-brand', brandRouter);
    app.use('/', sitesRouter);
}

module.exports = route;