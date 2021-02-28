import request from 'supertest'
import app from '../app'
import { getConnection } from 'typeorm'

import createConnection from '../database'

describe('Surveys', () => {
  beforeAll(async () => {
    const connection = await createConnection()
    await connection.runMigrations()
  })
  afterAll(async () => {
    const connection = getConnection()
    await connection.dropDatabase()
    await connection.close()
  })

  it('should be able create a new survey', async () => {
    const response = await request(app).post('/surveys').send({ title: 'Johna Doe', description: 'description example' })

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('id')
  })

  it('should be able to get all surveys', async () => {
    await request(app).post('/surveys').send({ title: 'Johna Doe2', description: 'description example2' })

    const response = await request(app).get('/surveys')

    expect(response.body.length).toBe(2)
  })
})
