let items = document.querySelectorAll(".item h2");
// items.forEach(item=>{
//   item.addEventListener("click",(e)=>{

//     e.stopPropagation()
//     // e.target.parentElement.className += " open-item"
//     // console.log(e)
//     if( e.target.localName=="h2"){
//       if(e.target.parentElement.classList.contains("open-item")){
//         e.target.parentElement.classList.remove("open-item")
//       }
//       e.target.parentElement.classList.add("open-item")
//       e.target.classList.toggle("byeh2")
//     }
//   })
// })

items.forEach((e) => {
  e.addEventListener("click", function () {
    if (e.parentElement.classList.contains("open-item")) {
      e.parentElement.classList.remove("open-item");
      e.parentElement.nextElementSibling.classList.remove("textoshow");
    } else {
      items.forEach((item) => {
        item.parentElement.classList.remove("open-item");
        item.parentElement.nextElementSibling.classList.remove("textoshow");
      });
      e.parentElement.classList.add("open-item");
      e.parentElement.nextElementSibling.classList.add("textoshow");
    }
  });
});