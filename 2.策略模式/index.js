const priceSolter = {
  pre: (price) => {
    if (price >= 100) {
      return price - 20;
    }
    return price * 0.9;
  },
  onSale(originPrice) {
    if (originPrice >= 100) {
      return originPrice - 30;
    }
    return originPrice * 0.8;
  },
  back(originPrice) {
    if (originPrice >= 200) {
      return originPrice - 50;
    }
    return originPrice;
  },
  fresh(originPrice) {
    return originPrice * 0.5;
  },
}

// 查询函数
function searchPrice(tag, originPrice) {
  return priceSolter[tag](originPrice)
}

priceSolter.newUser = (price) => {
  if(price >= 100) {
    return price - 50
  }
  return price * 0.1
}

console.log(searchPrice("onSale", 170))
console.log(searchPrice('pre', 170))
console.log(searchPrice('newUser', 90))