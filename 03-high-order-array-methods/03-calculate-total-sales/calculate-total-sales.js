function calculateTotalSalesWithTax(products, tax) {
  let sum = 0;
  const basePrice = products.map((product) => product.price * product.quantity);

  basePrice.forEach((price) => sum += price);

  return sum+(sum*(tax*0.01));
}

console.log(
  calculateTotalSalesWithTax(
    [
      { name: "Apple", price: 0.5, quantity: 10 },
      { name: "Banana", price: 0.3, quantity: 20 },
      { name: "Orange", price: 0.6, quantity: 15 },
    ],
    8
  )
);
