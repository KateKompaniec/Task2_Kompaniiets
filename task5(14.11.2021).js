// 1
const promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("Resolve");
    }, 3000);
});
promise1.then((result) => {
        console.log(result)
        }).catch((error)=>{
	console.log(error)})

// 2
const promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject("Reject");
    }, 3000);
});
promise2.then((result) => {
        console.log(result)
        }).catch((error)=>{
	console.log(error)})

// 3
let rand = Math.floor(Math.random()*10);
const promise3 = new Promise((resolve, reject) => {
setTimeout(() => {
if (rand >= 1 && rand <= 5)
resolve('Resolve')
else if (rand >= 6 && rand <= 10)
reject('Reject');
}, rand * 1000);
});

promise3.then(
result => console.log(result,rand),
error => console.log(error,rand)
);

// 4
let rand = Math.floor(Math.random()*2);
const promise3 = new Promise((resolve, reject) => {
setTimeout(() => {
if (rand == 0)
resolve('Resolve')
else
reject('Reject');
}, 5000);
});

promise3.then(
result => console.log(result)
).catch((error)=>{
	console.log(error)});

// 5
const seconds1= Math.floor((Math.random()*4)+1)
const promise1 = new Promise((resolve, reject) => {
setTimeout(() => {
resolve(seconds1)},seconds1*1000);
})
  const seconds2= Math.floor((Math.random()*4)+1)
const promise2 = new Promise((resolve, reject) => {
setTimeout(() => {
resolve(seconds2)},seconds2*1000);
})
const seconds3= Math.floor((Math.random()*4)+1)
const promise3 = new Promise((resolve, reject) => {
setTimeout(() => {
resolve(seconds3)},seconds3*1000);
})

Promise.all([promise1,promise2,promise3])
.then(result=>{ console.log(result)
	let sum=0
	for(let i=0;i<result.length;i++)
		{sum+=result[i]}
    console.log("Sum is "+sum)},reason=>{
console.log(reason)
})  
 // 5 var2
var promise= new Array(3);
for(let i=0; i<promise.length;i++){
const seconds1= Math.floor((Math.random()*4)+1)
 promise[i] = new Promise((resolve, reject) => {
setTimeout(() => {
resolve(seconds1)},seconds1*1000);
})
}
Promise.all(promise)
.then(result=>{ console.log(result)
	let sum=0
	for(let i=0;i<result.length;i++)
		{sum+=result[i]}
    console.log("Sum is "+sum)},reason=>{
console.log(reason)
})
