function check(ch,ide){
	if (ch.keyCode===13) {
		const task=document.getElementById(ide).value;
	    if (task!="") {
		    document.getElementById(ide).value="";
		    add(task);
	    }
	    if(ide=="i02"){
		    let a=document.getElementById(ide);
		    erase(a);
	    }
	}
}

function add(task){
    let parent=document.getElementById("left");
    let child=document.createElement("li");
    let d = new Date();
    let edit='<button id="edit" onclick="modify(this)"><img src="https://png.icons8.com/metro/540/edit.png" alt="Edit"></button>';
    let del='<button id ="delete" onclick="erase(this)"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Trash_font_awesome.svg/2000px-Trash_font_awesome.svg.png" alt="Delete"></button>';
	child.innerHTML=task+" "+d.toDateString()+edit+del;
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

function erase(c){
    c.parentNode.parentNode.removeChild(c.parentNode);
}

function modify(c){
    let a=c.parentNode;
    a.removeEventListener("click",final);
    let tex='<input type="text" id="i02" onkeypress="check(event,this.id)">';
    a.innerHTML=tex;
}
