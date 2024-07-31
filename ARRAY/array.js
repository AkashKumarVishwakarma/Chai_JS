//array 

/*
const myArr = [0,1,2,3,4,5]
console.log(myArr)
console.log(myArr.length)

const myHeros = ["Shaktimann","Ajay","Sunny"]
console.log(myHeros[1])
*/


// Another type to declare an Array

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[0]);


//Array Methods


// myArr2.push(6)
// myArr2.push(7)
// console.log(myArr2)
// myArr2.pop()
// console.log(myArr2)


// myArr2.unshift(0)
// console.log(myArr2)
// myArr2.shift()
// console.log(myArr2)



// console.log(myArr2.includes(4));
// console.log(myArr2.includes(9));
// console.log(myArr2.indexOf(9));
// console.log(myArr2.indexOf(3));

// console.log(myArr2)


// const newArr = myArr2.join()

// console.log(myArr2)
// console.log(typeof(myArr2))

// console.log(newArr)
// console.log(typeof(newArr))



// slice, splice

// console.log("A",myArr2);

// const myn1 = myArr2.slice(1,3)

// console.log(myn1)
// console.log("B",myArr2)




// console.log("C",myArr2);

// const myn2 = myArr2.splice(1,3)

// console.log(myn2)
// console.log("D",myArr2)


// Array next part ===============================================================

const marvel_heros = ["thor", "Ironman","spideram"]
const dc_heros = ["superman","flash","batman"]


// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][2])


// const allHeros = marvel_heros.concat(dc_heros)
// console.log(marvel_heros);
// console.log(allHeros);
// console.log(allHeros[5]);



// const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros)
// console.log(all_new_heros[4])


// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);






// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"}))  // interesting


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3))
