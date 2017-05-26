module.exports = {
  Provides: require('./lib/decorators').Provides,
  Inject: require('./lib/decorators').Inject,
  Provider: require('./lib/decorators').Provider,
  Singleton: require('./lib/decorators').Singleton,
  Promises: require('./lib/decorators').Promises,
  Injector: require('./lib/injector').Injector,
  ProvidesToList: require('./lib/decorators').ProvidesToList,
  ProvidesToMap: require('./lib/decorators').ProvidesToMap,
  ListBinder: require('./lib/binder/list_binder').ListBinder,
};