//  percentage calculate
var math = +prompt("Enter You Math Marks");
var english = +prompt("Enter You english Marks");
var urdu = +prompt("Enter You urdu Marks");
var science = +prompt("Enter You science Marks");
var islamiat = +prompt("Enter You islamiat Marks");

if(math <= 100 && english <= 100 && urdu <= 100 && science <= 100 && islamiat <= 100 ){
    var StudentMarks = math + english + urdu + science + islamiat;
    var TotalMarks = 500;
    var percentage = StudentMarks * 100 / TotalMarks ;
    document.write(" Percentage : "+percentage + " % : ");
}else{
    alert("Please Enter less then 100 Marks");
}



if(percentage >= 80){
    document.write("Your Grade is A" )
}else
if(percentage >= 70){
    document.write("Your Grade is B" )
}else
if(percentage >= 50){
    document.write("Your Grade is C" )
}else
if(percentage >= 35){
    document.write("Your Grade is C" )
}else if(percentage < 35){
    document.write("You are failed  🙁" );
}



//  percentage calculator END

//  Array 

var Arr = ["Noman","Ali","Asim","Yaseer","Ameen"];

console.log(Arr[3]);

console.log(Arr);


Arr[8] = "Usman";

console.log(Arr);

Arr.push("Kasim"); // add On last index 

console.log(Arr);

Arr.pop() // It can remove 1 value from last index
Arr.pop() // 

console.log(Arr);

Arr.shift() // It can remove value from first index

console.log(Arr);

Arr.unshift("Asghar"); // it can add new value on first index

console.log(Arr); 
