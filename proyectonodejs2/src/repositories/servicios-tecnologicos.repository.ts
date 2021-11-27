import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSourceDataSource} from '../datasources';
import {ServiciosTecnologicos, ServiciosTecnologicosRelations} from '../models';

export class ServiciosTecnologicosRepository extends DefaultCrudRepository<
  ServiciosTecnologicos,
  typeof ServiciosTecnologicos.prototype._id,
  ServiciosTecnologicosRelations
> {
  constructor(
    @inject('datasources.MongoDataSource') dataSource: MongoDataSourceDataSource,
  ) {
    super(ServiciosTecnologicos, dataSource);
  }
}
