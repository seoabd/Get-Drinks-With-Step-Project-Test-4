function getDrinksWithStep(numberOfGuests, step) {
    let numOfToasts = 0;
  
   for(let i = 1; i <= numberOfGuests; i+=step){
     numOfToasts += i;
   }
   return numOfToasts;
  }
