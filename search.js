function loadDoc() {
  //search
  var name = document.getElementById("searchDoc").value;
  //create table
  var table = document.getElementById("table");
  var bio = document.getElementById("Bio");
  bio.innerHTML = "";
  table.innerHTML = "";
  var thead1 = document.createElement("thead");
  thead1.innerHTML = "";
  //create tableRow
  var tr1 = document.createElement("tr");
  tr1.setAttribute("style", "border-bottom:2px solid black");
  //table heading
  var th1 = document.createElement("th");
  th1.setAttribute("style", "border-right:2px solid black");
  th1.innerHTML = "Picture";
  tr1.append(th1);
  //table heading
  var th2 = document.createElement("th");
  th2.setAttribute("style", "border-right:2px solid black");
  th2.innerHTML = "Names";
  tr1.append(th2);
  //table headingS
  var th3 = document.createElement("th");
  th3.innerHTML = "Title";
  tr1.append(th3);
  thead1.append(tr1);
  table.append(thead1);
  table.style.display = "block";
  var tbody1 = document.createElement("tbody");
  tbody1.setAttribute("id", "tbody");
  tbody1.innerHTML = "";
  var xhttp = new XMLHttpRequest();
  xhttp.open(
    "GET",
    "https://api.betterdoctor.com/2016-03-01/doctors?name=" +
      name +
      "&skip=0&user_key=41cfe2558948b9ea0d3291f259d0c55b"
  );
  xhttp.send();
  xhttp.onload = function() {
    var obj = JSON.parse(xhttp.responseText);
    console.log(obj.data[0].profile.last_name);
    for (var i = 0; i < obj.data.length; i++) {
      var tr = document.createElement("tr");
      tr.setAttribute("id", i);
      tr.setAttribute("style", "border-bottom:1px solid black");
      var td3 = document.createElement("td");
      td3.setAttribute("style", "border-right:1px solid black");
      var img = document.createElement("img");
      img.setAttribute("src", obj.data[i].profile.image_url);
      td3.append(img);
      tr.append(td3);
      var td1 = document.createElement("td");
      var a = document.createElement("a");
      td1.setAttribute("style", "border-right:1px solid black");
      a.setAttribute("href", "#");
      a.setAttribute("class", "name");
      a.append(
        obj.data[i].profile.first_name + " " + obj.data[i].profile.last_name
      );
      td1.append(a);
      a.addEventListener("click", function(e) {
        table.innerHTML = "BIO";
        var id = parseInt(e.target.parentNode.parentNode.id);
        var h1 = document.createElement("h1");
        h1.innerHTML =
          obj.data[id].profile.first_name +
          " " +
          obj.data[id].profile.last_name;
        bio.append(h1);
        var p = document.createElement("p");
        p.innerHTML =
          obj.data[id].practices[0].visit_address.street +
          " " +
          obj.data[id].practices[0].visit_address.city +
          " " +
          obj.data[id].practices[0].visit_address.state;

        bio.append(p);
        var img = document.createElement("img");
        img.setAttribute("src", obj.data[id].profile.image_url);
        var p1 = document.createElement("p");
        p1.setAttribute("style", "font-size:40px");
        p1.append("Picture:");
        p1.append(" ");
        p1.append(img);
        bio.append(p1);
        var p2 = document.createElement("p");
        p2.setAttribute("style", "font-size:40px");
        p2.append("Specialist:");
        p2.append(" ");
        p2.append(obj.data[id].specialties[0].uid);
        bio.append(p2);
      });
      tr.append(td1);
      var td2 = document.createElement("td");
      td2.innerHTML = obj.data[i].profile.title;
      tr.append(td2);
      tbody1.append(tr);
      table.append(tbody1);
    }
  };
}
