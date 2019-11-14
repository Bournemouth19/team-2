var user;
function setup() {

    var button = select('.Send');
    button.mousePressed(Send);
    Android.anchorModeOff();

    

}





function Send() {


    
    var deviceID = select('#name').value();
    var comment = select('#comment').value();
    //console.log(deviceID+" "+comment)
      var data={
        id:deviceID,
        com:comment,
      }
      httpPost("/manageDev",data,'json',success);
    }
  

  
  function success(response){
    var button = select('#button-blue');

    if (response.msg==0){
      button.value("FEEDBACK NOT RECIEVED")
    }else{
      button.value("FEEDBACK RECIEVED")

    }
    console.log(response);
    /*if(response.msg=="sucess"){
      location.href = location.href + "profile"
      }
      var test = select('#validation');
     test.html(response.msg);*/
     
  
  }
