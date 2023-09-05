

 //arthematic operation 

   // window.alert ( "raj")

    var no_of_tickets = 5 ;
   var ticket_p  = 200 ;
   var conv_fess = 20 ;
   var ticket_price_with_conf = ticket_p + conv_fess ;
   var total_tickets_p_with_conf = no_of_tickets * ticket_price_with_conf ;
   console.log (total_tickets_p_with_conf );
   var gst = 18 ;
    var total_gst = total_tickets_p_with_conf % gst ;
    console.log ( total_gst  ) ;
    var grand_total =  total_tickets_p_with_conf  + total_gst ;
    console.log ( grand_total   ) ; //  ticket pice with con ;

    // donation 
    var base_donation = 1 ;
    var total_donation = no_of_tickets * base_donation ; //
    console.log ( total_donation) ;
    //food 
    var popcorn = 200 ;
    var no_of_popcorn = 5 ;
    var total_food_price = popcorn * no_of_popcorn ;
      console.log (   total_food_price  ) ;
    //payable amount 
     
    var total_payable_amount = grand_total + total_food_price + total_donation;
    console.log( total_payable_amount) ;
          


        function total_tickets_p_with_conf ( ) 
     {  
       
        var no_of_tickets = 5 ;
        var ticket_p  = 200 ;
        var conv_fess = 20 ;
        var ticket_price_with_conf = ticket_p + conv_fess ;
        var total_tickets_p_with_conf = no_of_tickets * ticket_price_with_conf ;
        console.log (total_tickets_p_with_conf );
        var gst = 18 ;
        var total_gst = total_tickets_p_with_conf % gst ;
        console.log ( total_gst  ) ;
        var grand_total =  total_tickets_p_with_conf  + total_gst ;
        console.log ( grand_total   ) ;

      }

      function foodprice () 
      {
        var popcorn = 200 ;
        var no_of_popcorn = 5 ;
        var total_food_price = popcorn * no_of_popcorn ;
        console.log (   total_food_price  ) ;
        }
       function donation ( )
        {
          var base_donation = 1 ;
          var total_donation = no_of_tickets * base_donation ; //
          console.log ( total_donation) ;
       }
      function total_payable_amount () 
      {
        var total_payable_amount = grand_total + total_food_price + total_donation;
        console.log( total_payable_amount) ;
      }
      function name () 
    {  
      var name = "rajesh" ;
      console.log(name) ;
    }
   function fullname() {
     var fullname = "rajesh geesala" ;
     console.log (fullname)
    
   }  ;

    function surname() {
    var surname = "geesala"
      console.log (surname)
    }

    function example ()
    {
      var a = 5 ;
      var b = -10 ;
      var c = a * b ;
      console.log (c) ;
    }

    example () ;
      name () ;
     fullname()  ;
     surname() ;

   //function parameters 
   
   function myparameters (a,b) 
   {
     // var a = 7 ;
     //  var b = 6 ;
    var c = a *b ;
    console.log(c);
   }
  

   myparameters (7,6)  ;
    myparameters ( 6,6) ;
    myparameters (3,6)
  

  






   


  


//we have to keep string data in dobule quotes 
 // no need to keep number data in double quotes{}