var button = document.getElementById("fetch");

      button.addEventListener("click", buttonClickHandler);

      

      function buttonClickHandler() {
        const xhr = new XMLHttpRequest(); 
        xhr.open("GET", "https://jsonplaceholder.typicode.com/albums", true);

        console.log("button clicked");

        // waiting state
        xhr.onprogress = function () {
          console.log("On progress");
        };

    
        xhr.onload = function () {
          console.log(this.status);
          if (this.status == 200 || this.status == 201) {
            const albums = JSON.parse(this.responseText); 
            console.log(albums);
            displayUser(albums);
          } else {
            console.log("Not found");
          }
        };
        console.log(this.status);
        xhr.send();
        console.log("END of req");
        console.log("END");
      }

      function displayUser(albums) {
        
        const userList = document.getElementById("album-list");
        userList.innerHTML = ""; 

        albums.forEach((user) => {
          let userDiv = document.createElement("div");
          userDiv.classList.add("user-card");

          userDiv.innerHTML = `

            <h3>${user.userId}</h3>
            <p>${user.id}</p>
            <p>${user.title}</p>
            `;
          userList.appendChild(userDiv);
        });
      }