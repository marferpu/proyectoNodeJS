import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MongoDataSourceDataSource} from '../datasources';
import {Account, AccountRelations, Supplier} from '../models';
import {SupplierRepository} from './supplier.repository';

export class AccountRepository extends DefaultCrudRepository<
  Account,
  typeof Account.prototype.id,
  AccountRelations
> {

  public readonly supplier: HasOneRepositoryFactory<Supplier, typeof Account.prototype.id>;

  constructor(
    @inject('datasources.MongoDataSource') dataSource: MongoDataSourceDataSource, @repository.getter('SupplierRepository') protected supplierRepositoryGetter: Getter<SupplierRepository>,
  ) {
    super(Account, dataSource);
    this.supplier = this.createHasOneRepositoryFactoryFor('supplier', supplierRepositoryGetter);
    this.registerInclusionResolver('supplier', this.supplier.inclusionResolver);
  }
}
