var count=0;
var dr1,dr2,dr3,dr4,dr5,dr6;
var cf1=0;
var cf2=0;
var cf3=0;
var r1=[], r2=[], r3=[], r4=[], v1=[], v2=[], l1=[], s1, s2, c1=[], w, f1,f2;
var a11,a22,r11,r22;
function add(x,y)
{ 
	var z=[];
	z[0]=x[0] + y[0];
	z[1]=x[1] + y[1];
	return z;
}
function mult(x,y)
{ 
	var z=[];
	z[0]=(x[0] * y[0]) - (x[1] * y[1]);
	z[1]=(x[0] * y[1]) + (x[1] * y[0]);
	return z;
}
function div(x,y)
{ 
	var z=[]; var t=[];
	t[0]=(y[0]) / ((y[0] * y[0]) + (y[1] * y[1]));
	t[1]=(-1 * y[1]) / ((y[0] * y[0]) + (y[1] * y[1]));
	z=mult(x,t);
	return z;
}

/////////////////////////////// The code starts from here/////////////////////////////////////
function perform1()
	{
		s1=parseFloat(document.getElementById('s1').value);
		s2=parseFloat(document.getElementById('s2').value);
		if (s1==1 && s2==2 )
		{	cf1=1;
			execute_ckt(0);
			if(cf3==1){
				document.f1.A11.value = a11;
				r11=v1[0]/a11;
				document.f1.r11.value = r11;
			}
		}
		else{
			Alert.render("Please select S1 to Power and S2 to Short for case 1.");
		}
		
	}
	function perform2()
	{
		s1=parseFloat(document.getElementById('s1').value);
		s2=parseFloat(document.getElementById('s2').value);
		if (s1==2 && s2==1)
		{cf2=1;
			execute_ckt(0);
			if(cf3==1){
				document.f1.A22.value = a22;
				r22= v2[0]/a22;
				document.f1.r22.value = r22;
			}
		}
		else{
			Alert.render("Please select S1 to Short and S2 to Power for case 1.");
		}
		
	}
	function perform3()
	{
		if(cf1==1 && cf2==1)
		{
			count=count+1;
			cf1=0; cf2=0;
			dr1=v1[0]; dr2=a11; dr3=r11; dr4=v2[0]; dr5=a22; dr6=r22; 
			document.f1.A1.value = 0; document.f1.A11.value = 0; document.f1.r11.value = 0; perform_meter2();
			document.f1.A2.value = 0; document.f1.A22.value = 0; document.f1.r22.value = 0; perform_meter1();
			var image = document.getElementById('myImage');
			image.src = "./images/s1.png"; cf3=0;
			Alert.render("The observation table is updated. Change the resistance and voltage source values to take another observation.");
			if(count==1)
			{document.f1.tr1.value=dr1; document.f1.tr2.value=dr2; document.f1.tr3.value=dr3; document.f1.tr4.value=dr4;
			document.f1.tr5.value=dr5; document.f1.tr6.value=dr6; }
			else if(count==2)
			{document.f1.tr10.value=dr1; document.f1.tr20.value=dr2; document.f1.tr30.value=dr3; document.f1.tr40.value=dr4;
			document.f1.tr50.value=dr5; document.f1.tr60.value=dr6;}
			else if(count==3)
			{document.f1.tr11.value=dr1; document.f1.tr21.value=dr2; document.f1.tr31.value=dr3; document.f1.tr41.value=dr4;
			document.f1.tr51.value=dr5; document.f1.tr61.value=dr6; }
			else if(count==4)
			{document.f1.tr12.value=dr1; document.f1.tr22.value=dr2; document.f1.tr32.value=dr3; document.f1.tr42.value=dr4;
			document.f1.tr52.value=dr5; document.f1.tr62.value=dr6;}
			else
			{document.f1.tr13.value=dr1; document.f1.tr23.value=dr2; document.f1.tr33.value=dr3; document.f1.tr43.value=dr4;
			document.f1.tr53.value=dr5; document.f1.tr63.value=dr6;}
		}
		else
		{
			Alert.render("Please simulate all the 2 cases first.");
		}
	}	
	function printDiv(divName) {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;
	 
     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
}
function changeImage() {
	
		var image = document.getElementById('myImage');
		if (image.src.match("s1")) {
			var fuse1 = document.getElementById('led1');
			var fuse2 = document.getElementById('led2');
			if (fuse1.src.match("led_off")) { fuse1.src = "./images/led_on.png"; document.f1.r3.value = 100;}
			if (fuse2.src.match("led_off")) { fuse2.src = "./images/led_on.png"; document.f1.r3.value = 200;} 
			
			document.f1.f1.setAttribute('readonly', 'readonly');
			document.f1.f2.setAttribute('readonly', 'readonly');
			document.f1.r1.setAttribute('readonly', 'readonly');
			document.f1.r2.setAttribute('readonly', 'readonly');
			document.f1.r3.setAttribute('readonly', 'readonly');
			document.f1.r4.setAttribute('readonly', 'readonly');
			document.f1.v1.setAttribute('readonly', 'readonly');
			document.f1.v2.setAttribute('readonly', 'readonly');
			document.f1.l1.setAttribute('readonly', 'readonly');
			document.f1.c1.setAttribute('readonly', 'readonly');
			image.src = "./images/s2.png"; cf3=1;
			execute_ckt(0);
		} else {
			image.src = "./images/s1.png"; cf3=0;
			document.f1.f1.removeAttribute('readonly');
			document.f1.f2.removeAttribute('readonly');
			document.f1.r1.removeAttribute('readonly');
			document.f1.r2.removeAttribute('readonly');
			document.f1.r3.removeAttribute('readonly');
			document.f1.r4.removeAttribute('readonly');
			document.f1.v1.removeAttribute('readonly');
			document.f1.v2.removeAttribute('readonly');
			document.f1.l1.removeAttribute('readonly');
			document.f1.c1.removeAttribute('readonly');
			document.f1.A1.value = 0; document.f1.A2.value = 0; perform_meter1(); perform_meter2();
			
		}
	}
	function execute_ckt(aa)
	{
		document.f1.A1.value=0; perform_meter2();
		document.f1.A2.value=0; perform_meter1();
		var z1=[], vn1=[], i1=[];
		var z3=[], i2=[];
		f1=parseFloat(document.getElementById('f1').value);
		f2=parseFloat(document.getElementById('f2').value);
		r1[0]=parseFloat(document.getElementById('r1').value); r1[1]=0;
		r2[0]=parseFloat(document.getElementById('r2').value); r2[1]=0;
		r3[0]=parseFloat(document.getElementById('r3').value); r3[1]=0;
		r4[0]=parseFloat(document.getElementById('r4').value); r4[1]=0;
		v1[0]=parseFloat(document.getElementById('v1').value); v1[1]=0;
		v2[0]=parseFloat(document.getElementById('v2').value); v2[1]=0;
		s1=parseFloat(document.getElementById('s1').value);
		s2=parseFloat(document.getElementById('s2').value);
		if (s1==1 && s2==2 && cf3==1)
		{cf1=1;
			w = 2 * 3.141 * f1;
			l1[1]=((w * parseFloat(document.getElementById('l1').value)) * 0.001); l1[0]=0;
			c1[1]=(-1 / ((w * parseFloat(document.getElementById('c1').value)) * 0.000001)); c1[0]=0;
			z3=div(mult(div(add(mult(add(r2,r3),c1),mult(r2,r3)),add(r3,c1)),add(r4,l1)),add(div(add(mult(add(r2,r3),c1),mult(r2,r3)),add(r3,c1)),add(r4,l1)));
			i2 = div(div(mult(mult(r3,c1),div(mult(z3,v1), add(z3,r1))), add(mult(add(r2,r3),c1), mult(r2,r3))),r3);
			a11 = Math.sqrt((i2[0] * i2[0]) + (i2[1] * i2[1]));
			document.f1.A1.value = a11; perform_meter2();
			var fuse = document.getElementById('led2');
			if (a11 > 5 || isNaN(a11))
				{
					fuse.src = "./images/led_off.png";
					document.getElementById("led2").style["cursor"] = "pointer";
					Alert.render('Click on the fuse indicator to repair it and increase the resistance value.');
					changeImage();
				}
		}
		else if (s1==2 && s2==1 && cf3==1)
		{cf2==1;
			w = 2 * 3.141 * f2;
			l1[1]=((w * parseFloat(document.getElementById('l1').value)) * 0.001); l1[0]=0;
			c1[1]=(-1 / ((w * parseFloat(document.getElementById('c1').value)) * 0.000001)); c1[0]=0;
			z1= div(add(mult(add(r4,l1),add(r1,r2)), mult(r1,r2)), add(add(r1,r4),l1));
			vn1= div(mult(mult(add(r4,l1),r1), div(mult(mult(z1,c1),v2), add(mult(z1,c1), mult(r3,add(z1,c1))))), add(mult(add(r4,l1),add(r1,r2)), mult(r1,r2)));
			i1= div(vn1,r1);
			a22 = Math.sqrt((i1[0] * i1[0]) + (i1[1] * i1[1]));
			document.f1.A2.value = a22; perform_meter1();
			var fuse = document.getElementById('led1');
			if (a22 > 5 || isNaN(a22))
				{
					fuse.src = "./images/led_off.png";
					document.getElementById("led1").style["cursor"] = "pointer";
					Alert.render('Click on the fuse indicator to repair it and increase the resistance value.');
					changeImage();
				}
		}
		else if (cf3==0 && aa==0)
		{
			Alert.render("Please Switch on the board first.");
		}
		else
		{}
	}
	function changemode()
		{
			var image = document.getElementById('myImage');
			image.src = "./images/s1.png"; cf3=0;
			
			document.f1.A1.value = 0; document.f1.A2.value = 0; perform_meter1(); perform_meter2();
		}
	function change_led1() {
		var fuse = document.getElementById('led1');
		fuse.src = "./images/led_on.png"; 
		document.f1.r1.value = 100;
	}
	function change_led2() {
		var fuse = document.getElementById('led2');
		fuse.src = "./images/led_on.png"; 
		document.f1.r3.value = 200;
	}





