<script
src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
</script>
<link href="style.css" rel= stylesheet>
<script>

$(document).ready(function(){
$("#addrow").hide();
$("#delrow").hide();
  $("#button1").click(function(){
   $("#addrow").toggle("slow");
  });
   $("#button11").click(function(){
    $("#addrow").toggle("slow",addData());
  });
 $("#button2").click(function(){
 $("#delrow").toggle("slow");
  });

$("#button21").click(function(){
 $("#delrow").toggle("slow",delRow() );
   });
$("#dellocaldata").click(deleteData());   
   
});

function getData() {
var str= localStorage.getItem("localData");
if(str != null)
arr=JSON.parse(str);
}


function showData() {
	
        getData();
		var table = document.getElementsByTagName('table')[0];
		var x=table.rows.length;
		
        while(--x)
        {
        table.deleteRow(x);
        } 
 		for(i=0;i<arr.length;i++)
		{
 		  var newRow = table.insertRow();
                  // add cells to the row
                  var cel1 = newRow.insertCell();
                  var cel2 = newRow.insertCell();
                  var cel3 = newRow.insertCell();
                  var cel4 = newRow.insertCell();
                  var cel5 = newRow.insertCell();
                  // add values to the cells
                  cel1.innerHTML = arr[i].findex;
                  cel2.innerHTML = arr[i].fname;
                  cel3.innerHTML = arr[i].lname;
                  cel4.innerHTML = arr[i].project;
                  cel5.innerHTML = arr[i].email;
        }   
}
/*function addRow()
            {
              	var findex=document.getElementById('findex').value;
                var fname = document.getElementById('fname').value;
                 var lname = document.getElementById('lname').value;
                  var project = document.getElementById('project').value;
                  var email = document.getElementById('email').value;
        
                 var table = document.getElementsById('mytable');
                  
               
                  var newRow = table.insertRow();
                  
                  // add cells to the row
                  var cel1 = newRow.insertCell(0);
                  var cel2 = newRow.insertCell(1);
                  var cel3 = newRow.insertCell(2);
                  var cel4 = newRow.insertCell(3);
		  var cel5 = newRow.insertCell(4);
                  
                  // add values to the cells
                  cel1.innerHTML = findex;
                  cel2.innerHTML = fname;
                  cel3.innerHTML = lname;
                  cel4.innerHTML = project;
		  cel5.innerHTML = email;
            } 

*/
function delRow() {

		var dID=document.getElementById('ID').value;
 		var table = document.getElementsByTagName('table')[0];
		var x=table.rows.length;
		
			while(x--) {
			if(table[0][x]=='dID')
			table.deleteRow(x);
				}
}

var arr = new Array();
function addData() {
		getData();
		arr.push({
				findex:document.getElementById('findex').value,
                fname :document.getElementById('fname').value,
                lname :document.getElementById('lname').value,
                project:document.getElementById('project').value,
				email :document.getElementById('email').value
});

 localStorage.setItem("localData",JSON.stringify(arr));

 showData();
//addRow();
}



function deleteData() 
{
localStorage.clear();
showData();
}

</script>