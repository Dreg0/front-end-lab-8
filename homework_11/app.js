window.onload = function() {
  var rootId = document.getElementById("root");
  var mainUl = document.createElement("ul");
  mainUl.id = "main_list";

  createStructure(structure, mainUl);
  rootId.appendChild(mainUl);

  function createStructure(element, parent) {
      for (var i = 0; i < element.length; i++) {

          var ul = document.createElement("ul");
          var li = document.createElement("li");
          li.className = "folder";
          var p = document.createElement("p");
          p.innerHTML = element[i].title;
          var icon = document.createElement("i");

          if (element[i].folder) {
              icon.innerHTML = "folder";
              icon.className = "material-icons folder";
          } else {
              icon.innerHTML = "insert_drive_file";
              icon.className = "material-icons file";
          }

          p.appendChild(icon);
          li.appendChild(p);
          parent.appendChild(li);
          p.addEventListener("click", runEvent);

          if (element[i].children) {
              li.appendChild(ul);

              if (element[i].folder) {
                  icon.innerHTML = "folder";
              } else {
                  p.removeEventListener("click", runEvent);
                  icon.innerHTML = "insert_drive_file";
                  icon.className = "folder";
              }

              ul.style.display = "none";
              createStructure(element[i].children, ul);
          } else if (element[i].folder && !element[i].children) {
              parent.appendChild(ul);
              var empty = document.createElement("li");
              empty.innerHTML = "Folder is empty";
              empty.className = "empty";
              li.appendChild(empty);
              empty.style.display = "none";
          }
      }
  }

  function runEvent(event) {
      if (this.nextElementSibling === null) {
          return null;
      } else if (this.nextElementSibling.style.display === "none") {
          this.nextElementSibling.style.display = "block";
          this.children[0].innerHTML = "folder_open";
      } else {
          this.nextElementSibling.style.display = "none";
          this.children[0].innerHTML = "folder";
      }
  }

};