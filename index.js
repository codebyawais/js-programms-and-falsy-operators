// // let nIs =10;
// //  nIs=nIs -1;
// //  console.log(nIs);
// // output is 9


// // let nIs =10;
// //  nIs=--nIs;
// //  console.log(nIs);
// // 9





// //  let nIs =10;
// //  nIs-- ;
// //  console.log(nIs);
//  // 9 



// //  let nIs =10;
// //  nIs++ ;
// //  console.log(nIs);
//  // 11
 
 


// //  let nIs =10;
// //  --nIs ;
// //  console.log(nIs);
//  // 9 



// //   let nIs =90;
// //  nIs++ ;
// //  x=nIs
// //  console.log(x);
//  // 90  ???



// //   let nIs =10;
// //  nIs= nIs +3 ;
// //  console.log(nIs);
//  // 13 

 
// //  let nIs =10;
// //  nIs= nIs -3 ;
// //  console.log(nIs);
//  // 7 



// //  let nIs =10;
// //  nIs += 2 ;
// //  console.log(nIs);
//  // 12

// //  let nIs =10;
// //  nIs -= 2 ;
// //  console.log(nIs);
// //  8


// //  let nIs =10;
// //  nIs *= 2 ;
// //  console.log(nIs);
// //  20



// //  let nIs =10;
// //  nIs *= 2 ;
// //  console.log(++nIs);
// //  21

// //  let nIs =10;
// //  nIs *= 2 ;
// //  console.log(nIs--);

// //  console.log(nIs);
 
// //  10  ???



// // let n1 = 5;
// // let n2 =5;
// // console.log(n1  === true);


// // let myObj  = {
// //     name:'awais',
// //     age:'22',
// //     deg:'bscs',
// //     city:'fsd',
// //     rollno:'01',
// //     semester:'7th'
// // }
// // // console.log( myObj);
// // console.log( myObj.name, " has ",myObj.age, "years old " );
// // console.log( "I am a student of ",myObj.deg, "having " ,myObj.semester, "semester under the roll number of ",myObj.rollno, );



// //objects can be declare TWO METHODS ONE IS LITERAL AND OTHER IS CONSTRUCTOR
// //sINGLETON : WHEN MAKE A CONSTUCTOR IT MEANS IT is a single type object Only single instance 
// // eg: Object.create
// // objects has two things one is keys and 2nd is values
// // key: name age etc all are bydefault strings

// //object literals
// // const mySym = Symbol("key1")
// // const jsUser = {
// //     name:"awais",
// //     "fullname":"awais rafiq",
// //     // [mySym] : "mykey1",
// // //    "mySym" : "key1", 
// //     age:20,
// //     email: "codebyawais@gmail.com",
// //     isLoggedIn:false,
// //     lastLoginDays: ["monday", "saturady"]  

// // }
// // console.log(jsUser.email);
// // console.log(jsUser["email"]);
// // console.log(jsUser["fullname"]);
// // console.log(typeof jsUser.mySym);
// // console.log( jsUser[mySym]);

// // jsUser.email ="gpt.com"
// // Object.freeze(jsUser)
// // jsUser.email="aaaaaa.com"/
// // console.log(jsUser);


// // jsUser.greeting = function(){
// //     console.log("hello jsuser"); 
// // }
// // jsUser.greetingtwo = function(){
// //     console.log(`hello jsuser ${this.name}` ); 
// // }

// // console.log(jsUser.greeting());
// // console.log(jsUser.greetingtwo());






// // objects singleton/constructor 
// // const tinderUser = new Object ()
// //non signletonobject
// // const tinderUser ={}
// // tinderUser.id = "123abc"
// // tinderUser.name ="faizan"
// // tinderUser.isLoggedIn=false

// // // both are internal same
// // console.log(tinderUser);

