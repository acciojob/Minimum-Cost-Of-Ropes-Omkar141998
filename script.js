function calculateMinCost() {
  //your code here
  // read data from input element;
	var inputValue = document.getElementById("rope-lengths").value;
	var inputArray = inputData.split(",");

	for(var i = 0; i< inputArr.length; i++) {
		inputArray[i] = Number(inputArray[i]);
	}
	var cost = 0;
	inputArray.sort(function (a,b) { return a-b;});

	while(inputArr.length > 1) {
		var newRope = inputArray[0] + inputArray[1];
		cost += newRope;

		// delete first two element and addition of 0th and 2nd element
		inputArray.splice(0,2);
		inputArray.push(newRope);
		//alert(newRope);
		inputArray.sort(function(a,b) { return a-b});
	}	
  document.getElementById("result").textContent = cost;

}  
