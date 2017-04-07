var arrItems = items
// console.log(arrItems)

function logAll (x, prop) {
  x.forEach(function (x) {
    console.log(x[prop])
  })
}
// logAll(arrItems, 'price')

// calculate average price of all items.
var priceTotal = arrItems.reduce(function (acc, item) {
  acc += item.price
  return acc
}, 0)

var averagePrice = priceTotal / arrItems.length
console.log(averagePrice)
