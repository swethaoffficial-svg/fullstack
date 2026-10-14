let example=()=>{
    console.log("hello from module");
}
let add=(a,b)=>{
    return a+b;
}
let sub=(c,d)=>{
    return c-d;
}
let mul=(a,b)=>{
    return a*b;
}
let div=(a,b)=>{
    return a/b;
}

module.exports={example,add,sub,mul,div};