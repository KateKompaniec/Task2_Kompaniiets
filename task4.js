// 1
class Worker {
  constructor(name, surname, rate, days ){
    this.name=name;
    this.surname=surname;
    this.rate= rate;
    this.days=days;
}
  getSalary(){
    const salary=this.rate*this.days; 
    return salary;
  }
}

const worker1=new Worker('Jacob', 'Smith', 100, 21);
console.log(worker1, worker1.getSalary());
const worker2= new Worker('Emma', 'Wilson', 135, 20);
console.log(worker2, worker2.getSalary());
console.log('Sum of two worker`s salary is: '+ (worker1.getSalary()+worker2.getSalary()));

//2
class MyString {
	constructor(str){
  	this.str=str;
  }
	reverse(){
		return this.str.split("").reverse().join("");
	}
	ucString(){
     return this.str.charAt(0).toUpperCase() + this.str.slice(1);
	}
	ucWords(){
  	return this.str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()});
  }
} 
 const str=new MyString('javaScript is a programming language that allows you to implement complex things on web pages.');
console.log(str.reverse());
console.log(str.ucString());
console.log(str.ucWords());

//3
class Validator{
isEmail(str){
const isEmail=/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
return isEmail.test(str);
}
isDomain(str){
const isDomain=/^https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.$/i;
return isDomain.test(str);
}
isPhone(str){
const isPhone= /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
return isPhone.test(str);
}
isDate(str){
const isDate=/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
return isDate.test(str);
}
}
const validEmail='jsfiddle@gmail.com'
const invalidEmail='.jsfiddle@gmail.com'

const validDomain='http://www.google.com'
const invalidDomain='http://www/google/com'

const validPhone='+38-(095)-111-1111'
const invalidPhone='++38-095-111-11-111'

const validDate='16.11.2021'
const invalidDate='16-11-23300'
 
 let validator= new Validator();
 console.log('Valid Email: '+validator.isEmail(validEmail)+' '+validator.isEmail(invalidEmail));
 console.log('Valid Domain: '+validator.isDomain(validDomain)+' '+validator.isDomain(invalidDomain));
 console.log('Valid Phone: '+validator.isPhone(validPhone)+' '+validator.isPhone(invalidPhone));
 console.log('Valid Date: '+validator.isDate(validDate)+' '+validator.isDate(invalidDate));
 
