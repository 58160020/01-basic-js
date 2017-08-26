const hello = require('./hello')

test('hello', () => {
  //Arrange
  let name = 'Mook'

  //Act
  let result = hello(name)

  //Assert
  expect(result).toBe('Hello Mook')
})
