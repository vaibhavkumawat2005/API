var button = document.getElementById("fetch");

      button.addEventListener("click", buttonClickHandler);

      

      function buttonClickHandler() {
        const xhr = new XMLHttpRequest(); 
        xhr.open("GET", "https://jsonplaceholder.typicode.com/comments", true);

        console.log("button clicked");

        xhr.onprogress = function () {
          console.log("On progress");
        };

    
        xhr.onload = function () {
          console.log(this.status);
          if (this.status == 200 || this.status == 201) {
            const comment = JSON.parse(this.responseText); 
            console.log(comment);
            displayUser(comment);
          } else {
            console.log("Not found");
          }
        };
        console.log(this.status);
        xhr.send();
        console.log("END of req");
        console.log("END");
      }

      function displayUser(comment) {
        
        const userList = document.getElementById("comment-list");
        userList.innerHTML = ""; 

        comment.forEach((user) => {
          let userDiv = document.createElement("div");
          userDiv.classList.add("user-card");

          userDiv.innerHTML = `

              <h3>${user.postId}</h3>
            <h4>${user.id}</h4>
            <p>${user.name}</p>
            <p>${user.email}</p>
            <p>${user.body}</p>
            `;
          userList.appendChild(userDiv);
        });
      }