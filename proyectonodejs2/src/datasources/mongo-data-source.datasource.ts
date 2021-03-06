import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'MongoDataSource',
  connector: 'mongodb',
  url: 'mongodb+srv://mongonodejs:mongonodejs@clusternodejs.knwq8.mongodb.net/PFAdb',
  port: 0,
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongoDataSourceDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'MongoDataSource';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.MongoDataSource', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
