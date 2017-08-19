const { createTables, dropTables } = require('../../utils/readSql');
const { sequelize } = require('../../utils/setup');
const models = require('../../../app/models');

beforeAll(async () => {
  await createTables(sequelize);
});

afterAll(async () => {
  await dropTables(sequelize);
});

describe('AccessToken Model test', () => {
  test('should create a record', async () => {
    const values = {
      username: 'johndoe'
    };

    const model = await models.accessToken.create(values);
    expect(model).toBeInstanceOf(Object);
    expect(model.username).toEqual(values.username);
  });
});
