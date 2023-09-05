let   cars = [   { name:"audi"  , 
                  price : 300000000} ,
                  { name : " BMW" ,
                price : 5000000000    } ] 
       ;
       
function Getcars () 
{

    setTimeout (  () => {
    
        cars.forEach( (car) => {
         console.log(car.name)   
        });
    }    , 400    )

}
 
function Newcars ( pcar , xyx  ) 
{
  setTimeout   (   () => 
  {
    cars.push(pcar) ;
       xyx () ;
  } ,500
  )     

}  ;

Newcars (  { name:"new car" ,price : 800000000} , Getcars  )  ;  

let trains = [ { name : "seshadri",
                origin : "banglore",
                 speed :  120 ,
                 AC  : true  }  ,

              { name : "janmabhoomi",
                origin : "hyderabad",
                speed :  120 ,
                  AC  : false  }  ,
                 ]
    GetTrains = () =>
    {
        setTimeout  ( () => { trains.forEach( (train) =>  {
          console.log(train.name)  
    }  ) } ,2000
    ) 
    }

    function getNEWtrain (newTrain , callback)
    {   
        setTimeout (   ()  =>
                {   trains.push(newTrain) ;
                    callback ();        }  , 5000   )
    }

   // GetTrains ()  ;
    getNEWtrain   ( { name : "gowthami",
                  origin : "kakinada",
                     speed :  140 ,
                   AC  : true  }  , GetTrains )

//getcars() ;


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
  
 }]  

 getBikes = () => 
 { 
   setTimeout ( () => {
  bikes.forEach( (bike) =>
  {
    console.log(bike.name)
  } ) } , 500 )

 } ;

 getNewBike = (newBike , Bikes) => {
   
  setTimeout( () => {
   bikes.push(newBike);
     Bikes();
  } ,1000    )

 }  ;
  
 
 getNewBike (  {
  name : 'rx100' ,
  speed : 180 ,
  Disc : false ,
  
 }  ,  getBikes )


