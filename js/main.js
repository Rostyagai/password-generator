const nums = "0123456789";
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "!@#$%()_-";

const passwordChars = nums + chars + symbols;

const passwordInput = document.getElementById("password-input");
const showPasswordBtn = document.getElementById("show-password-btn");
const copyPasswordBtn = document.getElementById("copy-password-btn");
const generatePasswordBtn = document.getElementById("generate-password-btn");
const passwordRange = document.getElementById("password-range");
const passwordLenText = document.getElementById("password-len");
let passwordLength = 5;

const UpdatePassLengthText = () => {
  passwordLenText.innerHTML = passwordRange.value;
};

const GeneratePassword = () => {
  passwordLength = Number(passwordRange.value);
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += passwordChars[Math.floor(Math.random() * passwordChars.length)];
  }
  passwordInput.value = password;
};

const ShowPassword = () => {
  passwordInput.type === "password"
    ? (passwordInput.type = "text")
    : (passwordInput.type = "password");
  // if (passwordInput.type === "password") {
  //   passwordInput.type = "text";
  // } else {
  //   passwordInput.type = "password";
  // }
};

const CopyPassword = async () => {
  try {
    await navigator.clipboard.writeText(passwordInput.value);
  } catch (err) {
    passwordLenText.textContent = "ERROR: " + err;
  }
};

passwordRange.addEventListener("change", UpdatePassLengthText);

generatePasswordBtn.addEventListener("click", GeneratePassword);

showPasswordBtn.addEventListener("click", ShowPassword);

copyPasswordBtn.addEventListener("click", CopyPassword);
