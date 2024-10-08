var button = document.getElementById("fetch");

      button.addEventListener("click", buttonClickHandler);

      

      function buttonClickHandler() {
        const xhr = new XMLHttpRequest(); 
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

        console.log("button clicked");

        
        xhr.onprogress = function () {
          console.log("On progress");
        };

    
        xhr.onload = function () {
          console.log(this.status);
          if (this.status == 200 || this.status == 201) {
            const post = JSON.parse(this.responseText); 
            console.log(post);
            displayUser(post);
          } else {
            console.log("Not found");
          }
        };
        console.log(this.status);
        xhr.send();
        console.log("END of req");
        console.log("END");
      }

      function displayUser(post) {
        
        const userList = document.getElementById("post-list");
        userList.innerHTML = ""; 

        post.forEach((user) => {
          let userDiv = document.createElement("div");
          userDiv.classList.add("user-card");

          userDiv.innerHTML = `

            <h3>${user.userId}</h3>
            <h4>${user.id}</h4>
            <p>${user.title}</p>
            <p>${user.body}</p>
            `;
          userList.appendChild(userDiv);
        });
      }