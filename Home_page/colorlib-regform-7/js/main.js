


function setup() {
    var login = select('#signin');
    login.mousePressed(Login);
    var reg = select('#signup');
    reg.mousePressed(Register);
}

function Login() {
    var usrname=select('#your_name').value();
    var pass=select('#your_pass').value();
    console.log(usrname,pass);
    var data={
      usr:usrname,
      pas:pass,
    
    }
    httpPost('login/',data,'json',signinData);

}




function Register() {
    var usrname=select('#name').value();
    var pass=select('#pass').value();
    var pass=select('#email').value();
    console.log(usrname,pass);
    var data={
      usr:usrname,
      pas:pass,
    
    }
    httpPost('reg/',data,'json',signinData);

}
   