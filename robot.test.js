const createRobot= require("./robot")

test("ejecuta createRobot ", () => {
  expect(() => createRobot(1,9)).not.toThrow()
})
test("muestra el movimento moveUp",()=>{
  const mv=createRobot(1,9)
  expect(mv.moveUp()).toBe(10)
})
test("muestra un error al hacer moveUp",()=>{
  const mv=createRobot(1,10)
  expect(mv.moveUp()).toBe("error")
})

