const { createTables, dropTables } = require('../../utils/readSql');
const { sequelize, request } = require('../../utils/setup');

beforeAll(async () => {
  await createTables(sequelize);
});

afterAll(async () => {
  await dropTables(sequelize);
});

describe('User signup ', () => {
  test('it should create a new user records', async () => {
    const newUser = {
      username: 'johndoe',
      email: 'johndoe@ex.com',
      password: 'userpassword'
    };

    const res = await request.post('/auth/v1/signup').send(newUser);
    expect(res.status).toEqual(201);
    expect(res.body).toBeInstanceOf(Object);
    expect(res.body).toHaveProperty('accessToken');
    expect(res.body).toHaveProperty('username');
    expect(res.body).toHaveProperty('createdAt');
    expect(res.body).toHaveProperty('updatedAt');
  });
});
