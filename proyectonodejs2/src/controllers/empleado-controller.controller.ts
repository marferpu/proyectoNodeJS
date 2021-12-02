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
import {EmpleadosModel} from '../models';
import {EmpleadosModelRepository} from '../repositories';
import {authenticate} from '@loopback/authentication';
// ------------------------------------
@authenticate('jwt') // <---- Apply the @authenticate decorator at the class level

export class EmpleadoControllerController {
  constructor(
    @repository(EmpleadosModelRepository)
    public empleadosModelRepository : EmpleadosModelRepository,
  ) {}

  @post('/integrantes')
  @response(200, {
    description: 'EmpleadosModel model instance',
    content: {'application/json': {schema: getModelSchemaRef(EmpleadosModel)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmpleadosModel, {
            title: 'NewEmpleadosModel',

          }),
        },
      },
    })
    empleadosModel: EmpleadosModel,
  ): Promise<EmpleadosModel> {
    const listaTempo = this.empleadosModelRepository.create(empleadosModel);
    return listaTempo;
  }

  @get('/integrantes/count')
  @response(200, {
    description: 'EmpleadosModel model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(EmpleadosModel) where?: Where<EmpleadosModel>,
  ): Promise<Count> {
    return this.empleadosModelRepository.count(where);
  }

  @get('/integrantes')
  @response(200, {
    description: 'Array of EmpleadosModel model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(EmpleadosModel, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(EmpleadosModel) filter?: Filter<EmpleadosModel>,
  ): Promise<EmpleadosModel[]> {
    return this.empleadosModelRepository.find(filter);
  }

  @patch('/integrantes')
  @response(200, {
    description: 'EmpleadosModel PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmpleadosModel, {partial: true}),
        },
      },
    })
    empleadosModel: EmpleadosModel,
    @param.where(EmpleadosModel) where?: Where<EmpleadosModel>,
  ): Promise<Count> {
    return this.empleadosModelRepository.updateAll(empleadosModel, where);
  }

  @get('/integrantes/{id}')
  @response(200, {
    description: 'EmpleadosModel model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(EmpleadosModel, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(EmpleadosModel, {exclude: 'where'}) filter?: FilterExcludingWhere<EmpleadosModel>
  ): Promise<EmpleadosModel> {
    return this.empleadosModelRepository.findById(id, filter);
  }

  @patch('/integrantes/{id}')
  @response(204, {
    description: 'EmpleadosModel PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmpleadosModel, {partial: true}),
        },
      },
    })
    empleadosModel: EmpleadosModel,
  ): Promise<void> {
    await this.empleadosModelRepository.updateById(id, empleadosModel);
  }

  @put('/integrantes/{id}')
  @response(204, {
    description: 'EmpleadosModel PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() empleadosModel: EmpleadosModel,
  ): Promise<void> {
    await this.empleadosModelRepository.replaceById(id, empleadosModel);
  }

  @del('/integrantes/{id}')
  @response(204, {
    description: 'EmpleadosModel DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.empleadosModelRepository.deleteById(id);
  }
}
