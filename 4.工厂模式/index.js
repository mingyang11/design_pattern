// 抽象工厂
class MobilePhoneFactory {
  creatOs() {
    throw new Error('抽线工厂中的方法只是用来定义的，不能实现，实现会报错')
  }
  createHardWare() {
    throw new Error('抽线工厂中的方法只是用来定义的，不能实现，实现会报错')
  }
}

// 具体工厂-创建Android系统，如果需要定义一个苹果操作系统则需要新建一个苹果的具体工厂
class FakeStarFactory extends MobilePhoneFactory {
  creatOs() {
    return new AndroidOs()
  }
  createHardWare() {
    return new AndroidHandleWare()
  }
}

// 具体工厂-创建Ios系统，如果需要定义一个苹果操作系统则需要新建一个苹果的具体工厂
class FakeIosFactory extends MobilePhoneFactory {
  creatOs() {
    return new AppleOs()
  }
  createHardWare() {
    return new AppleHandleWare()
  }
}




// 系统的抽象产品类，方法仅仅用来实现，不能实例化调用
class Os{
  controlOs() {
    throw new Error('这里是抽象产品类定义的方法，不能实例化调用')
  }
}

// 系统的具体产品类，可以实例化调用
class AndroidOs extends Os {
  controlOs() {
    console.log('这里是安卓的操作系统')
  }
}

class AppleOs extends Os {
  controlOs() {
    console.log('这里是IOS的操作系统')
  }
}





// 硬件的抽象产品类，方法仅仅用来实现，不能实例化调用
class HandleWare {
  controlHandleWare() {
    throw new Error('这里是抽象产品类定义的方法，不能实例化调用')
  }
}

// 硬件的具体产品类，可以实例化调用
class AndroidHandleWare extends HandleWare {
  controlHandleWare() {
    console.log('这里是安卓的硬件系统')
  }
}

class AppleHandleWare extends HandleWare {
  controlHandleWare() {
    console.log('这里是苹果的硬件系统')
  }
}

// 创建一个安卓系统的智能机器
const iQoo = new FakeStarFactory()
const androidOs = iQoo.creatOs()
const androidHandle = iQoo.createHardWare()
androidOs.controlOs()
androidHandle.controlHandleWare()

const iphone8p = new FakeIosFactory()
const ihoneOs = iphone8p.creatOs()
const iphoneHandle = iphone8p.createHardWare()
ihoneOs.controlOs()
iphoneHandle.controlHandleWare()