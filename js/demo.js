function validateEmpty(elementName) {  //判空函数
	var objElement = document.getElementById(elementName);
	var msgElement = document.getElementById(elementName + "Msg");
	if(objElement.value != "") {
		objElement.className = "right" ;
		msgElement.innerHTML = "输入的内容正确!";
		return true;
	} else {
		objElement.className = "wrong" ;
		msgElement.innerHTML = "输入的内容错误!";
		return false;
	}
}

function validateRepeat(srcName,desName) {  //判断两次输入的内容是否一致
	var srcElement = document.getElementById(srcName);
	var desElement = document.getElementById(desName);
	var msgElement = document.getElementById(desName + "Msg");
	if(srcElement.value == desElement.value) {
		desElement.className = "right" ;
		msgElement.innerHTML = "两次输入的内容一致!" ;
		return true;
	} else {
		desElement.className = "wrong" ;
		msgElement.innerHTML = "两次输入的内容不一致!";
		return false;
	}
}

function validatePwd() {
	return validateEmpty("pwd");
}

function validateConf() {
	if(validateEmpty("conf")) { //如果第二次输入的不是空的那么就判断两次内容是否一致
		return validateRepeat("pwd","conf");
	}  
	return false;
}

window.onload = function() {  //页面加载
	document.getElementById("pwd").addEventListener("blur",validatePwd,false);
	document.getElementById("conf").addEventListener("blur",validateConf,false);
}