// console.log("Hello I m the boss")
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(10,20));
// function sqrt_sum(a,b){
//     return Math.sqrt(a)+Math.sqrt(b);
// }
// console.log(sqrt_sum(100,400));
// const sum=(a,b)=>{a+b};
// console.log(sum(1,2));

// (()=>{
//     console.log("Heyyyy")
// }
// )();
// var a=23;
// var b="Maa"
// console.log(typeof b);
// if(a<40)
// {
//     var a=40;
//     console.log("value of a inside block= +a")
// }
// console.log("Value of a outside block"+a)
// // Callback
// function sum(a,b){
//     return a+b;
// }
// function msgWithSum(clbk,msg){
//     const result=clbk(40,50);
//     console.log("HI, "+msg+" your result is = "+ result)
// }
// msgWithSum(sum,"Rahul")
function login(error,msg){
    if(error){
        console.log("Error is "+error)
    }
    else{
        console.log(msg)
    }
}
function loginHantler(username,password,clbk){
    if(username=="rudraksh029" && password=="12345"){
        clbk(null,"Login success")

    }
    else{
        clbk("username or password is incorrect")
    }
}
loginHantler("rudraksh029","12345",login)
loginHantler("rudraksh29","12345",login)
loginHantler("rudraksh029","1234",login)
console.log("one")
setTimeout(()=>{console.log("Two")},1000)

console.log("three")