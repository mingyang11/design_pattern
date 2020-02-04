// let singleTon = function(name) {
//   this.name = name
// }

// singleTon.instance = null
// singleTon.prototype.getName = function() {
//   console.log(this.name)
// }

// singleTon.getInstance = name => {
//   if (!this.instance) {
//     this.instance = new singleTon(name)
//   }
//   return this.instance
// }

// let a = singleTon.getInstance('yang')
// let b = singleTon.getInstance('ming')
// console.log(a)
// console.log(b)
// console.log(a === b)

const user = (function() {
  let name = 'yang',
    age = 28

  return {
    getUserInfo: function() {
      return name + '_' + age
    }
  }
})()

console.log(user.getUserInfo())
