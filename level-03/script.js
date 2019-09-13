// This is a closure function https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36
(function() {
  var initialize = function() {
    /*
      1. Add all your event bindings here. Please avoid binding events inline and add your event listeners here.

      onSubmit callback
      disableDuplicateSecondaryDepartment callback,...
    */
   document.getElementById("department1").addEventListener("click",disableDuplicateSecondaryDepartment);
   document.getElementById("btn").addEventListener("select",onSubmit);
  };

  var disableDuplicateSecondaryDepartment = function() {
    var dep=document.getElementById("department1").selectedIndex;
    document.getElementById("department2").options[dep].disabled=true;
  };

  var constructData = function() {
    var data = {name:document.getElementById("name").value,phno:
    document.getElementById("phno").value,email:
    document.getElementById("email").value,department1:
    document.getElementById("department1").value,department2:
    document.getElementById("department2").value
};

    // 3. Construct data from the form here. Please ensure that the keys are the names of input elements

    return data;
  }

  var validateResults = function(data) {
    var isValid = false;

    if(document.getElementById("name").value.length<100)
    {

        if(document.getElementById("phno").value.length==10)
{

    if(document.getElementById("email").value.endsWith("@sastra.edu"))
    {
        isValid=true;
    }
}
    }


    // 4. Check if the data passes all the validations here

    return isValid;
  };

  var onSubmit = function() {

    var data = constructData();

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
    Initialize the javascript functions only after the html DOM content has loaded.
    This is to ensure that the elements are present in the DOM before binding any event listeners to them.
  */
  document.addEventListener('DOMContentLoaded', initialize);
})();