// const regularUser ={
//     email:"awais@gmail.com",
//     fullname:{
//         userfullname:{
//         firstname:"awais",
//         lastname:"bhatti",
//         }
//     }
     
    
// }
// // console.log(regularUser);
// // console.log(regularUser.fullname);
// // console.log(regularUser.fullname.userfullname.lastname);



// const obj1 ={1:"a", 2:"b"}
// const obj2 ={3:"a", 4:"b"}
// const obj4 ={5:"a", 6:"b"}
// const obj5 ={7:"a", 8:"b"}
// // const obj3 ={ obj1,obj2}
// // problem like a array all value etc can execute eg:aray me array and object me object
// // {} target value , obj1 obj2 source values
// // const obj3 =Object.assign({},obj1,obj2,obj5)
// // spread the object
// // const obj3 = {...obj1, ...obj4}
// // console.log(obj3);

// // const user =[
// // {
// //     id:1,
// //     email:"gpt@mial.com"
// // },
// // {
// //     id:1,
// //     email:"gpt@mial.com"
// // },
// // {
// //     id:1,
// //     email:"gpt@mial.com"
// // },
// // {
// //     id:1,
// //     email:"gpt@mial.com"
// // },
// // ]
// // user[1].email
// // console.log(Object.keys(tinderUser));
// // console.log(Object.values(tinderUser));
// // console.log(Object.entries(tinderUser));
// // console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// // console.log(tinderUser);


// //Object
// // const awais ={
//     //age:23,
//     //isLoggedIn:true,

// //}
// // console.log(awais);
// //complete object execute
// // console.log("awais");
// // only awais can be execute bcz awais in a string


// // Array
// // const myarray=["this", "is", "an", "array"]
// // console.log(myarray);
// // to comoplete array can be execute
// // console.log(myarray[3][3]);
// //why can as it is execute 9
// // console.log(myarray[9]);
// //it can be undefined


// // array of objects
// // let sections = [
// //      {name:"awais"},
// //      {age:23},
// //      {height:"sevenn", class :"bscs"} 
// //     ]
// // console.log(sections[2]);
// // console.log(sections[2].class);






// // objects of array
// let semesters = { bscs : [{ name : "aws" , class : 12} , { name : 'dilawar' ,
//  class: { bscs : [{ name : "aws" , class : 12} , { name : 'dilawar' , class: 13}] ,
//  bba :  [ "c1" , "c2" , "c3" , "c7" , "c890" ]}}] , bba :  [ "c1" , "c8" , "c3" , "c7" , "c890" ]}
// // // bba c2 can be get
// //  console.log(semesters);
// //  console.log(semesters.bba[1]);


// let degre ={bscs:[{name:"awais",class:"bscs"},{name:"daniyal", class: [{name:"ahsan",class:"bscs"}] }   ]}
// // console.log(degre.bscs);
// // console.log(degre.bscs[0].name);
// // console.log(degre.bscs[1] .class);



// // function method1 
// // function add (number){
// //     // console.log(  5*2-9*false);
// //     console.log(5 + 6 -3 * 2);
    
// // }
// // add(5+6)
// // method2
// const newadd=(n1,n2,n3)=>{
// console.log(n1 + n2 +n3);
// }
// let x=5,y=5
// newadd(6,8,y)




// // today work

































































// // 22-9-23
// // let myArray = [
// //        {name:'awais',class:"bscs"} ,
// //       {name:'ahmad',class:"bba"} ,
// //       {name:'ahad',class:"base"}
// //     ]
// //     let requiredStudent;
// //     console.log("before: ", requiredStudent);
    

// //     // myArray.map((item)=>{console.log(item.name );
// //     myArray.map((item)=>{ 

// //         if(item.name === "ahmad") {requiredStudent = item.name }
// //     }) 
// //     console.log("after: ", requiredStudent);
  

