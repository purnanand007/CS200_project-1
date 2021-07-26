$(document).ready(function(){
$("#addrow").hide();
$("#delrow").hide();
$("#updatediv").hide();
  $("#button1").click(function(){
   //$("#addrow").toggle("slow");
  });
   $("#button11").click(function(){
   // $("#addrow").toggle("slow",addData());
  });
 $("#button2").click(function(){
 //$("#delrow").toggle("slow");
  });

$("#button21").click(function(){
 //$("#delrow").toggle("slow",delRow() );
   });
$("#dellocaldata").click(function(){
	 deleteData();
     });
 $("#update").click(function(){
// $("#updatediv").toggle("slow");
  });
 
 $("#uconfirm").click(function(){
 //$("#updatediv").toggle("slow",updateData() );
  });
 
});

function getData() {
var str= localStorage.getItem("localData");
if(str != null)
arr=JSON.parse(str);
}


function showData() {
	
        getData();
		var table = document.getElementById("mytable"); 
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
 		var table = document.getElementById("mytable"); 
		 getData();
         var x=table.rows.length;
         var k=x;
         var i=0;
		for(i=0;i<k;i++)
        if(arr[i].findex==dID)
        	{table.deleteRow(i+1);
              arr.splice(i, 1);
              localStorage.setItem("localData", JSON.stringify(arr));
            break;
            }
       if(i===k)
       alert("value not found");
        
}

var arr = new Array();
function addData() {
		getData();
        		var _findex=document.getElementById('findex').value;
        		var _name =document.getElementById('fname').value;
                	var _lname = document.getElementById('lname').value;
                	var _project=document.getElementById('project').value;
			var _email =document.getElementById('email').value;
       
        var x=arr.length;
        var i=0,j=0;
        for(i=0;i<x;i++)
       	 if((arr[i].findex==_findex))
        {	alert("id value should be unique");
        	break;
        }
        if(i==x)
     		for(j=0;j<x;j++)
        	if(arr[j].email==_email)
        	{	alert("Email is maching");
           		 break;}
        if(i==x && j==x )
        {if(_findex!= '' && _name != '' &&  _lname!='' && _project !='' && _email!=''  )
		{arr.push({
		findex:document.getElementById('findex').value,
                fname :document.getElementById('fname').value,
                lname :document.getElementById('lname').value,
                project:document.getElementById('project').value,
		email :document.getElementById('email').value
	});

 	localStorage.setItem("localData",JSON.stringify(arr));
	sendEmail(email);
 }
 showData();
 }
}



function deleteData() 
{
localStorage.clear();
showData();
}



function updateData() {
getData();
var uid=document.getElementById('uID').value;
var x=arr.length;
var i=0;
for(i=0;i<x;i++)
if(arr[i].findex == uid)
{
	var ufname = document.getElementById('ufname').value;
        var ulname = document.getElementById('ulname').value;
        var uproject= document.getElementById('uproject').value;
	var uemail = document.getElementById('uemail').value;

		{
		arr[i].fname=ufname;
		arr[i].lname=ulname;
		arr[i].project=uproject;
		arr[i].email=uemail;
		localStorage.setItem("localData",JSON.stringify(arr));
		}
		sendEmail(uemail);
		showData();
		break;
		}

if(i==x)
alert("please enter a valid Id");
}

function sendEmail(i) { 
    Email.send({
	Host: "smtp.gmail.com",
	Username : "purnananddubey2001@gmail.com",
	Password : "dubey@370073",
	To : i,
	From : "purnananddubey2001@gmail.com",
	Subject : "Your filled data",
	Body : "data of man sending",
 	
	}).then(
		//message => alert("mail sent successfully")
	);
    } 
