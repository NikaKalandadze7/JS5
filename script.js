const data = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Charlie" },
  { id: 3, name: "David" },
  { id: 2, name: "Eve" },
];

const dataMap = new Map();

for (let i of data) {
  dataMap.set(i.id, i);
}
console.log(dataMap);