//     //even nmbr
// // let myArray =[
// //     {n:1 },
// //     {n:2 },
// //     {n:3 },
// //     {n:4 },
// //     {n:5 },
// //     {n:6 },
// //     {n:7 },
// //     {n:8 },
// // ]
// // myArray.map((item)=>{
// //     if(item.n  % 2 == 0 ) 
// //     { 
// //         for(let x =1; x < 5; x++){
// //             console.log(`${item.n} * ${x} = ${item.n * x}`);
            
// //         }

        
// //     }
// // });



// //od number
// // let myArray =[
// //     {n:1 },
// //     {n:2 },
// //     {n:3 },
// //     {n:4 },
// //     {n:5 },
// //     {n:6 },
// //     {n:7 },
// //     {n:8 },
// // ]
// // myArray.map((item)=>{
// //     if(item.n  % 2 !== 0 ) 
// //     { 
// //         for(let x =1; x < 5; x++){
// //             console.log(`${item.n} * ${x} = ${item.n * x}`);
// //         }        
// //     }
// // });


// // let empArray = [
// //     { name:"awais", religion:"islam1", status:"unmarried", age:16 },
// //     { name:"ahsan", religion:"islam1", status:"unmarried",age:14 },
// //     { name:"faizan", religion:"islam", status:"married",age:19 },
// //     { name:"kokhar", religion:"islam1", status:"unmarried",age:16 },
// //     { name:"wahid", religion:"islam", status:"married",age:19 }
// // ]
// // let newArray;
// // console.log("before :: ", newArray);

// // empArray.map((item)=>{
// //     if(item.religion === "islam" && item.status === "married" &&  item.age >= 18 ) {newArray = item.religion && item.age && item.status}
// //         console.log(item);

// // });
// // console.log("after ::", newArray);








// // let empArray = [
// //     { name:"awais", religion:"islam1", status:"unmarried", age:16 },
// //     { name:"ahsan", religion:"islam1", status:"unmarried",age:14 },
// //     { name:"faizan", religion:"islam", status:"married",age:19 },
// //     { name:"kokhar", religion:"islam1", status:"unmarried",age:16 },
// //     { name:"wahid", religion:"islam", status:"married",age:19 }
// // ];

// // let newArray = []; // Initialize newArray as an empty array
// // console.log("before :: ", newArray);

// // empArray.map((item) => {
// //     if (item.religion === "islam" && item.status === "married" && item.age >= 18) {
// //         newArray.push(item); // Push the entire object to newArray
// //     }
// //     console.log(item);
// // });

// // console.log("after ::", newArray ,"congrats you can go  to umrah");


// // array in youtube


// let  myArr =[0,1,2,3,4,5]
// const myHeros = ["awais" , "rafiq"]
// const myArr2 = new Array (1,2,3,4)
// // console.log(myArr.length);
// // console.log(myArr[9]);

// // array methods
// // myArr.push(6)
// // console.log(myArr);
// // myArr.push(8)
// // console.log(myArr);

// // pop can remove the last value of array
// // myArr.pop()

// // unshif can add the start of the value in array
// // myArr.unshift(9)
// // myArr.shift()


// // console.log(myArr.includes(9));
// //false

// // console.log(myArr.includes(3));
// //true
// //console.log(myArr.indexOf(61));
// //console.log(myArr.indexOf(51));
// //console.log(myArr.indexOf(9));
// //-1

// // join canconvert the value of string
// // const newArr = myArr.join()
// // console.log(myArr);
// // console.log(typeof newArr);



// // slice splice
// // console.log("a", myArr);
// // const myn1 = myArr.slice(1, 3)
// // console.log(myn1);
// // console.log("b", myArr);
  

// // const myn2 = myArr.splice(1, 3)

// // console.log("c", myArr);
// // console.log(myn2);



// // const me_hero = ["awais","asad","ali" ]
// // const dc_hero = ["kokhar" , "bhatti","jutt"]
// // me_hero.push(dc_hero)
// // console.log(me_hero);
// // console.log(me_hero[3][1]);

