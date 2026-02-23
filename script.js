function fetchUsers() {

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            displayUsers(data);
        })
        .catch(error => {
            document.getElementById("userContainer").innerHTML =
                "<p>Error loading data!</p>";
            console.log("Error:", error);
        });
}

function displayUsers(users) {

    const container = document.getElementById("userContainer");
    container.innerHTML = "";

    users.forEach(user => {
        const userDiv = document.createElement("div");
        userDiv.classList.add("userCard");

        userDiv.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address.city}</p>
        `;

        container.appendChild(userDiv);
    });
}

fetchUsers();
