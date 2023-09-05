// 4 functions
// event onchange 
//grand-total
 function calculateBasePrice (event)
 {
   var ticketPrice = document.getElementById('base-input-price').value ;
   var noOfTickets = event.target.value ;
    var totalBasePrice = Number(ticketPrice) * Number(noOfTickets) ;
    document.getElementById('base-price').innerHTML = totalBasePrice ;
 }