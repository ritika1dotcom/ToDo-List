var myNode = document.getElementsByTagName("li");
var i;
for(i = 0; i < myNode.length; i++)
{
    var button = document.createElement("BUTTON");
    var txt = document.createTextNode("\u00D7");
    button.className = "close";
    button.appendChild(txt);
    myNode[i].appendChild(button);
}

var close = document.getElementsByClassName("close");
var j;
for(j = 0; j < close.length; j++)
{
    close[j].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}
var list = document.querySelector('ul');
list.addEventListener('click',function(ev)
{
    if(ev.target.tagName === 'LI')
    {
        ev.target.classList.toggle('checked');
    }
},false);

function newElement()
{
    var j;
    var li = document.createElement("li");
    var inputValue = document.getElementById("myinput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if( inputValue === '')
    {
        alert("You must write something");
    }
    else
    {
        document.getElementById("myUl").appendChild(li);

    }
    document.getElementById("myinput").value = "";
    var button = document.createElement("BUTTON");
    var txt = document.createTextNode("\u00D7");
    button.className = "close";
    button.appendChild(txt);
    li.appendChild(button);

    for(j = 0; j < close.length; j++)
    {
        close[j].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}