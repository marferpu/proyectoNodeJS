import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class ServiciosTecnologicos extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  _id?: number;

  @property({
    type: 'string',
    required: true,
  })
  tipoServicio: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreServicio: string;

  @property({
    type: 'number',
    required: true,
  })
  valorUnitario: number;

  @property({
    type: 'date',
    required: true,
  })
  fechaIngreso: string;

  @property({
    type: 'string',
    required: true,
  })
  elabora: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ServiciosTecnologicos>) {
    super(data);
  }
}

export interface ServiciosTecnologicosRelations {
  // describe navigational properties here
}

export type ServiciosTecnologicosWithRelations = ServiciosTecnologicos & ServiciosTecnologicosRelations;
