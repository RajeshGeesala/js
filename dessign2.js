function TicketsPrice(event)
{ 
 var ticketPrice = document.getElementById('inputbaseprice').value ;
 var ticketsCount = event.target.value ;
 var totalBasePrice = ticketPrice * ticketsCount;
 document.getElementById('baseprice').innerHTML = ticketPrice ;
 document.getElementById('subtotal').innerHTML = totalBasePrice ;
  grandtotal (totalBasePrice);
}
function grandtotal (totalBasePrice)
{   
    document.getElementById('grandtotal').innerHTML = totalBasePrice ; 
}
function foodPrice (event)
{
    var foodPrice = document.getElementById('food').value ;
    document.getElementById('foodprice').innerHTML = foodPrice ;

}
