const data =[{id: 1, name:"abul", address:"kabul bari"}];
console.log(data[0].address);


const products = {
    count:5000,
    data:[
        {id: 1, name:"lanovo", prize:55000},
        {id: 2, name:"mackbook", prize:15000}
    ]
}
console.log(products.data[1].prize);

const user = {
    id: 5001,
    name: "Shoriful Raj",
    address:{
        street:{
            first:"54/1 uttora gulchan",
            second:"poribag Dhaka",
            third:"no dorai"
        },
        city:"Dhaka"
    }
}

console.log(user.address.street.second);







