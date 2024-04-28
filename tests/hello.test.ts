import { sayHi } from '../src/hello';

test('Hello world with sayHi', () => {
  expect(sayHi()).toBe('Hello world!');
});