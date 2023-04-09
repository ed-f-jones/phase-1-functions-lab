// Code your solution in this file!
const distanceFromHqInBlocks = ( blocks ) => {
let headquarters = 42
   return Math.abs(blocks - headquarters)
}

const distanceFromHqInFeet = ( blocks) => {
   return distanceFromHqInBlocks(blocks) * 264;

}


function distanceTravelledInFeet(start, destination) {
return Math.abs(start - destination) * 264;
 }


const calculatesFarePrice = (start, destination) => {
   let distance = distanceTravelledInFeet(start, destination);

   if (distance <= 400) {
      return 0;

   } else if (distance >= 400 && distance <= 2000) {
      return Math.abs(distance - 400) * 0.02;

   } else if (distance >= 2000 && distance <= 2500) {
       return 25;
   } else if (distance > 2500) {
      return "cannot travel that far"
   }
}

