import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {ServiciosTecnologicos} from '../models';
import {ServiciosTecnologicosRepository} from '../repositories';
import {authenticate} from '@loopback/authentication';
// ------------------------------------
@authenticate('jwt') // <---- Apply the @authenticate decorator at the class level


export class ServiciosTecControllerController {
  constructor(
    @repository(ServiciosTecnologicosRepository)
    public serviciosTecnologicosRepository : ServiciosTecnologicosRepository,
  ) {}

  @post('/servicios-tecnologicos')
  @response(200, {
    description: 'ServiciosTecnologicos model instance',
    content: {'application/json': {schema: getModelSchemaRef(ServiciosTecnologicos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ServiciosTecnologicos, {
            title: 'NewServiciosTecnologicos',

          }),
        },
      },
    })
    serviciosTecnologicos: ServiciosTecnologicos,
  ): Promise<ServiciosTecnologicos> {
    const listaTempo = this.serviciosTecnologicosRepository.create(serviciosTecnologicos);
    return listaTempo;
  }

  @get('/servicios-tecnologicos/count')
  @response(200, {
    description: 'ServiciosTecnologicos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ServiciosTecnologicos) where?: Where<ServiciosTecnologicos>,
  ): Promise<Count> {
    return this.serviciosTecnologicosRepository.count(where);
  }

  @get('/servicios-tecnologicos')
  @response(200, {
    description: 'Array of ServiciosTecnologicos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ServiciosTecnologicos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ServiciosTecnologicos) filter?: Filter<ServiciosTecnologicos>,
  ): Promise<ServiciosTecnologicos[]> {
    return this.serviciosTecnologicosRepository.find(filter);
  }

  @patch('/servicios-tecnologicos')
  @response(200, {
    description: 'ServiciosTecnologicos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ServiciosTecnologicos, {partial: true}),
        },
      },
    })
    serviciosTecnologicos: ServiciosTecnologicos,
    @param.where(ServiciosTecnologicos) where?: Where<ServiciosTecnologicos>,
  ): Promise<Count> {
    return this.serviciosTecnologicosRepository.updateAll(serviciosTecnologicos, where);
  }

  @get('/servicios-tecnologicos/{id}')
  @response(200, {
    description: 'ServiciosTecnologicos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ServiciosTecnologicos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ServiciosTecnologicos, {exclude: 'where'}) filter?: FilterExcludingWhere<ServiciosTecnologicos>
  ): Promise<ServiciosTecnologicos> {
    return this.serviciosTecnologicosRepository.findById(id, filter);
  }

  @patch('/servicios-tecnologicos/{id}')
  @response(204, {
    description: 'ServiciosTecnologicos PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ServiciosTecnologicos, {partial: true}),
        },
      },
    })
    serviciosTecnologicos: ServiciosTecnologicos,
  ): Promise<void> {
    await this.serviciosTecnologicosRepository.updateById(id, serviciosTecnologicos);
  }

  @put('/servicios-tecnologicos/{id}')
  @response(204, {
    description: 'ServiciosTecnologicos PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() serviciosTecnologicos: ServiciosTecnologicos,
  ): Promise<void> {
    await this.serviciosTecnologicosRepository.replaceById(id, serviciosTecnologicos);
  }

  @del('/servicios-tecnologicos/{id}')
  @response(204, {
    description: 'ServiciosTecnologicos DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.serviciosTecnologicosRepository.deleteById(id);
  }
}
