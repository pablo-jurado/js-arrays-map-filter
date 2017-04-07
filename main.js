var arrItems = items

// calculate average price of all items.
var priceTotal = arrItems.reduce(function (acc, item) {
  acc += item.price
  return acc
}, 0)

var averagePrice = priceTotal / arrItems.length
console.log('The average price is ' + averagePrice)


// array of items that cost between $14.00 and $18.00 USD
var arrItems14and18 = arrItems.filter(function (item) {
  return (item.price >= 14 && item.price <= 18)
})

console.log('Items that cost between $14.00 USD and $18.00 USD:')
arrItems14and18.forEach(function (item) {
  console.log(item.title, item.price)
})
