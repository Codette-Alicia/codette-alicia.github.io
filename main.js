document.getElementById("searchBar").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      let num = document.getElementById("searchBar").value.trim();
      
      if (num === "1") {
        window.location.href = "p1.html";
      }
      else if (num === "2") {
        window.location.href = "p2.html";
      }
      else if (num === "3") {
        window.location.href = "p3.html";
      }
      else if (num === "0") {
        window.location.href = "index.html"
      }
      else {
        alert("Invalid. To discover type 1, 2 or 3. For home type 0.");
      }
    }
  });
