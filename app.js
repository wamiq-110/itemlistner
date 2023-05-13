var form=document.getElementById('form')
console.log(form);
var input=document.getElementById('input')
var btn=document.getElementById('btnSubmit')
var item=document.getElementById('items')
form.addEventListener('submit',Item)

function Item(e){
console.log(e);
e.preventDefault();
var newValue=input.value
console.log(newValue);
var li=document.createElement('li');
var btnDel=document.createElement('button')
btnDel.appendChild(document.createTextNode('X'))
btnDel.className+="btn btn-danger btn-sm float-end delete "
li.appendChild(btnDel)
li.className='list-group-item'
var text=document.createTextNode(newValue)
li.appendChild(text)
console.log(li);
item.appendChild(li)

}
item.addEventListener('click',del)
function del(e){
    if(e.target.classList.contains('delete')){
        console.log('click');
         let li=e.target.parentElement;
         item.removeChild(li)
    }
}
