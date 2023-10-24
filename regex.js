const  str = 'name'

//const regex = /name/

// const regex = /\d/
// * = 0 or repeated most times
// + = 1 or repeated most times
// ? = 0 or 1 time
// {n} = n times
// {n,z} = starting from n to z
// ^ = starts from
// $ = ends with 
// ^$ = matches starts with and ends with
// [0-9] = matches digits from 0 to 9 or combination of them
// \d = matches digits from 0 to 9 or combination of them
// [^0-9] = not from 0 to 9
// \D = not from 0 to 9
// [a-z] = from a to z
// [A-Z] = from A to Z
// [a-zA-Z] = from a to z and A to Z
// [^0-9a-zA-Z] = from 0 to 9, a to z and A to Z
const output = regex.test(str)

console.log(output);