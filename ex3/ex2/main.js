var div,div2,userPasswordInput,userNameInput,user,but,errorRegMsg,text;
var title,myname,hobbis,funnyquat1 ,funnyquat2,imgP1,image,logOutBut,logOutButText;
var switchToPicture1 = false;
var calcBut;


function switchPicture (imgSrc){
	if(switchToPicture1){
		switchToPicture1 = false;
		image.src = "img2.jpg";
		image.setAttribute("width" , "300");
		image.setAttribute("height" , "300");
	}else{
		switchToPicture1 = true;
		image.src = "img4.jpg";
		image.setAttribute("width" , "300");
		image.setAttribute("height" , "300");
	}
		
}



function romoveFirstPage(){
		
	title.remove();
	div2.remove();
	div.remove();
	userPasswordInput.remove();
	userNameInput.remove();
	errorRegMsg.remove();

	but.remove();
			
}

function romoveProfilePage(){
	myname.remove(); 
	hobbis.remove();  
	funnyquat1.remove(); 
	funnyquat2.remove(); 
	imgP1.remove(); 
	logOutBut.remove();

	calcBut.remove();
}





function myProfilePage(){ 

		
	romoveFirstPage();

	document.body.style.backgroundImage = "url('profileImg.jpg')";
	document.body.style.backgroundSize = "cover";
	document.body.style.backgroundRepeat = "no-repeat";

	funnyquat1 =  document.createElement('p');
	funnyquat1.setAttribute('class','Styleprofileinfo');
 	funnyquat1.textContent = "\"Do not take life too seriously. You will never get out of it alive\"";
	document.body.appendChild(funnyquat1);
	
	myname =  document.createElement('p');
	myname .setAttribute('class','Styleprofileinfo');
 	myname.textContent = "Hello my name is Nir Wiener,I am 24 years old.";
	document.body.appendChild(myname);
		
	hobbis =  document.createElement('p');
	hobbis.setAttribute('class','Styleprofileinfo');
	hobbis.textContent = "My hobbis are: sport,music,movies.";
	document.body.appendChild(hobbis);
		

		
	funnyquat2 =  document.createElement('p');
	funnyquat2.setAttribute('class','Styleprofileinfo');
 	funnyquat2.textContent = "\"Always remember that you are absolutely unique. Just like everyone else\"";
	document.body.appendChild(funnyquat2);
 		
 	imgP1 =  document.createElement('p');
	imgP1.setAttribute('class' , 'imgSwitch1');
	document.body.appendChild(imgP1);

 		
 	image = document.createElement('IMG');
 	
 	image.src = "img2.jpg";
	image.setAttribute("width" , "300");
	image.setAttribute("height" , "300");
	imgP1.appendChild(image);
	
 		

 	logOutBut = document.createElement('BUTTON');
	logOutBut.setAttribute('class' , 'logOut');
	logOutButText = document.createTextNode('LogOut');
	logOutBut.appendChild(logOutButText);
	document.body.appendChild(logOutBut);


	imgP1.addEventListener("mouseover", switchPicture);
 	logOutBut.addEventListener('click', goToFirstPage);	
	
	calcBut = document.createElement('BUTTON');
	calcBut.setAttribute('class' , 'calcBut');
	var calcText = document.createTextNode('Calculator');
	calcBut.appendChild(calcText);
	document.body.appendChild(calcBut); 
		
		
	calcBut.addEventListener('click', goToCalc);	

}

