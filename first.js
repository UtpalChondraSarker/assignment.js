
// var currentBill=1450 ;
// var gasBill=1800;
// var waterBill=700;
// var telephoneBill=5000;
// var internetBill=500;
// var tvBill=250;

// if(currentBill<1 && currentBill<=400){
//     var newCurrentBill=currentBill+5;
//    console.log(`Current Bill: ${newCurrentBill} tk /=`);
// }
// else if(currentBill<=4001 && currentBill<1500){
//     var newCurrentBill=currentBill+10;
//     console.log(`Current Bill: ${newCurrentBill} /=`);
// }
// else if(currentBill<=1501 && currentBill<5000){
//     var newCurrentBill=currentBill+15;
//     console.log(`Current Bill: ${newCurrentBill} /=`);
// }
// else{
//     var newCurrentBill=currentBill+25;
//    console.log(`Current Bill: ${newCurrentBill} /=`);
// }

// /* GasBill,waterBill, telephoneBill */

// //GasBill
// if(gasBill<=1800){
//     var newGasBill=gasBill+gasBill*(1/100);
//     console.log(`Gas Bill: ${newGasBill}  /=`);
// }
// else{
//     var newGasBill=gasBill+ (gasBill*(1/100));
//     newGasBill=gasBill+30;
//     console.log(`Gas Bill: ${newGasBill}  /=`);
// }

// //water

// if(waterBill<=700){
//     var newWaterBill=waterBill+waterBill*(1/100);
//     console.log(`water Bill ${newWaterBill}  /=`);
// }
// else{
//     var newWaterBill=waterBill+(waterBill*(1/100));
//         newWaterBill=waterBill+30;
//     console.log(`water Bill: ${newWaterBill}  /=`);
// }

// // telephoneBill

// if(telephoneBill<=5000 ){
//     var newTelephoneBill=telephoneBill*(1/100)<=30;
//     var totalTelephoneBill=telephoneBill+30;
//     console.log(`Telephone Bill: ${totalTelephoneBill}  /=`);
// }
// else{
//     var totalTelephoneBill=telephoneBill+(telephoneBill*(1/100));
//     console.log(`Telephone Bill: ${totalTelephoneBill} /=`);
// }


// //internet bill
// var internetBillFree=0;
// if(internetBill<=500){
//     var newInternetBill=internetBill+internetBillFree;
//     console.log(`Internet Bill : ${newInternetBill}  /=`);
// }
// //tv bill
// var tvBillFree=0;
// if(tvBill<=250){
//     var newTvBill=tvBill+tvBillFree;
//     console.log(`Tv Bill ${newTvBill} /=`);
// }

// var total=newCurrentBill+newGasBill+totalTelephoneBill+newWaterBill+newTvBill+newInternetBill;
// console.log(`________________________________`);
// console.log(`Total Bill ${total} /=`);

var current_bill = 1450;
var gas_bill = 1800;
var water_bill = 700;
var telephone_bill = 5000;
var internet_bill = 500;
var tv_bill = 250;

if(current_bill>=1 && current_bill <=400){
    var current_bill2 = current_bill + 5;
}
else if(current_bill>=401 && current_bill <=1500){
    var current_bill2 = current_bill + 10;
}
else if(current_bill>=1501 && current_bill <=5000){
    var current_bill2 = current_bill + 15;
}
else if(current_bill>=5001){
    var current_bill2 = current_bill + 25;
}

if(gas_bill * 0.01 <30){
    var gas_bill2 = gas_bill + (gas_bill*0.01)
}
else{
    var gas_bill2 = gas_bill + 30
}

if(water_bill * 0.01 <30){
    var water_bill2 = water_bill + (water_bill*0.01)
}
else{
    var water_bill2 = water_bill + 30
}

if(telephone_bill * 0.01 <30){
    var telephone_bill2 = telephone_bill + (telephone_bill*0.01)
}
else{
    var telephone_bill2 = telephone_bill + 30
}

var total_bill = current_bill2 + gas_bill2 + water_bill2 + telephone_bill2 +internet_bill + tv_bill

console.log(`Current Bill: ${current_bill} /=
Gas Bill: ${gas_bill} /=
Water Bill: ${water_bill} /=
Telephone Bill: ${telephone_bill} /=
Internet Bill: ${internet_bill} /=
Tv Bill: ${tv_bill} /=
---------------------
Total Bill: ${total_bill}`)
