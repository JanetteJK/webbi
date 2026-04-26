//Load users from localStorage
function loadUsers() {
  const raw = localStorage.getItem("users");
  return raw ? JSON.parse(raw) : [];
}

//Save users
function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

//account registration
export function handleRegister() {
  const usernameIn = document.getElementById("username");
  const passwordIn = document.getElementById("password");

  const users = loadUsers();

  users.push({ usernameIn, passwordIn });
  saveUsers(users);

  alert("Account created");

  usernameIn.value = "";
  passwordIn.value = "";
}

