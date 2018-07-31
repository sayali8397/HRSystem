

function loginCall(){
    
    var emp_id_form = document.getElementById('username').value;
    var password_form = document.getElementById('password').value;
    /*
    var emp_id_form = "1836778";
    var password_form = "part010"; 
    */
    loginObj={
        emp_id:emp_id_form,
        password:password_form
    }

    var baseURL='http://10.1.3.186:8083/login'
    console.log('loginObj',loginObj);
    
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST",baseURL, true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify(loginObj));
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var respObj= JSON.parse(this.responseText);

             if(respObj.status==='valid'){
                localStorage.setItem('Emp_Details', JSON.stringify(respObj.data[0]));
                console.log('Valid', JSON.parse(localStorage.getItem('Emp_Details')));
                window.alert('Authentication Successful. :)');
                window.open('Home.html');
            }
            else {
                window.alert('Username or Password is incorrect. :(');
                console.log('Invalid', this.responseText);
            }
        }
    };
}




