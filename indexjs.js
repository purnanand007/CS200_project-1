<script>

$(document).ready(function(){
$("#addrow").hide();
$("#delrow").hide();
  $("#button1").click(function(){
   $("#addrow").show("slow");
  });
   $("#button11").click(function(){
    $("#addrow").show("slow",addData());
  });
 $("#button2").click(function(){
 $("#delrow").show("slow");
  });

$("#button21").click(function(){
 $("#delrow").toggle("slow",delRow() );
   });
$("#dellocaldata").click(function(){
	 deleteData();
     });
   
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

function delRow() {

		var dID=document.getElementById('ID').value;
 		var table = document.getElementsByTagName('table')[0];
		 getData();
         var x=table.rows.length;
         var k=x;
		for(i=0;i<k;i++)
        if(arr[i].findex==dID)
        	{table.deleteRow(i+1);
              arr.splice(i, 1);
              localStorage.setItem("localData", JSON.stringify(arr));
            break;
            }
        if(i==k)
        alert("value not found");
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
    </body>

</html>
