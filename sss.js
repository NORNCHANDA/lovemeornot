let list1 = [1, 1, 2, 6, 9, 2, 3, 3];
let list2 = list1.map( (x)=> x*x );
console.log(list2);
let numbers = list1.map((x)=>"number "+x);
console.log(numbers);   

var leave_action = 'APPROVEs';
if(leave_action !== 'APPROVE' || leave_action !== 'REJECT'){
    console.log("not equal");
}else
{
    console.log("equal");
}