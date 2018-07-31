function getBasicInfo() {
    jsonEmpDetails = JSON.parse(localStorage.getItem('Emp_Details'));
    document.getElementById("empid").innerHTML = jsonEmpDetails.emp_id;
    document.getElementById("empname").innerHTML = jsonEmpDetails.emp_name;
    /*document.getElementById("totleave").innerHTML = jsonEmpDetails.emp_name;
    document.getElementById("takenleave").innerHTML = jsonEmpDetails.emp_name;
    document.getElementById("balanceleave").innerHTML = jsonEmpDetails.emp_name;
    */
   
}



function leaveAppCall(){

    
    var leave_type_form = document.getElementById('leavetype').value;
    var leave_from_form = document.getElementById('leavefrom').value;
    var leave_to_form = document.getElementById('leaveuntil').value;
    var contact_no_form = document.getElementById('contactnumber').value;
    var dt = new Date();
    var dd = dt.getDate();
    var mm = dt.getMonth()+1;
    var yyyy = dt.getFullYear();
    var today = yyyy+'-'+mm+'-'+dd;
    var date_applied_form = today;
    var leave_reason_form = document.getElementById('leavereason').value;
    /*
    var leave_type_form = "paid";
    var leave_from_form = "2018-01-01";
    var leave_to_form = "2018-01-09";
    var contact_no_form = "8793675567";
    var date_applied_form = "2018-01-01";
    var leave_reason_form = "I am tired.";
    */
    jsonEmpDetails = JSON.parse(localStorage.getItem('Emp_Details'));
    
    leaveAppObj={
        emp_id:jsonEmpDetails.emp_id, 
        leave_id:"90",
        leave_type:leave_type_form, 
        leave_from:leave_from_form, 
        leave_to:leave_to_form, 
        contact_no:contact_no_form,
        date_applied:date_applied_form,
        total_leaves:"0",
        leaves_accumulated:"0",
        leaves_consumed:"0",
        /*total_leaves:localStorage.getItem('Leave_Details').total_leaves,
        leaves_accumulated:localStorage.getItem('Leave_Details').leaves_accumulated,
        leaves_consumed:localStorage.getItem('Leave_Details').leaves_consumed,
        */
        leave_reason:leave_reason_form, 
        substitute_person:"00",
        verified_by:"00", 
        approved_by:"00",
        status:"pending"
    }

    var baseURL='http://10.1.3.186:8083/leaveForm'
    console.log('leaveAppObj',leaveAppObj);
   
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST",baseURL, true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify(leaveAppObj));
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
             
            if( this.responseText.status==='saved'){
                console.log('local get ==>', this.responseText)
                window.open('Home.html');
            }
            else {
                console.log('local get ==>', this.responseText);
            }
        }
    };
    
}




