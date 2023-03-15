// Array
// let drinks = new Array();
// drinks[0] = "水";
// drinks[1] = "紅茶";
// drinks[2] = "綠茶";
// drinks[3] = "咖啡";
// console.log(drinks);

// let drinks = new Array("水","紅茶","綠茶","咖啡");
// console.log(drinks);

let drinks = ["水","紅茶","綠茶","咖啡"];c
// console.log(drinks);
// console.log(drinks[0]);
// console.log(drinks[1]);
// console.log(drinks[2]);
// console.log(drinks[3]);

// 陣列迭代
// for(let i = 0;i < drinks.length;i++){
//     console.log(drinks[i]);
// }

// for(let data in drinks){
//     console.log(drinks[data]);
// }

for(let data of drinks){
    console.log(data);
}