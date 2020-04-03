const object1 = {
  name: "Boris",
  weight: 15
}

const object2 = {
  name: "Boris",
  weight: 15
}

const object3 = {
  name: "Rex",
  weight: 20
}

function isEquivalent(a, b) {
  var aProps = Object.getOwnPropertyNames(a)
  var bProps = Object.getOwnPropertyNames(b)

  if (aProps.length != bProps.length) {
    return false
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i]

    if (a[propName] !== b[propName]) {
      return false
    }
  }

  return true
}

console.log(isEquivalent(object1, object2)) // true
console.log(isEquivalent(object1, object3)) // false
