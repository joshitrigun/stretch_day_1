const str = (arr) => {
  return arr.split("").reverse().join("");
};

const newArr = process.argv.slice(2);
console.log(newArr);
for (let item of newArr) {
  console.log(str(item));
}
