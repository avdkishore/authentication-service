const { createTables, dropTables } = require('../../utils/readSql');
const { sequelize } = require('../../utils/setup');
const models = require('../../../app/models');

beforeAll(async () => {
  await createTables(sequelize);
});

afterAll(async () => {
  await dropTables(sequelize);
});

describe('User Model test', () => {
  test('should create a record', async () => {
    const values = {
      username: 'johndoe',
      password: 'somerandompassword',
      email: 'johndoe@ex.com'
    };

    const model = await models.user.create(values);
    expect(model).toBeInstanceOf(Object);
    expect(model.username).toEqual(values.username);
    expect(model.password).not.toEqual(values.password);
  });

  test('should fail to create another record with same username', async () => {
    const values = {
      username: 'johndoe',
      password: 'somerandompassword',
      email: 'johndoe@ex.com'
    };

    try {
      await models.user.create(values);
    } catch (e) {
      expect(e).not.toEqual(undefined);
    }
  });

  test('should fail to create another record with same email', async () => {
    const values = {
      username: 'mary',
      password: 'somerandompassword',
      email: 'johndoe@ex.com'
    };

    try {
      await models.user.create(values);
    } catch (e) {
      expect(e).not.toEqual(undefined);
    }
  });
});
