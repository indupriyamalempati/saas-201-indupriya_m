//a.closure function//
(function() {
  var initialize = function() {
	  
    /*
      b. binding events are added...
      onSubmit callback
      disableChoice callback,...
    */
	
	document.getElementById("department1").addEventListener("click", disableChoice);
	document.getElementById("button").addEventListener("select", onSubmit);
	
  };

  var disableChoice = function() {
	  
	  var dept=document.getElementById("department1").selectedIndex;
	  document.getElementById("department2").options[dept].disabled=true;
    
  };

 var detailsentry = function() {
    var details = {name: document.getElementById("name").value,
				phno:  document.getElementById("phno").value,
				emailaddress:  document.getElementById("email").value,
				department1:  document.getElementById("department1").value,
				department2: document.getElementById("department2").value,
	};
	
    // c. build the details of the entry in the form here.  keys should be the names of the i/p elements

    return details;
  };

  var validateResults = function(data) {
    var isValid = false;
    if(document.getElementById("name").value.length<100)
	{
		if(document.getElementById("phno").value.length==10)
		{
			if(document.getElementById("emailaddress").value.endsWith("@sastra.edu"))
			{
			isValid=true;
			}
		}
	}
	
    // d. Check if the data passes all the validations here//

    return isValid;
  };

  var onSubmit = function() {
    var data = detailsentry();

    if (validateResults(data)) {
      printResults(data);
    } else {
      var resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = '';
      resultsDiv.classList.add("hide");
    }
  };

  var printResults = function(data) {
    var constructElement = function([key, value]) {
      return `<p class='result-item'>${key}: ${value}</p>`;
    };

    var resultHtml = (Object.entries(data) || []).reduce(function(innerHtml, keyValuePair) {
      debugger
      return innerHtml + constructElement(keyValuePair);
    }, '');
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = resultHtml;
    resultsDiv.classList.remove("hide");
  };

  /*
 e. Initialize the js functions only after the html DOM content has loaded.
  */
  document.addEventListener('DOMContentLoaded', initialize);
})();
