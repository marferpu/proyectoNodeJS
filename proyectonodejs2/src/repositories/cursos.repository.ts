import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSourceDataSource} from '../datasources';
import {Cursos, CursosRelations} from '../models';

export class CursosRepository extends DefaultCrudRepository<
  Cursos,
  typeof Cursos.prototype._id,
  CursosRelations
> {
  constructor(
    @inject('datasources.MongoDataSource') dataSource: MongoDataSourceDataSource,
  ) {
    super(Cursos, dataSource);
  }
}
