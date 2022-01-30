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

  
