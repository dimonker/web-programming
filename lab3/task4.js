function User(name) {
  this.name = name
}

User.prototype.getName = function() {
  return this.name
}

const me = new User("Rex")

console.log(me.getName()) // Rex

console.log(Object.prototype === User.prototype)
console.log(me.__proto__ === User.prototype)
