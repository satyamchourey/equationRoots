var variables= document.getElementById("degrees"),
 form = document.getElementById("qform"),
 a = document.getElementById("a"),
 b = document.getElementById("b"),
 c = document.getElementById("c"),
 root = document.getElementById("root"),r1,r2,
 deg = document.getElementById("deg");

form.addEventListener("submit",(event)=>{
    event.preventDefault(); 

     if(deg.value==1){
        r1=-b.value/a.value;
        root.innerHTML="The Root of the quadratic equation is : " + r1 ;
        form.reset();

    }
    else if(deg.value==2){
        r1= ((-b.value)+ Math.sqrt((b.value*b.value)-(4*a.value* c.value)))/(2*a.value);
        r2= ((-b.value)- Math.sqrt((b.value*b.value)-(4*a.value* c.value)))/(2*a.value);
        root.innerHTML="The Roots of the quadratic equation are : " + r1 + "," + r2;
        form.reset();
        if(Number.isNaN(r1 || r2) ){
            console.log("imaginary roots")
            root.innerHTML="The Roots of the quadratic equation are imaginary"   ;
         
        }

    }


});

 function degree (){
    
    console.log(deg.value)
    if(deg.value==1){
        root.innerHTML="";
        document.getElementById("label").innerHTML=" Constants for ax + b=0 ";
        //   console.log(  document.getElementById("qform"));
        document.getElementById("qform").style.display="block";    
        c.style.display="none";


    }else if( deg.value==2){
        root.innerHTML="";
        document.getElementById("qform").style.display="block";    
        document.getElementById("label").innerHTML=" Constants for ax <sup>2</sup> + bx + c=0 ";
        c.style.display="inline-block";
    }
    };

