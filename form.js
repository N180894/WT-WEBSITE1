function validate(){
	var f=document.getElementById("fn").value;
	if(f.length<3 || /^([a-zA-Z]*)$/.test(f)==false){
		document.getElementById("fn").style.border="2px solid red";
		document.getElementById("l1").style.visibility="visible";
		setTimeout(function () {
            document.getElementById("l1").style.display = "none";
        }, 5 * 1000);
		return false;
	}
	var m=document.getElementById("mn").value;
	if(/^([a-zA-Z]*)$/.test(m)==false){
		document.getElementById("mn").style.border="2px solid red";
		document.getElementById("l2").style.visibility="visible";
		setTimeout(function () {
            document.getElementById("l2").style.display = "none";
        }, 5 * 1000);
		return false;
	}
	var l=document.getElementById("ln").value;
	if(l.length<3 || /^([a-zA-Z]*)$/.test(l)==false){
		document.getElementById("ln").style.border="2px solid red";
		document.getElementById("l3").style.visibility="visible";
		setTimeout(function () {
            document.getElementById("l3").style.display = "none";
        }, 5 * 1000);
		return false;
	}
	// var fullN=document.getElementById("full").value='f+l';
	//document.getElementById('full').value=fn.value+' '+mn.value;
	var ph=document.getElementById("mobile").value;
	var ch=document.getElementById("c").value;
	if(ch=='India'){
		if(ph.length!=10 || /^[6-9]\d{9}$/.test(ph)==false){
			document.getElementById("mobile").style.border="2px solid red";
		    document.getElementById("l4").style.visibility="visible";
		    setTimeout(function () {
            document.getElementById("l4").style.display = "none";
        }, 5 * 1000);
		    return false;
		}
	}
	else{
		if(ph.length!=12 || /^[6-9]\d{2}-d{3}-d{4}$/.test(ph)==false){
			document.getElementById("mobile").style.border="2px solid red";
		    document.getElementById("l4").style.visibility="visible";
		    setTimeout(function () {
            document.getElementById("l4").style.display = "none";
        }, 5 * 1000);
		    return false;
		}
	}
	var count=0;
	var i;
	for(i=1;i<7;i++){
		if(document.getElementById("a"+i).checked==true){
			count=count+1;
		}
	}
	if(count<2){
		document.getElementById("hobbies").style.border="2px solid red";
		document.getElementById("l5").style.visibility="visible";
		setTimeout(function () {
            document.getElementById("l5").style.display = "none";
        }, 5 * 1000);
		return false;
	}
	var e=document.getElementById("mail").value;
	var RegEx=/^[a-zA-Z0-9]+(\.[_a-zA-Z0-9-]+)@[a-zA-Z]+(\.[a-zA-Z]+)(\.[a-z]{2,3})$/;
	if(RegEx.test(e)==false){
        document.getElementById("mail").style.border="2px solid red";
		document.getElementById("l6").style.visibility="visible";
		setTimeout(function () {
            document.getElementById("l6").style.display = "none";
        }, 5 * 1000);
		return false;
	}
    // function (){
    // 	var r=confirm("Do you want to RESET the Data..!!");
    // 	if(r){
    // 		return false;
    // 	}
    // 	else{
    // 		return true;
    // 	}
    // }
    // if(address.length>0){
    //     var letters=address.replace(/[0-9]/g,'');
    //     address=letters;
    // }
    // function sub(){
    // 	var con=confirm("Do you want submit..");
    // 	if(con){
    // 		return false;
    // 	}
    // 	else{
    // 		return true;
    // 	}
    // }
	return true;
}