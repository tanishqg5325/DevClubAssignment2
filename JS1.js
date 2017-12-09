function check(ch){

	if (ch.keyCode===13){

		const task=document.getElementById("i01").value;

	    	if (task!=""){

		    document.getElementById("i01").value="";

		    add(task);

	    	}

	}

}



function add(task){

  	let parent=document.getElementById("left");

   	let child=document.createElement("li");

   	let d = new Date();

	child.innerHTML=task+" "+d.toDateString();

	parent.insertBefore(child,parent.childNodes[0]);

	child.addEventListener("click",final);

}



function final(){

	let child=this;

	let parent=child.parentNode;

	let target;

	if(parent.id=="left"){

        	target=document.getElementById("finished");

        	parent.removeChild(child);

        	target.insertBefore(child,target.childNodes[0]);

    	}

    	else if(parent.id=="finished")
{

        	target=document.getElementById("left");

        	parent.removeChild(child);

	        target.insertBefore(child,target.childNodes[0]);

    	}

}