function f5() {
  var practice = document.getElementById("practice");
  var xhttp = new XMLHttpRequest();
  xhttp.open(
    "GET",
    "https://api.betterdoctor.com/2016-03-01/practices?name=terry&skip=0&limit=10&user_key=41cfe2558948b9ea0d3291f259d0c55b"
  );
  xhttp.send();
  xhttp.onload = function() {
    var obj = JSON.parse(xhttp.responseText);
    for (var i = 0; i < 8; i++) {
      var div = document.createElement("div");
      div.setAttribute("id", "practicebio");
      div.setAttribute("style", "background-color:white");
      //create heading
      var h1 = document.createElement("h1");
      h1.innerHTML =
        obj.data[i].doctors[0].profile.first_name +
        " " +
        obj.data[i].doctors[0].profile.last_name;
      div.append(h1);
      //create p
      var p = document.createElement("p");
      p.innerHTML =
        obj.data[i].visit_address.street +
        " " +
        obj.data[i].visit_address.city +
        " " +
        obj.data[i].visit_address.state;
      div.append(p);
      var img = document.createElement("img");
      img.setAttribute("src", obj.data[i].doctors[0].profile.image_url);
      var p1 = document.createElement("p");
      p1.setAttribute("style", "font-size:40px");
      p1.append(" ");
      p1.append(img);
      div.append(p1);
      //add p
      var p3 = document.createElement("p");
      p3.setAttribute("style", "font-size:30px");
      p3.append(" ");
      p3.append(obj.data[i].doctors[0].specialties[0].description);
      div.append(p3);
      practice.append(div);
      //create p
      var p2 = document.createElement("p");
      p2.setAttribute("style", "font-size:30px");
      p2.append("UID:");
      p2.append(" ");
      p2.append(obj.data[i].doctors[0].uid);
      div.append(p2);
      //create p
      var p3 = document.createElement("p");
      p3.setAttribute("style", "font-size:40px");
      p3.append("Phone:");
      p3.append(" ");
      p3.append(obj.data[i].phones[0].number);
      div.append(p3);
      practice.append(div);
    }
  };
}
