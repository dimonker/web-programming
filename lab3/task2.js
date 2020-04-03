function sum() {
  return this.reduce((acc, curr) => acc + curr)
}

console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]))
