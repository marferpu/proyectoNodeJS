import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Rest',
  connector: 'rest',
  baseURL: 'http://[::1]:3000/users/login',
  crud: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class RestDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Rest';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Rest', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
