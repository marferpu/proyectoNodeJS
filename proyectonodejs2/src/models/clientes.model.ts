import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Clientes extends Entity {
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
  nombreCliente: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidoCliente: string;

  @property({
    type: 'string',
    required: true,
  })
  identificacion: string;

  @property({
    type: 'string',
    required: true,
  })
  emailCliente: string;

  @property({
    type: 'number',
    required: true,
  })
  celCliente: number;

  @property({
    type: 'string',
    required: true,
  })
  institucion: string;

  @property({
    type: 'string',
  })
  passwordCliente?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Clientes>) {
    super(data);
  }
}

export interface ClientesRelations {
  // describe navigational properties here
}

export type ClientesWithRelations = Clientes & ClientesRelations;
