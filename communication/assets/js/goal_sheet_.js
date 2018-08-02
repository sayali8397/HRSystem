
function goalSheetCall(){
    /*
    var arr_inter_skill = [+document.getElementById("ip1").value, +document.getElementById("ip2").value,
    +document.getElementById("ip3").value, +document.getElementById("ip4").value,];
    var arr_dev = [+document.getElementById("dev1").value, +document.getElementById("dev2").value];
    var arr_conduct = [+document.getElementById("coc1").value, +document.getElementById("coc2").value, 
    +document.getElementById("coc3").value, +document.getElementById("coc4").value];
    var arr_comm = [+document.getElementById("cs1").value, +document.getElementById("cs2").value];
    var arr_per = [+document.getElementById("p1").value, +document.getElementById("p2").value];
    var arr_lead = [+document.getElementById("ld1").value, +document.getElementById("ld2").value, 
    +document.getElementById("ld3").value, +document.getElementById("ld4").value];
    */
    var arr_inter_skill = [1, 2, 3, 4];
    var arr_dev = [1, 2];
    var arr_conduct = [1, 2, 3, 4];
    var arr_comm = [1, 2];
    var arr_per = [1, 2];
    var arr_lead = [1, 2, 3, 4];
    
    var arr_inter_skill_goals = ["Relationship with co-workers", "Problem solving", "Decision making", "Time management"];
    var arr_dev_goals = ["Seeks T & D", "Open to ideas"];
    var arr_conduct_goals = ["Work place ettiquttes", "Punctuality", "Descipline", "Attendance"];
    var arr_comm_goals = ["Oral and written expression", "Sharing of knowledge"];
    var arr_per_goals = ["Enthusastic", "Trustworthy"];
    var arr_lead_goals = ["Team work", "Team building", "New stategy and direction", "Participation in HR Activities"];
  
    console.log(Math.max(...arr_inter_skill));
    console.log(Math.max(1, 2, 3, 4));
    //find max of every subtopic here
  
    goalSheetObj={
        emp_id:JSON.parse(localStorage.getItem('Emp_Details')).emp_id,
        KRA1:arr_inter_skill_goals[arr_inter_skill.indexOf(Math.max(...arr_inter_skill))],
        KRA1_weightage:Math.max(...arr_inter_skill),
        KRA2:arr_dev_goals[arr_dev.indexOf(Math.max(...arr_dev))],
        KRA2_weightage:Math.max(...arr_dev),
        
        KRA3:arr_conduct_goals[arr_conduct.indexOf(Math.max(...arr_conduct))],
        KRA3_weightage:Math.max(...arr_conduct),
        KRA4:arr_comm_goals[arr_comm.indexOf(Math.max(...arr_comm))],
        KRA4_weightage:Math.max(...arr_comm),
        KRA5:arr_per_goals[arr_per.indexOf(Math.max(...arr_per))],
        KRA5_weightage:Math.max(...arr_per),
        KRA6:arr_lead_goals[arr_lead.indexOf(Math.max(...arr_lead))],
        KRA6_weightage:Math.max(...arr_lead),
        final_rating:"00",
        verified_by:"00",
        approved_by:"00",
        status:"pending",
        review_start:"2018-01-01",
        review_end:"2018-06-06"
   }

    var baseURL='http://10.1.3.186:8083/fillGoalForm'
    console.log('goalSheetObj',goalSheetObj);
   
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST",baseURL, true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify(goalSheetObj));
    
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




