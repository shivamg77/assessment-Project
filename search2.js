function f3() {
  var table = document.getElementById("table"); //table created
  var tbody1 = document.getElementById("tbody");
  tbody1.innerHTML = "";
  table.style.display = " block";
  var xhttp = new XMLHttpRequest();
  var key = "41cfe2558948b9ea0d3291f259d0c55b"; //api_key
  xhttp.open(
    "GET",
    "https://api.betterdoctor.com/2016-03-01/specialties?user_key=41cfe2558948b9ea0d3291f259d0c55b"
  );
  xhttp.send();
  xhttp.onload = function() {
    //console.log(xhttp.responseText);
    var obj = JSON.parse(xhttp.responseText);
    for (var i = 0; i < 15; i++) {
      var tr = document.createElement("tr"); //table row
      tr.setAttribute("style", "border-bottom:2px solid black");
      var td2 = document.createElement("td"); //table data1
      td2.setAttribute("style", "border-right:2px solid black");
      td2.innerHTML = obj.data[i].name;
      tr.append(td2);
      var td3 = document.createElement("td"); //table data2
      td3.setAttribute("style", "border-right:2px solid black ; width:60%;");
      td3.innerHTML = obj.data[i].description;
      tr.append(td3);
      var td4 = document.createElement("td"); //table data3
      td4.innerHTML = obj.data[i].actor;
      tr.append(td4);
      tbody1.append(tr); //append in table
    }
  };
}
