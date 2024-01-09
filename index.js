// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers (drivers){
return drivers.slice(0, 2);
}
function returnLastTwoDrivers(){
    return drivers.slice(2, 4);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
returnFirstTwoDrivers();
returnLastTwoDrivers();

 function createFareMultiplier(fare){
    return function () {
        return fare * fare;
    }
 }
createFareMultiplier();

function  fareDoubler(fare){
    const double = fare * 2;
    return double;
}
 function fareTripler(fare){
    const triple = fare * 3;
    return triple;
 }
   
 function selectDifferentDrivers(drivers, fun){
    if (fun === returnFirstTwoDrivers){
        return drivers.slice(0, 2);
    } else {

         return drivers.slice(2, 4);
    }
   
 }
    selectDifferentDrivers();

 
  
    