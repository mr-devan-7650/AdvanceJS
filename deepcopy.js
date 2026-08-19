const information = {
    user: "devan",
    age: 22,
    Rollno: 48,
    address: {
        live: "sangamner",
        
    }
}


let new1 = {... information}

console.log(information);
console.log(new1);






let copy =JSON.parse(JSON.stringify(information))

copy.address.live = "pune"



console.log(information);
console.log(copy);








