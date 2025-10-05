document.getElementById("fetchBtn").addEventListener("click", fetchUsers);

function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => displayUsers(data))
    .catch(error => console.error("Error fetching data:", error));
}

function displayUsers(users) {
  const container = document.getElementById("userContainer");
  container.innerHTML = "";
  users.slice(0, 5).forEach(user => {
    const userCard = document.createElement("div");
    userCard.classList.add("user-card");
    userCard.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>City:</strong> ${user.address.city}</p>
      <p><strong>Company:</strong> ${user.company.name}</p>
    `;
    container.appendChild(userCard);
  });
}