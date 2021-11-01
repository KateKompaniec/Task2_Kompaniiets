
// ЦИКЛЫ
//1
var arr=[1,2,3,4,5];
for(let index in arr)
console.log(arr[index]);

//2
for(let i=2;i<=100;i++){
if(i%2==0)
console.log(i);
}

//3.1
let arr=new Array(100);
let result=0;
for(let i=0;i<=100;i++){
arr[i]=i;
result+=arr[i];
}
console.log(result);

//3.2
const employees = [
   {
       name: 'Sam',
       salary: 100
   }, {
       name: 'John',
       salary: 300
   }, {
       name: 'Pier',
       salary: 400
   }, {
       name: 'David',
       salary: 2020
   }, {
       name: 'Jonathan',
       salary: 400
   }, {
       name: 'Deny',
       salary: 2200
   }, {
       name: 'Ken',
       salary: 500
   }, {
       name: 'Samantha',
       salary: 100
   }, {
       name: 'Mag',
       salary: 270
   },
 
]
for( const key in employees){
console.log('Employee name: '+ employees[key].name +'\n employee sallary: ' + employees[key].salary);
}

//4-5
let arr=new Array(100);
let sum=0, nString=String();
for(let i=1;i<=100;i++){
arr[i]=i;
nString+=String(-arr[i]);
if(arr[i]>0)
sum+=arr[i];
}
console.log(sum);
console.log(nString);

// ФУНКЦИИ
//1
function pow3 (base){
let number=Math.pow(base,3);
return number;
}
let base= prompt('Enter a base number: ');
console.log(pow3(base));

//2
function isNumberInRange(number){
if(number>0 && number< 10)
return true;
else return false;
}
let number= prompt('Enter a number: ');
console.log(isNumberInRange(number));

//3
function pow2 (base){
let number=Math.pow(base,2);
return number;
}
let base= prompt('Enter a base number: ');
console.log(pow2(base));

//4
function func(a,b,c){
let calc=(a-b)/c;
return calc;
}
let first= prompt('Enter a first number: ');
let second= prompt('Enter a second number: ');
let third= prompt('Enter a third number: ');
console.log(func(first,second,third));

//5
function isEven(number){
if(number%2==0)
return true;
else return false;
}
let number= prompt('Enter a number: ');
console.log(isEven(number));

//6
let arrayDaysOfWeek=[
'Понедельник',
'Вторник',
'Среда',
'Четверг',
'Пятница',
'Суббота',
'Воскресенье'
];
function getDayOfWeek(day){
if (day>=1 && day<=7)
return alert('Да это же '+arrayDaysOfWeek[day-1]+'!');
else return alert('В неделе 7 дней, не забываем!')
}
let day= prompt('Какой день недели вас интересует? (от 1 до 7) ');
getDayOfWeek(day);

//7
let str='123456789';
let arrStr= str.split('');
console.log(str);
function swapString(str){
let copyStr=new Array();
for(let i=0; i<str.length;i++){
if(i%2==0){
copyStr[i]=str[i+1];
copyStr[i+1]=str[i];
}
}
return copyStr;
}
console.log(swapString(arrStr).join(''));


