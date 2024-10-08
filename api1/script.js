var button = document.getElementById("fetch");

      button.addEventListener("click", buttonClickHandler);

      

      function buttonClickHandler() {
        const xhr = new XMLHttpRequest(); 
        xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

        console.log("button clicked");

        // waiting state
        xhr.onprogress = function () {
          console.log("On progress");
        };

    
        xhr.onload = function () {
          console.log(this.status);
          if (this.status == 200 || this.status == 201) {
            const users = JSON.parse(this.responseText); 
            console.log(users);
            displayUser(users);
          } else {
            console.log("Not found");
          }
        };
        console.log(this.status);
        xhr.send();
        console.log("END of req");
        console.log("END");
      }

      function displayUser(users) {
        
        const userList = document.getElementById("user-list");
        userList.innerHTML = ""; 

        users.forEach((user) => {
          let userDiv = document.createElement("div");
          userDiv.classList.add("user-card");

          userDiv.innerHTML = `

            <h3>${user.name}</h3>
            <p>${user.username}</p>
            `;
          userList.appendChild(userDiv);
        });
      }