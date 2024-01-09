let loginForm = document.getElementById("form-container");
let isLoggedIn = false;
let isLocked = false;
let loginAttempts = 0;
let availableSeats = {
  computer: { london: 1, manchester: 3, liverpool: 1 },
  medicine: { london: 1, manchester: 3, liverpool: 1 },
  marketing: { london: 1, manchester: 3, liverpool: 1 },
  arts: { london: 1, manchester: 3, liverpool: 1 },
};

function login() {
  if (isLocked) {
    alert("The system is locked.");
    return;
  }
}

function login() {
  if (isLocked) {
    alert("The system is locked.");
    return;
  }

  const username = document.getElementById("username");
  const password = document.getElementById("password");

  const usernameInput = username.value;
  const passwordInput = password.value;

  if (usernameInput.trim() === "" || passwordInput.trim() === "") {
    alert("Username and password are required.");
    return;
  }

  if (usernameInput === "admin" && passwordInput === "123") {
    isLoggedIn = true;
    alert("Successful login");
    showMenu();
  } else {
    loginAttempts++;
    alert(`Incorrect attempts: ${loginAttempts}`);
    username.value = "";
    password.value = "";
    if (loginAttempts >= 3) {
      alert("The system is locked.");
      isLocked = true;
      loginForm.style.display = "none";
      document.getElementById("bloqued").style.display = "block";
    }
  }
}

function showMenu() {
  document.getElementById("form-container").style.display = "none";
  document.getElementById("menu").style.display = "block";
}

function register() {
  const selectedProgram = document.getElementById("programs").value;
  const selectedCampus = document.getElementById("cities").value;
  const nameInput = document.getElementById("name");
  const lastNameInput = document.getElementById("lastName");

  if (nameInput.checkValidity() && lastNameInput.checkValidity()) {
    if (availableSeats[selectedProgram][selectedCampus] > 0) {
      availableSeats[selectedProgram][selectedCampus]--;
      alert("There are places available in this campus.");
    } else {
      alert(
        "There are no places available at this campus, please select another campus for your enrollment."
      );
    }

    nameInput.value = "";
    lastNameInput.value = "";
  } else {
    alert("First and last name are required.");
  }
}
