const singleTon = function(name) {
    this.name=name
}
singleTon.instance = null

singleTon.prototype.getName = function() {
    console.log(this.name)
}

singleTon.getInstance = function(name) {
    if(!this.instance) {
        this.instance = new singleTon(name)
    }
    return this.instance
}

const single1 = singleTon.getInstance('杨')

const single2 = singleTon.getInstance('明')

console.log(single1, single2, single1 === single2)