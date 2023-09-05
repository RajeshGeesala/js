function subtotal(event)
{
    var ticketPrice = document.getElementById('ticketprice').value ;
    var ticketsCount =  event.target.value;
    var subtotal = ticketPrice * ticketsCount ;
    document.getElementById('baseprice').innerHTML =  ticketPrice ;
    document.getElementById('subtotal').innerHTML = subtotal ;
}
 function foodPrice(event) 
 {
    var foodPrice = event.target.value ;
    document.getElementById('foodprice').innerHTML = foodPrice 
    var ticketPrice = document.getElementById('ticketprice').value ;
     var ticketsCount = document.getElementById('selecttickets').value ;
    var subtotal = ticketPrice * ticketsCount ;
    var grandtotal = Number (subtotal) +Number( foodPrice) ;
    document.getElementById('grandtotal').innerHTML = grandtotal ;
 }

 function donation (event)
 {
    var donation = event.target.value ;
    document.getElementById('donation').innerHTML = donation ;
    var ticketPrice = document.getElementById('ticketprice').value ;
    var ticketsCount = document.getElementById('selecttickets').value ;
    var subtotal = ticketPrice * ticketsCount ;
    var foodPrice = document.getElementById('selectfood').value ;
    var grandtotal = Number (foodPrice) + Number ( subtotal) + Number (donation);
    document.getElementById('grandtotal').innerHTML = grandtotal ;

 }
//  function grandtotal ()
//  {
//    var foodPrice = document.getElementById('selectfood').value ;
//    var ticketPrice = document.getElementById('ticketprice').value ;
//    var ticketsCount = document.getElementById('selecttickets').value ;
//    var subtotal = ticketPrice *ticketsCount ;
//    var donation = document.getElementById('donate').value ;
//    var grandtotal = Number(foodPrice) + Number(subtotal )+ Number(donation) ;
//    document.getElementById('grandtotal').innerHTML = grandtotal
//  }
function booknowalert(){
   var ticketsCount = document.getElementById('selecttickets').value ;
       for ( i=0 ; i<=ticketsCount ; i++ )
       {  
         alert('tickets:' + i + 'are booked')  
         if (i=1)   {
            alert('ticket:' + i + 'booked') 
         }
       }
   }
   