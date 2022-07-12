
/* destructuring arrays
'use strict';
const nepaliRestaurant = {
  name: 'D Momos',
  location:'105 Garden Drive, Manchester, NH',
  categories: ['Himalayan Momos', 'Darjeeling Momos', 'Tibetan Momos', 'Westernized Momos'],
  starters: ['aaludum', 'pakoras', 'sadeko waiwai'],
  mainCourse: ['momos', 'typhus','mixed platter' ],
  orderFood: function(starterIndex, mainIndex) {
    return([this.starters[starterIndex], this.mainCourse[mainIndex] ]);
  }
  };
  
 let [main, , secondary]= nepaliRestaurant.categories; // destructing 
 [main ,secondary] = [secondary, main]; // switching variables using destructing

 const [starter, mainCourse]= nepaliRestaurant.orderFood(2,0);
 console.log(starter, mainCourse);
 */
 'use strict';
 /*const nepaliRestaurant = {
   name: 'D Momos',
   location:'105 Garden Drive, Manchester, NH',
   categories: ['Himalayan Momos', 'Darjeeling Momos', 'Tibetan Momos', 'Westernized Momos'],
   starters: ['aaludum', 'pakoras', 'sadeko waiwai'],
   mainCourse: ['momos', 'typhus','mixed platter' ],
   openHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open:11,
      close:23,
    },
    sat:{
      open:0,
      close:24,
    },
   },
   orderFood: function(starterIndex, mainIndex) {
     return([this.starters[starterIndex], this.mainCourse[mainIndex] ]);
   }
   };

  const {name, openHours, categories} = nepaliRestaurant;
  console.log(name, openHours,categories);

  //to make variable names different name from the object
   const
   { name: restaurantName,
     openHours: hours, 
     categories: tags,
    } = nepaliRestaurant;
console.log(restaurantName,openHours,tags);
const { menu = [], starterMenu: starter = []} = nepaliRestaurant;
console.log(menu, starter);

//mutating variables while destructuring objects



 */
function sumofN1(n){
  let sum =0;
  for ( let i=0; i<=n; i++){
    sum = sum + i;
  }
  return sum;
}

function sumofN (n){
return n*(n+1)/2;
}
console.log(sumofN(3));

