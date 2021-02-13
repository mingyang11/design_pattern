function fun() {
  this.say = function() {
    console.log(124)
  }
}

// fun.prototype.say = function() {
//   console.log(124)
// }

const fn = new fun()
fn.say()