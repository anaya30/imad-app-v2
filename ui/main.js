//counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
    //make a request to the counter variable
    var request = new XMLHttpRequest();
    
    
    
    //capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readystate===XMLHttpRequest.DONE)
        {
            if(request.status===200) {
            var counter =  request.responseText;
            }
        }
    //render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML= counter.toString();
};
