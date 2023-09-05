let bikes =  [ {
    name : 'fz' ,
    speed : 180 ,
    Disc : true ,
    
   }  , 
   {
    name : 'hunter' ,
    speed : 180 ,
    Disc : true ,
    
   } ,
   {
    name : 'glamour' ,
    speed : 110 ,
    Disc : false,
    
   }]  ;

   getBikes = () => 
   { 
     setTimeout ( () => {
    bikes.forEach( (bike) =>
    {
      console.log(bike.name)
    } ) } , 5000 )
  
   } ;

     getNewBike  = (newBike ,) => 
     {
      return new Promise ( ( resolve ,reject ) => {
         setTimeout ( ()  =>
         {
           bikes.push(newBike) ;
           var error = false ;
          if ( !error )

           { resolve('bike was inserted')    }

           else {reject( 'bike is rejected')  }

         } ,500 )
      }   )

     } ;

      

     getNewBike(   { name : 'ct100' ,
     speed : 110 ,
     Disc : false,
      }   ,
         ).then ( getBikes())
         .catch ( (err) => console.log(err)     )   ;


         