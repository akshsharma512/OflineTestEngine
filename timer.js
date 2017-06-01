function Timer(){

     window.alert("your 22 minutes have been started, click ok");
    
 setTimeout(function(){
        
    document.getElementById("submit").click();
    
    }, 1320000);
    
    startTime();
    
function startTime() 
{
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
document.getElementById("timer").innerHTML= h+":"+m+":"+s;
//    var t = setTimeout(startTime(), 500);
}


}
