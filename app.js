// CH#26-30
// 1. Write a program that takes a positive integer from user & display the following in your browser. 

// var numb =prompt("Enter a positive number :");
// // number 
// var a= Number(numb);
// // b. round off value of the number 
// var b=Math.round(a);
// // floor value of the number 
// var c=Math.floor(a);
// // d. ceil value of the number 
// var d=Math.ceil(a);
// document.write("Number :"+" "+a+"<br>"+"round off value :"+" "+b+"<br>"+"floor value :"+c+"<br>"+"ceil value:"+""+d);



// 2. Write a program that takes a negative floating point number from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number 
// var numb =prompt("Enter a negative floating number :");
// var a= Number(numb);
// var b=Math.round(a);
// var c=Math.floor(a);
// var d=Math.ceil(a);
// document.write("Number :"+" "+a+"<br>"+"round off value :"+" "+b+"<br>"+"floor value :"+c+"<br>"+"ceil value:"+""+d);


// 3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5 
 
// var a=-4;
// var b= Math.abs(a);
// document.write("The absolute value of -4 is :"+" "+b);

// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.: 


// var b=Math.random();
// var c=(b*6)+1;
// var d=Math.floor(c);
// document.write("Random dice value is :"+d);


// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser 



// var number=Math.random()*2 +1;
// var floor =Math.floor(number);
// if(floor===2){
//     document.write(floor+"<br>"+"Random coin value : Heads");
    
// }
// if (floor===1){
//     document.write(floor+"<br>"+"Random coin value : Tail");
// }


// 6. Write a program that shows a random number between 1 and 100 in your browser. 

// var num=(Math.floor(Math.random() * 100));
// document.write("random number between 1 and 100 :"+num);

// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms 


// var weight=prompt("Enter your weight in kilogram","weight");
// var a=Number(weight);
// document.write("The weight of user is :"+a+" "+" "+"Kilograms");


// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user. 

// var a=prompt("Enter a number 1 and 10:");
// var b=Number(a);
// var number=((Math.random()*10) +1);
// var floor =Math.floor(number);
// if(floor===a){
//     document.write("Congratulations!");
    
// }
// else{
//     document.write("Try Again!");
// }

//                              CH#31-3
// 1. Write a program that displays current date and time in your browser. 

// var a=new Date();
// document.write(a);

// 2. Write a program that alerts the current month in words. For example December. 
//  var new_date=new Date();
//  var m=["jan","feb","march","aprail","may","june","july","aug","sep","oct","nov","dec"];
//  var current_month= new_date.getMonth();
//  var this_month=m[current_month];
//  document.write("Current Month :"+""+this_month);

// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun. 

// var a=new Date();
// var days =["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
// var b=a.getDay();
// var today=days[b];
// document.write("Today is :"+today);


// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today. 

// var currentDate = new Date();
// currentDate.toString;
// var b = currentDate.toString();
// var c = b.slice(0,3);
// if (c === "Sat"){
//     document.write("It's Fun Day")
// }else if(c === "Sun"){
//     document.write("It's Fun Day")
// }else if(c === "Mon"){
//     document.write()
// }else if(c === "Tue"){
//     document.write()
// }else if(c === "Wed"){
//     document.write()
// }else if(c === "Thr"){
//     document.write()
// }else if(c === "Fri"){
//     document.write()
// }
// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. 



// var today = new Date();
//   var day = today.getDay();
//   var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
//   document.write("Today is : " + daylist[day] + ".");
//   var hour = today.getHours();
//   var minute = today.getMinutes();
//   var second = today.getSeconds();
//   var prepand = (hour >= 12)? " PM ":" AM ";
//   hour = (hour >= 12)? hour - 12: hour;
//   if (hour===0 && prepand===' PM ') 
//   { 
//   if (minute===0 && second===0)
//   { 
//   hour=12;
//   prepand=' Noon';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' PM';
//   } 
//   } 
//   if (hour===0 && prepand===' AM ') 
//   { 
//   if (minute===0 && second===0)
//   { 
//   hour=12;
//   prepand=' Midnight';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' AM';
//   } 
//   } 
// document.write("Current Time : "+hour + prepand + " : " + minute + " : " + second);

// 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate. 
// var d = new Date();
// d.setDate(12);
// document.write("Later Date :"+" "+d)
// Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser

// 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser. 
//  var today=new Date();
//  var a=today.getTime();
//  var my_birth=new Date(prompt("Enter your DOB","1day,xyzmonth,200xyear"));
//  var b=my_birth.getTime();
//  var c=a-b;
//  var age=Math.ceil(c/(1000*60*60*24*30*12));
//  alert("your age is :"+" "+age);







