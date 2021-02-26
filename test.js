// var name = 'Nicholas';
// console.log(name);
// if(true) {
//     var name = 'Matt';
//     console.log(name);
// }
// console.log(name);

// let age = 30;
// console.log(age);
// if(true) {
//     let age = 26;
//     console.log(age);
// }
// console.log(age);

// for(let i=0; i<5; ++i){
//     console.log(i);
// }
// console.log(i);

for(var i=0; i<5; ++i){
    setTimeout(()=>console.log(i),0);
}

for(let i=0; i<5; ++i){
    setTimeout(()=>console.log(i),0);
}