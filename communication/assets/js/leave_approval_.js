function getLeavesList(){
    jsonEmpDetails = JSON.parse(localStorage.getItem('Emp_Details'));
    var baseURL = 'http://localhost:8083/getLeaveForms';
    manager_id_input = jsonEmpDetails.emp_id;

    var input={
        manager_id:manager_id_input,
        status:'pending'
    }
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST",baseURL, true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify(input));
   
    txt = '<table class="table table-striped table-advance table-hover"><h4>Leave Requests</h4><thead><tr><th>Employee ID</th><th></th><th>Status</th><th>View Leave Application</th></tr></thead><tbody>';
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            localStorage.setItem('All_Leaves_Details', this.responseText);
           
            var respObj= JSON.parse(this.responseText);
            console.log('resp',respObj);
            
            for(i=0; i<respObj.length;i++){
                txt += '<tr><td>' + respObj[i].emp_id + '<td><td><span class="badge bg-success">Pending</span></td><td><a class="btn btn-default btn-sm" onclick="getLeaveData('+ i.valueOf() + ')">Verify</a></td></tr>';
            }
            txt += '</tbody></table>'; 
            document.getElementById("InsertListHere").innerHTML = txt;
      
        }
    }    
}      

function getLeaveData(i) {
    console.log("Request No = ", i);
    localStorage.setItem('Curr_Leave', i.toString()), 
    window.open("ApproveThisLeave.html", "_self");
    
}