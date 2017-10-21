const { createTables, dropTables } = require('../../utils/readSql');
const { sequelize, request } = require('../../utils/setup');
const models = require('../../../app/models');

beforeAll(async () => {
  try {
    await createTables(sequelize);
    await models.user.create({
      username: 'johndoe',
      email: 'johndoe@ex.com',
      password: 'userpassword'
    });
  } catch (e) {
    throw new Error(`${e} occured`);
  }
});

afterAll(async () => {
  try {
    await dropTables(sequelize);
  } catch (e) {
    throw new Error(`${e} occured`);
  }
});

describe('User signin ', () => {
  test('it should authenticate a user', async () => {
    const returningUser = {
      username: 'johndoe',
      password: 'userpassword'
    };

    try {
      const res = await request.post('/auth/v1/signin').send(returningUser);
      expect(res.status).toEqual(200);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body).toHaveProperty('accessToken');
      expect(res.body).toHaveProperty('username');
      expect(res.body).toHaveProperty('createdAt');
      expect(res.body).toHaveProperty('updatedAt');
      expect(res.body).toHaveProperty('email');
    } catch (e) {
      throw new Error(`${e} occured`);
    }
  });

  test('it should throw 400 if username or password are missing', async () => {
    const failReq = {
      username: 'johndoe'
    };

    try {
      const res = await request.post('/auth/v1/signin').send(failReq);

      expect(res.status).toEqual(400);
    } catch (e) {
      throw new Error(`${e} occured`);
    }
  });

  test('it should throw 401 if username is not registered', async () => {
    const failReq = {
      username: 'unknown_usr',
      password: 'notreally!'
    };

    try {
      const res = await request.post('/auth/v1/signin').send(failReq);

      expect(res).toHaveProperty('status');
      expect(res.status).toEqual(401);
      expect(res).toHaveProperty('body');
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body).toHaveProperty('message');
    } catch (e) {
      throw new Error(`${e} occured`);
    }
  });

  test('it should throw 401 if password is incorrect', async () => {
    const failReq = {
      username: 'johndoe',
      password: 'user_password'
    };

    try {
      const res = await request.post('/auth/v1/signin').send(failReq);

      expect(res).toHaveProperty('status');
      expect(res.status).toEqual(401);
      expect(res).toHaveProperty('body');
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body).toHaveProperty('message');
    } catch (e) {
      throw new Error(`${e} occured`);
    }
  });
});
