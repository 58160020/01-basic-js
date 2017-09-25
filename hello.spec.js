const hello = require('./hello')

test('hello', () => {
  //Arrange
  let name = 'Nattanich'

  //Act
  let result = hello(name)

  //Assert
  expect(result).toBe('Hello Nattanich')
})