// // const allhero= me_hero.concat(dc_hero)
// // console.log(allhero);
// // 
// // const allnewhero = [...me_hero, ...dc_hero]
// // console.log(allnewhero);

// // const anotherArr =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// // const real= anotherArr.flat(Infinity)
// // console.log(real);
// // console.log(Array.isArray("awais"));
// // console.log(Array.from("awais"));
// // console.log(Array.from({name:"awais"}));//no conver directly 

// // let score1 = 100
// // let score2 = 200
// // let score3 = 300
// // console.log(Array.of(score1, score2, score3));












// // task for today 27-9-2024
// // const fruits = 'apple' ;
// // let upperCase =fruits.toUpperCase();
// // console.log(upperCase);

// // const fruits = 'APPLE' ;
// // let lowerCase =fruits.toLowerCase();
// // console.log(lowerCase);

// // const fruits = ["apple", "banana", "mango" ];
// // // let upperCase= fruits.map(fruits=>fruits.toUpperCase())
// // let upperCase=fruits.map(item=>item.toUpperCase())
// // console.log(upperCase);

// const fruits = ["apple", "Banana", "mango", "APPLE"];
// let upperCaseFruits = [];

// // for (let i = 0; i < fruits.length; i++) {
// //     let fruit = fruits[i];

// //     if (fruit === fruit.toLowerCase()) {
// //         upperCaseFruits.push(fruit.toUpperCase()); 
// //         console.log("U");
        
// //     } else {
// //         upperCaseFruits.push(fruit);
// //     }
// // }
// // console.log(upperCaseFruits); 



// const vagetables = ["allo","toamto","brings","moLI","123"];
// const upperCase = [];
// for(let i=0;i<vagetables.length; i++){
//     let vegtbl=vagetables[i];
//     // if(vegtbl === vegtbl.toLowerCase()){
//     //     upperCase.push(vegtbl.toUpperCase());
//     // }else{
//     //     upperCase.push(vegtbl);
//     // }
//  (vegtbl === vagetables[i]? upperCase.push(vegtbl.toUpperCase()): upperCase.push(vegtbl) )
// }
// console.log(upperCase);




// // question number 2
// // const people=[
// //     {name:"awais", age:20},
// //     {name:"asad", age:21},
// //     {name:"ali", age:22},
// //     {name:"ahmad", age:23},
// //     {name:"faizan", age:23},
// //     { age:23},
// // ]
// // const newArr=people.map(person => person.name ? person.name: 'noname')
// // console.log(newArr);



// // const people=[
// //     {name:"awais", age:20},
// //     {name:"asad", age:21},
// //     {name:"ali", age:22},
// //     {name:"ahmad", age:23},
// //     {name:"faizan", age:23},
// //     { age:23},
// // ]
// // const newArr=people.map((item)=>{
// // if(item.name){
// //    return item.name;
// // }else{

// //    return "no name";
// // }
// // })

// // console.log(newArr);








// // map yahoobaba
// // let a= [1,3,5,8,10];
// // a.map(function(){
// //     Statement
// // });

// // let ary =[11,4,9,16];
// // let b = ary.map(test);
// // function test (x){
// //     return x * 10;
// // }
// // console.log(b);

// // let ary = [
// //     {fname:"awais", lname:"rafiq"},
// //     {fname:"ahsan", lname:"jutt"},
// //     {fname:"faizan", lname:"rana"},
// //     {fname:"daniyal", lname:"farooq"},
// // ]
// // let b = ary.map(test)
// // console.log(b);
// // function test(x) {
// //     return x.fname + " "+ x.lname 
// // }


// // 26-09-2024

// // let myArray=[
// //     {name:"awais",age:22 },
// //     {name:"ahsan",age:21 },
// //     {name:"saad",age:26 },
// //     {name:"rana",age:23 },
// //     {name:"doctor",age:25 },
// // ];
// // let requiredStudent;
// // console.log("before :: ", requiredStudent);
// //  myArray.map((item)=>{ if (item.name === "awais") { requiredStudent=item.name} })

