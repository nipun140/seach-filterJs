const myInput = document.getElementById("myInput");

//METHOD 1

//as soon as the input type search recieves an input i.e on kry press
// myInput.onkeyup = () => {
//   let filter = myInput.value.toUpperCase(); //converted to uppercase for comparison

//   let tableid = document.getElementById("mytable");

//   //   search all tr elements in this table only
//   let trArray = tableid.getElementsByTagName("tr"); //html collection

//   for (var i = 0; i < trArray.length; i++) {
//     let td = trArray[i].getElementsByTagName("td")[0]; //search the first td element in the tr row ie name column

//     //if the td exists in the table and is not null
//     if (td) {
//       let textValue = td.innerHTML;

//       if (textValue.toUpperCase().indexOf(filter) > -1) {
//         //if the filter string exists in the textValue
//         trArray[i].style.display = "table-row";
//       } else {
//         trArray[i].style.display = "none";
//       }
//     }
//   }
// };

//METHOD 2 Optimised

//this event is fired as soon as the search input type recieves a input,also fired when the x button is hit , when the x is hit it returns an empty string
myInput.addEventListener("input", function (e) {
  let filter = myInput.value.toUpperCase(); //converted to uppercase for comparison

  let tableid = document.getElementById("mytable");

  //   search all tr elements in this table only when input event occurs
  let trArray = tableid.getElementsByTagName("tr"); //html collection

  for (var i = 0; i < trArray.length; i++) {
    let td = trArray[i].getElementsByTagName("td")[1]; //search the first td element in the tr row ie name column

    //if the td exists in the table and is not null
    if (td) {
      let textValue = td.innerHTML;

      if (textValue.toUpperCase().indexOf(filter) > -1) {
        //if the filter string exists in the textValue
        trArray[i].style.display = "table-row";
      } else {
        trArray[i].style.display = "none";
      }
    }
  }

  //check all the table rows whose display is none, when this happens the tbody will have height zero
  checkEmptyTable();
});

let checkEmptyTable = () => {
  let tableid = document.getElementById("mytable");
  let tbodyid = tableid.querySelector("tbody");
  let alertmsg = document.getElementById("alert");
  let tbodyHeight = getComputedStyle(tbodyid).height;
  if (tbodyHeight == "0px") {
    alertmsg.classList.remove("hidden");
  } else {
    alertmsg.classList.add("hidden");
  }
};
