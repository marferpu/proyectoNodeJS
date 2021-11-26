import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Cursos extends Entity {
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
  nombreCurso: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaCreacion: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Cursos>) {
    super(data);
  }
}

export interface CursosRelations {
  // describe navigational properties here
}

export type CursosWithRelations = Cursos & CursosRelations;
