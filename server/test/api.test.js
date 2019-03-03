/* eslint-disable no-undef */
const request = require('supertest')
let app = require('../server')
const {
  ADD_CONTAINER_ENDPOINT,
  ALL_CONTAINER_ENDPOINT,
  DELETE_ALL_CONTAINER_ENDPOINT,
  DELETE_CONTAINER_ENDPOINT,
  UPDATE_CONTAINER_ENDPOINT,
} = require('../utils/constants')
app = app()
const user = {
  firstName: 'Jiten',
  lastName: 'Sabharwal',
  birthDate: '1994-03-08',
  hobbies: 'Football, Chess',
}
describe('Testing Basic server connection', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/')
    return expect(response.statusCode).toBe(200)
  })
})

describe('Testing Node Server User API\'s', () => {
  describe('Testing Get all users API', () => {
    test('It should response the GET method', async () => {
      const response = await request(app).get(ALL_CONTAINER_ENDPOINT)
      const {success, data} = response.body
      expect(response.statusCode).toBe(200)
      expect(typeof data).toBe('object')
      expect(success).toBe(true)
    })
  })
  describe('Testing removeAll Users', () => {
    test('It should Delete All the Users', async () => {
      const response = await request(app).post(DELETE_ALL_CONTAINER_ENDPOINT)
      expect(response.statusCode).toBe(200)
      expect(response.body.data).toBe('Done')
      const _response = await request(app).get(ALL_CONTAINER_ENDPOINT)
      expect(_response.statusCode).toBe(200)
      expect(_response.body.data.length).toBe(0)
    })
  })
  describe('Testing Add A new User', () => {
    test('It should add a new User', async () => {
      const response = await request(app).post(ADD_CONTAINER_ENDPOINT).send(user)
      expect(response.statusCode).toBe(200)
      const {data} = response.body
      expect(typeof data._id).toBe('string')
    })

    describe('Getting the added new User', () => {
      test('It should get a User and match the firstName', async () => {
        const response = await request(app).get(ALL_CONTAINER_ENDPOINT)
        expect(response.statusCode).toBe(200)
        let {data} = response.body
        expect(data.length).toBe(1);
        ([data] = data)
        expect(data.firstName).toBe(user.firstName)
        user._id = data._id
      })
    })

    describe('Getting the added new User', () => {
      test('It should get a User and match the firstName', async () => {
        const response = await request(app).post(`${UPDATE_CONTAINER_ENDPOINT}/${user._id}`, {hobbies: 'Fishing, Talking'})
        expect(response.statusCode).toBe(200)
        let {data} = response.body
        expect(data.length).toBe(1);
        ([data] = data)
        expect(data.firstName).toBe(user.firstName)
        user._id = data._id
      })
    })

    describe('Deleting the added new User', () => {
      test('It should get a User and match the firstName', async () => {
        const response = await request(app).post(`${DELETE_CONTAINER_ENDPOINT}/${user._id}`)
        expect(response.statusCode).toBe(200)
      })
    })
  })
})
