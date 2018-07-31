var taken = 0;

function getBasicInfo() {
    jsonEmpDetails = JSON.parse(localStorage.getItem('Emp_Details'));
    document.getElementById("empid").innerHTML = jsonEmpDetails.emp_id;
    document.getElementById("empname").innerHTML = jsonEmpDetails.emp_name;
    
    //To get current leaves status
   // var URL = 'http://10.1.3.186:8083/getLeavesTaken/' + jsonEmpDetails.emp_id.toString();
    var URL = 'http://10.1.3.186:8083/getLeavesTaken/' + '1376003';

    var baseURL= URL;
    console.log(baseURL);
   
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET",baseURL, true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send();
            
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var leaveStatus = JSON.parse(this.responseText);
            console.log('leave status ==>', leaveStatus);
            
            for(i=0; i<leaveStatus.length; i++) {
                taken += leaveStatus[i].leaves_taken;
                console.log('chk', taken);
            }
            document.getElementById("totleave").innerHTML = 48;
            document.getElementById("takenleave").innerHTML = taken;
            document.getElementById("balanceleave").innerHTML = 48 - taken;
         }
    };
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
    
    jsonEmpDetails = JSON.parse(localStorage.getItem('Emp_Details'));
    console.log(taken);
    leaveAppObj={
        emp_id:jsonEmpDetails.emp_id, 
        leave_id:"88",
        leave_type:leave_type_form, 
        leave_from:leave_from_form, 
        leave_to:leave_to_form, 
        contact_no:contact_no_form,
        date_applied:date_applied_form,
        total_leaves:"48",
        leaves_accumulated:(48 - taken),
        leaves_consumed:taken,
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




