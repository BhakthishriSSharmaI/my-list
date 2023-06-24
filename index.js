var addButton = document.getElementById('add-button');
var listInput = document.getElementById('list-input');
var listedItems = document.getElementById('listed-items');
addButton.addEventListener("click",()=>{
 
  var inputItem = listInput.value;
  if(inputItem==" ")
  return;
  const div=document.createElement("div");
  div.classList.add("listed-item");
  const para=document.createElement("p");
  para.classList.add("listed-item-text");
  div.appendChild(para);
  para.innerText=inputItem;
  const image=document.createElement("img");
  image.src="https://www.svgrepo.com/show/468533/delete-alt.svg";
  div.appendChild(image);
  listedItems.appendChild(div);

});
     