// // console.log("after ::", requiredStudent);


// // for(let i=0; i<3; i++){
// //     console.log("5" ,"*" , i, "=" ,5*i);
// // }
// // for(let i=1; i<=3; i++){
// //     console.log("i value" ,i);
// //     for(let j=1; j<=3; j++){
// //  j!=i && console.log("j value ",j);
        
// //     }
// // }



// // let val = "tit";
// // val && console.log(" no null");

// // let user = '';
// // (user)&&console.log("not user");






// // gpt q:1
// // const numbers = [1, 2, 3, 4];
// // const doubled = numbers.map(num => num * 2);
// // console.log(doubled);  // Output: [2, 4, 6, 8]

// // let num1 =[1,2,3,4];
// // let num2= num1.map(num=>num*2);
// // console.log(num2);
 
// // let num1 =[1,2,3,4];
// // let num2= num1.map((num)=>{return num*2});
// // console.log(num2);

// // let num1 = [1,2,3,4];
// // function multiplyByTwo(num){
// //     return num*2;
// // }
// // let num2 = num1.map(multiplyByTwo);
// // console.log(num2);
// // let num1 = [1,2,3,4];
// // let num2 = num1.map(multiplyByTwo);

// // function multiplyByTwo(num){
// //     return num*2;
// // }
// // console.log(num2);

// // let num1 = [1, 2, 3, 4];
// // let num2 = num1.map(function(num) {
// //   return num * 2;
// // });
// // console.log(num2); // Output: [2, 4, 6, 8]

// // let num1 =[1,2,3,4];
// // let double= num => num * 2;
// // let num2 = num1.map(double)
// // console.log(num2);




// // question number two
// // convert  a array to upper case 
// // let fruits =["apple","banana","mango","AmROod"]
// // let upperCase = fruits.map((upperCase)=>{return upperCase.toUpperCase()})
// // console.log(upperCase);


// // const people = [
// //     { name: 'Alice', age: 25 },
// //     { name: 'Bob', age: 30 },
// //     { name: 'Charlie', age: 35 }
// // ];
// // let names =people.map((item)=>{return item.name} )
// // console.log(names);
// // const names = people.map(person => person.name);
// // console.log(names);  // Output: ['Alice', 'Bob', 'Charlie']


// // squar of number
// // let num =[1,2,3,4];
// // let num2 = num.map((item)=>{return item ** 2} )
// // console.log(num2);


// // length of string
// // const words = ['hello',"213424", 'world', 'JavaScript'];
// // let lenghts=words.map((item)=>{return item.length})
// // console.log(lenghts);


// // formatting username

// // const names = ['JohNN Doe', 'Jane Smith', 'Emily Davis'];
// // const usernames = names.map(name => name.toUpperCase().replace(' ', '_'));
// // console.log(usernames);  // Output: ['john_doe', 'jane_smith', 'emily_davis']

// // let names= ["awais","Ahsan","daniyal"];
// // let username=names.map((item)=>{return item.toLowerCase().replace("a","A")})
// // console.log(username);

// // Task: Increment the age of each person in an array of objects.
// // const people = [
// //     { name: 'Alice', age: 25 },
// //     { name: 'Bob', age: 30 },
// //     { name: 'Charlie', age: 35 }
// // ];
// // let upDateAges = people.map((item)=>{return item.age + 1 });
// // console.log(upDateAges);

// // const people = [
// //     { name: 'Alice', age: 25 },
// //     { name: 'Bob', age: 30 },
// //     { name: 'Charlie', age: 35 }
// // ];
// // const updatedAges = people.map(item=>({...item, age:item.age + 1 }))
// // console.log(updatedAges);



// // const data = ['apple', undefined, 'banana', undefined, 'mango'];
// // const cleanedData = data.map(item => item === undefined ? 'no name' : item);
// // console.log(cleanedData);  // Output: ['apple', 'no name', 'banana', 'no name', 'mango']

