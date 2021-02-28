import request from 'supertest'
import app from '../app'
import { getConnection } from 'typeorm'

import createConnection from '../database'

describe('User', () => {
  beforeAll(async () => {
    const connection = await createConnection()
    await connection.runMigrations()
  })
  afterAll(async () => {
    const connection = getConnection()
    await connection.dropDatabase()
    await connection.close()
  })

  it('should be able create an user', async () => {
    const response = await request(app).post('/users').send({ name: 'Johna Doe', email: 'test@example.com' })

    expect(response.status).toBe(201)
  })

  it('should not be able to create an user with exists email', async () => {
    const response = await request(app).post('/users').send({ name: 'Johna Doe', email: 'test@example.com' })

    expect(response.status).toBe(400)
  })
})
