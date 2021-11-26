import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class EmpleadosModel extends Entity {
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
  nombreEmpleado: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidoEmpleado: string;

  @property({
    type: 'string',
    required: true,
  })
  cedulaEmpleado: string;

  @property({
    type: 'string',
  })
  profesion?: string;

  @property({
    type: 'string',
    required: true,
  })
  emailEmpleado: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaNacimiento: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<EmpleadosModel>) {
    super(data);
  }
}

export interface EmpleadosModelRelations {
  // describe navigational properties here
}

export type EmpleadosModelWithRelations = EmpleadosModel & EmpleadosModelRelations;
