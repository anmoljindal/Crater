function loadPrice()
{
	var exchange_element =  document.getElementById("exchange");
	var exchange = exchange_element.options[exchange_element.selectedIndex].value;
	var currency_element =  document.getElementById("currency");
	var currency = currency_element.options[currency_element.selectedIndex].value;
	if(exchange == "Koinex")
	{
		var data = JSON.parse(getdata('https://koinex.in/api/ticker')); 
    	document.getElementById("bprice").innerText = data["stats"][currency]["lowest_ask"];
    	document.getElementById("sprice").innerText = data["stats"][currency]["highest_bid"];
	}
	
  
}

function getdata(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

