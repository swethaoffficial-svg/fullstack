// ESG MODULE

let add=(a,b)=>{
    return a+b;
}
let subtract=(a,b)=>{
    return a-b;
}
let multiply=(a,b)=>{
    return a*b;
}
let findmax=(a,b)=>{
    if(a>b){
     return a;
    }else{
        return b;
    }
    let FindMin=(a,b)=>{
        if(a>b){
            return a;
        }
        else{
            return b;
        }
    }
}

console.log("hello");

export default add; // defalut export
export {subtract,multiply}// defalut export