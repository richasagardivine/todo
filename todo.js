function add(){
    let text= document.getElementById('text').value;
    let ol= document.getElementById('list');
    let li= document.createElement('li');
    let btn= document.createElement('button');
    btn.innerText="delete";
    btn.addEventListener('click', function(){
    ol.removeChild(li);
    })
    ol.append(li);
    li.append(text);
    li.append(btn);
    document.getElementById('text').value="";
}
function delt(){
    let ol= document.getElementById('list');
    ol.innerText="";
}