const config = require('../../config');

test('config should be an object', () => {
  expect(config).toBeDefined();
  expect(config).toBeInstanceOf(Object);
});

test('config should have all required properties', () => {
  expect(config).toHaveProperty('host');
  expect(config).toHaveProperty('port');
  expect(config).toHaveProperty('database');
  expect(config).toHaveProperty('username');
  expect(config).toHaveProperty('password');
});
