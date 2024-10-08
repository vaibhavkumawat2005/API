var button = document.getElementById("fetch");

      button.addEventListener("click", buttonClickHandler);

      

      function buttonClickHandler() {
        const xhr = new XMLHttpRequest(); 
        xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);

        console.log("button clicked");

        // waiting state
        xhr.onprogress = function () {
          console.log("On progress");
        };

    
        xhr.onload = function () {
          console.log(this.status);
          if (this.status == 200 || this.status == 201) {
            const todos = JSON.parse(this.responseText); 
            console.log(todos);
            displayUser(todos);
          } else {
            console.log("Not found");
          }
        };
        console.log(this.status);
        xhr.send();
        console.log("END of req");
        console.log("END");
      }

      function displayUser(todos) {
        
        const userList = document.getElementById("todo-list");
        userList.innerHTML = ""; 

        todos.forEach((user) => {
          let userDiv = document.createElement("div");
          userDiv.classList.add("user-card");

          userDiv.innerHTML = `

            <h3>${user.userId}</h3>
            <p>${user.id}</p>
            <p>${user.title}</p>
            <p>${user.completed}</p>
            `;
          userList.appendChild(userDiv);
        });
      }