// // const users = [
// //     { id: 1, profile: { city: 'New York' } },
// //     { id: 2, profile: { city: 'Los Angeles' } },
// //     { id: 3, profile: { city: 'Chicago' } }
// // ];
// // const cities = users.map(user => user.profile.city);
// // console.log(cities);  // Output: ['New York', 'Los Angeles', 'Chicago']


// // const employe = [
// //     {id:1, profile:{city:"fsd"}},
// //     {id:2, profile:{city:"lahore"}},
// //     {id:3, profile:{city:"islamabad"}},
// //     {id:4, profile:{city:"samundari"}},
// // ]
// // let cities=employe.map((item)=>{return "the  empolye of " +item.profile.city  })
// // console.log(cities);
// // let cities=employe.map((item)=>{return "the  empolye of id is " +item.id +" the city is "+ item.profile.city  })
// // console.log(cities);




// // const numbers = [1, 2, 3, 4];
// // const stringNumbers = numbers.map(num => num.toString());
// // console.log(stringNumbers);  // Output: ['1', '2', '3', '4']


// //no string can be convert in num
// // let string = ["awais","ahsan","daniyal"];
// // let stNum= string.map((item)=>{return Number(item) })
// // console.log(stNum);

// //here string can be convert into number 
// // let string = ["10", "20", "30"];
// // // let stNum = string.map((item) => Number(item));
// // let stNum = string.map((item)=>{return Number(item)})
// // console.log(stNum); // Output: [10, 20, 30]




// // Convert each name to its string length:

// // let string = ["awais", "ahsan", "daniyal"];
// // let stNum = string.map((item) => item.length);
// // console.log(stNum); // Output: [5, 5, 7]




// // Problem 11: Creating a Price List
// // Task: Create a new array containing prices with tax applied.





// // let prices = [100,200,300];
// // let priceWithTax=prices.map((item)=>{return item*1.2 }) //20% tax
// // let priceWithTax=prices.map((item)=>{return item*1.5 }) 50% tax
// // console.log(priceWithTax);


// // Problem 12: Converting Temperatures
// // Task: Convert an array of temperatures from Celsius to Fahrenheit.

// // let celsius = [0,20,30];
// // // let fahrenheit =celsius.map((item)=>{return item*9/5 +32 }) 
// // let fahrenheit =celsius.map((item)=>{return (item*9/5 +32) }) 
// // console.log(fahrenheit);


// // Problem 13: Capitalizing First Letter
// // Task: Capitalize the first letter of each string in an array.


// // const names = ['john', 'jane', 'doe'];
// // // const capitalizedNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
// // let capitalizedNames = names.map((item)=>{return (item.charAt(0).toUpperCase() + item.slice(1)) })

// // //to complete name change in uppercase
// // // let capitalizedNames= names.map((item)=>{return (item.toUpperCase())})
// // console.log(capitalizedNames);  // Output: ['John', 'Jane', 'Doe']




// // const names = ['John', 'Jane', 'Doe'];
// // let unCapitalizedNames=names.map((item)=>{return(item.charAt(0).toLowerCase() + item.slice(1) )})
// // console.log(unCapitalizedNames);  // Output: ['John', 'Jane', 'Doe']

// // Problem 14: Extracting Initials
// // Task: Create an array of initials from names
// // const fullNames = ['John Doe', 'Jane Smith', 'Emily Davis'];
// // // let  initials = fullNames.map((item)=>{return(item.split(' ').map(n=>n.charAt(0)).join('') )})
// // let     initials = fullNames.map((item)=>{return(item.split(' ')
// //     .map((n)=>n.charAt(0)).join('')
// // )})
// // // const initials = fullNames.map(name => name.split(' ').map(n => n.charAt(0)).join(''));
// // console.log(initials);  // Output: ['JD', 'JS', 'ED']


