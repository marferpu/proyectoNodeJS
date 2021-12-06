import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSourceDataSource} from '../datasources';
import {Supplier, SupplierRelations} from '../models';

export class SupplierRepository extends DefaultCrudRepository<
  Supplier,
  typeof Supplier.prototype.id,
  SupplierRelations
> {
  constructor(
    @inject('datasources.MongoDataSource') dataSource: MongoDataSourceDataSource,
  ) {
    super(Supplier, dataSource);
  }
}
