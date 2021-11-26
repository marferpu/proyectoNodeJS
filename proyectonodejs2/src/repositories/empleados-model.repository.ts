import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSourceDataSource} from '../datasources';
import {EmpleadosModel, EmpleadosModelRelations} from '../models';

export class EmpleadosModelRepository extends DefaultCrudRepository<
  EmpleadosModel,
  typeof EmpleadosModel.prototype._id,
  EmpleadosModelRelations
> {
  constructor(
    @inject('datasources.MongoDataSource') dataSource: MongoDataSourceDataSource,
  ) {
    super(EmpleadosModel, dataSource);
  }
}
