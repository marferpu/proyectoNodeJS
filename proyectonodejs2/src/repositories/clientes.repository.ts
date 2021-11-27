import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSourceDataSource} from '../datasources';
import {Clientes, ClientesRelations} from '../models';

export class ClientesRepository extends DefaultCrudRepository<
  Clientes,
  typeof Clientes.prototype._id,
  ClientesRelations
> {
  constructor(
    @inject('datasources.MongoDataSource') dataSource: MongoDataSourceDataSource,
  ) {
    super(Clientes, dataSource);
  }
}
