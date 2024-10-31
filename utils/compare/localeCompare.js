const fruits = ["banana", "Apple", "grapes", "AVOCADO", "Blueberry"];

console.log(fruits.sort());
// ['AVOCADO', 'Apple', 'Blueberry', 'banana', 'grapes']

const result = fruits.sort((a, b) => a.localeCompare(b));
console.log(result);
// [ 'Apple', 'AVOCADO', 'banana', 'Blueberry', 'grapes' ]

const numericResult = ["$10.00", "$2.00", "$100.00", "$45.00"].sort((a, b) =>
  a.localeCompare(b, "en", { numeric: true }),
);
console.log(numericResult);
// [ '$2.00', '$10.00', '$45.00', '$100.00' ]