function calc (event){

	var calc =  document.createElement('p');
	calc.setAttribute('class' , 'TheCalculator');
    var calcInput = document.createElement("INPUT");
    calcInput.setAttribute('class' , 'calcInputS');
    calc.appendChild(calcInput);
    var table = document.createElement('table');

    var tr = document.createElement('tr');   

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');

    var num1 = document.createElement("BUTTON");
    num1.setAttribute('class' , 'calcButton');
    button1text = document.createTextNode("1");	
    num1.appendChild(button1text);
    num1.onclick = function() {calcInput.value+="1"};

    var num2 = document.createElement("BUTTON");
    num2.setAttribute('class' , 'calcButton');
    button2text = document.createTextNode("2");	
    num2.appendChild(button2text);
    num2.onclick = function() {calcInput.value+="2"};

    var num3 = document.createElement("BUTTON");
    num3.setAttribute('class' , 'calcButton');
    button3text = document.createTextNode("3");	
    num3.appendChild(button3text);
    num3.onclick = function() {calcInput.value+="3"};

    var textplus = document.createElement("BUTTON");
    textplus.setAttribute('class' , 'keyCalcButton');
    buttontextplus = document.createTextNode("+");	
    textplus.appendChild(buttontextplus);
    textplus.onclick = function() {calcInput.value+="+"};

   
	td1.appendChild(num1);
    td2.appendChild(num2);
    td3.appendChild(num3);
    td4.appendChild(textplus);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);

    var tr2 = document.createElement('tr');   
    
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    var td8 = document.createElement('td');
   
    var num4 = document.createElement("BUTTON");
	num4.setAttribute('class' , 'calcButton');
    button4text = document.createTextNode("4");	
    num4.appendChild(button4text);
    num4.onclick = function() {calcInput.value+="4"};

    var num5 = document.createElement("BUTTON");
    num5.setAttribute('class' , 'calcButton');
    button5text = document.createTextNode("5");	
    num5.appendChild(button5text);
    num5.onclick = function() {calcInput.value+="5"};
    
    var num6 = document.createElement("BUTTON");
    num6.setAttribute('class' , 'calcButton');
    button6text = document.createTextNode("6");	
    num6.appendChild(button6text);
    num6.onclick = function() {calcInput.value+="6"};

    var minus = document.createElement("BUTTON");
    minus.setAttribute('class' , 'keyCalcButton');
    buttonminustext = document.createTextNode("-");	
    minus.appendChild(buttonminustext);
    minus.onclick = function() {calcInput.value+="-"};

	td5.appendChild(num4);
    td6.appendChild(num5);
    td7.appendChild(num6);
    td8.appendChild(minus);
    tr2.appendChild(td5);
    tr2.appendChild(td6);
    tr2.appendChild(td7);
    tr2.appendChild(td8);
    table.appendChild(tr2);
    

    var tr3 = document.createElement('tr');   
    
    var td9 = document.createElement('td');
    var td10 = document.createElement('td');
    var td11 = document.createElement('td');
    var td12 = document.createElement('td');
   
    var num7 = document.createElement("BUTTON");
    num7.setAttribute('class' , 'calcButton');
    button7text = document.createTextNode("7");	
    num7.appendChild(button7text);
    num7.onclick = function() {calcInput.value+="7"};

    var num8 = document.createElement("BUTTON");
    num8.setAttribute('class' , 'calcButton');
    button8text = document.createTextNode("8");	
    num8.appendChild(button8text);
    num8.onclick = function() {calcInput.value+="8"};
    
    var num9 = document.createElement("BUTTON");
    num9.setAttribute('class' , 'calcButton');
    button9text = document.createTextNode("9");	
    num9.appendChild(button9text);
    num9.onclick = function() {calcInput.value+="9"};

    var mult = document.createElement("BUTTON");
    mult.setAttribute('class' , 'keyCalcButton');
    buttonmulttext = document.createTextNode("x");	
    mult.appendChild(buttonmulttext);
    mult.onclick = function() {calcInput.value+="*"};

	td9.appendChild(num7);
    td10.appendChild(num8);
    td11.appendChild(num9);
    td12.appendChild(mult);
    tr3.appendChild(td9);
    tr3.appendChild(td10);
    tr3.appendChild(td11);
    tr3.appendChild(td12);
    table.appendChild(tr3);


    var tr4 = document.createElement('tr');   
    
    var td13 = document.createElement('td');
    var td14 = document.createElement('td');
    var td15 = document.createElement('td');
    var td16 = document.createElement('td');
   
    var clearBut = document.createElement("BUTTON");
    clearBut.setAttribute('class' , 'keyCalcButton');
    clearButtext = document.createTextNode("C");	
    clearBut.appendChild(clearButtext);
    clearBut.onclick = function() {calcInput.value=""};

    var num0 = document.createElement("BUTTON");
    num0.setAttribute('class' , 'calcButton');
    button0text = document.createTextNode("0");	
    num0.appendChild(button0text);
    num0.onclick = function() {calcInput.value+="0"};
    
    var equale = document.createElement("BUTTON");
    equale.setAttribute('class' , 'keyCalcButton');
    buttonequaletext = document.createTextNode("=");	
    equale.appendChild(buttonequaletext);
    equale.onclick = function() {calcInput.value = eval(calcInput.value)};

    var divide = document.createElement("BUTTON");
    divide.setAttribute('class' , 'keyCalcButton');
    buttondividetext = document.createTextNode("/");	
    divide.appendChild(buttondividetext);
    divide.onclick = function() {calcInput.value+="/"};

	td13.appendChild(clearBut);
    td14.appendChild(num0);
    td15.appendChild(equale);
    td16.appendChild(divide);
    tr4.appendChild(td13);
    tr4.appendChild(td14);
    tr4.appendChild(td15);
    tr4.appendChild(td16);
    table.appendChild(tr4);

    calc.appendChild(table);
    document.body.appendChild(calc);

}

