function signupCall(){
  
    var emp_name_form = document.getElementById("empname").value ;
    var emp_Id_form = document.getElementById("empid").value;
    var doj_form = document.getElementById("doj").value; 
    var manager_name_form  = document.getElementById("managername").value;
    var manager_id_form = document.getElementById("managerid").value;
    var password_form = document.getElementById("pass").value;
    var dept_name_form  = document.getElementById("dept").value;
    var emp_mail_form  = document.getElementById("emailid").value;
    var designation_form  = document.getElementById("design").value;
    //var password_form = "1234";
    
/*
    var emp_name_form = "Sanskar" ;
    var emp_Id_form = "873";
    var doj_form = "2018-02-02"; 
    var manager_name_form  = "Anju";
    var manager_id_form = "321321";
    var dept_name_form  = "Dept1";
    var emp_mail_form  = "Sansakr@db.com";
    var password_form = "1234";
    var designation_form  = "EMP"; 
*/
    signupObj={
        emp_name:emp_name_form, 
        emp_id:emp_Id_form,  
        doj:doj_form,  
        manager_name:manager_name_form,  
        manager_id:manager_id_form,   
        dept_name:dept_name_form,  
        emp_mail:emp_mail_form,  
        password:password_form, 
        designation:designation_form    
        
    }

    var baseURL='http://10.1.3.186:8083/signUp'
    console.log('signupObj',signupObj);
   
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST",baseURL, true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify(signupObj));
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            if(this.responseText==='success'){
                window.alert('New Employee Registered. Welcome. :)');
                window.open('login.html');
           }
            else {
                console.log('local get ==>', this.responseText);
            }
        }
    };
    
}