function goToCalc (event){
	
	romoveProfilePage();
	document.body.style.backgroundImage = "";
	document.body.style.backgroundColor = "#64C3F6";

	var newCalc = document.createElement("BUTTON");
	newCalc.setAttribute('class' , 'Calculator');
	text = document.createTextNode('new Calculator');
	newCalc.appendChild(text);
	document.body.appendChild(newCalc);
	newCalc.addEventListener('click', calc);
	calc();


    
}

function goToFirstPage(event){
		
	romoveProfilePage();
	runProg();
	
	alert("you logged out successfully");
}


function checkValidInput(event) {
	var tmpName = userNameInput.value;
	var tmpPassword = userPasswordInput.value;
	
	if(tmpName !== 'admin' || tmpPassword !== 'admin'){
		errorRegMsg.style.visibility = "visible";
		userNameInput.value ="";
		userPasswordInput.value = "";

	}
	else{
		errorRegMsg.style.visibility = "hidden";
		userNameInput.value ="";
		userPasswordInput.value = "";
		myProfilePage();
	}
		
}
 
function runProg(){ 
		
	document.body.style.backgroundImage = "url('imgBack.jpg')";
	document.body.style.backgroundSize = "cover";
	document.body.style.backgroundRepeat = "no-repeat";
	title = document.createElement('p');
	title.textContent = "The Calculator App";
	title.setAttribute('class' , 'appTitle');
	document.body.appendChild(title);

	div = document.createElement('p');
	div.textContent = "Name:";
	div.setAttribute('class' , 'userName');
	document.body.appendChild(div);


	userNameInput = document.createElement('INPUT');
	userNameInput .setAttribute('class' , 'nameInput');
	div.appendChild(userNameInput);
	
	div2 = document.createElement('p');
	div2.textContent = "Password:";
	div2.setAttribute('class' , 'password');
	document.body.appendChild(div2);


	userPasswordInput  = document.createElement('INPUT');
	userPasswordInput .setAttribute('class' , 'passwordInput');
	div2.appendChild(userPasswordInput);

	errorRegMsg = document.createElement('p');
	errorRegMsg.textContent = "wrong user name or password";
	errorRegMsg.setAttribute('class' , 'errorMsg');
	document.body.appendChild(errorRegMsg);
	errorRegMsg.style.visibility = "hidden";

	but = document.createElement('BUTTON');
	but.setAttribute('class' , 'but');
	text = document.createTextNode('Submmit');
	but.appendChild(text);
	document.body.appendChild(but);


		

	but.addEventListener('click', checkValidInput);
}

runProg();












