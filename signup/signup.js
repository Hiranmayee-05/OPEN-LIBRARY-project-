const email = document.getElementById("email");
const uname = document.getElementById("name");
const pass = document.getElementById("password");
const passError = document.getElementById("password-error");
const mobile = document.getElementById("mobile");
const button = document.getElementById("signup");

button.addEventListener("click", (event) => {
  event.preventDefault();

  const emailValue = email.value.trim();
  const nameValue = uname.value.trim();
  const mobileValue = mobile.value.trim();
  const passwordValue = pass.value.trim();

  if(emailValue === "" || nameValue === "" || mobileValue==="" || passwordValue===""){
    alert("Please fill in all fields.");
    return;
  }
  if(!emailValue.endsWith("@gmail.com")){
    alert("Please enter a valid Gmail address");
    return;
  }

  if(passwordValue.length<8 || passwordValue.length>15){
    passError.textContent="Password should be between 8 and 15 characters.";
    return;
  }else{
    passError.textContent="";
  }
  if (!/[A-Z]/.test(passwordValue)){
    passError.textContent = "Password should contain atleast one uppercase.";
    return;
  }else{
    passError.textContent="";
  }
  if(!/[!@#$%^&*]/.test(passwordValue)){
    passError.textContent = "Password should aatleast one special character.";
    return;
  }else{
    passError.textContent="";
  }
  if(mobileValue.length!==10 || isNaN(mobileValue)){
    alert("Please enter a avlid 10-digit mobile number.");
    return;
  }
  const dataobj = {
    email: email.value,
    name: uname.value,
    password: pass.value,
  };
  fetch("http://localhost:8080/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataobj),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Account created successfully!");
      window.location.href = "../signin/signin.html";
    });
});

pass.addEventListener("input",()=>{
  const passwordValue = pass.value.trim();

  if(passwordValue.length<8 || passwordValue.length<15){
    passError.textContent = "Password should be between 8 and 15 characters.";
  }
  else if(!/[A-Z]/.test(passwordValue)){
    passError.textContent = "Password should contain atleast one capital letter.";
  }
  else if (!/[!@#$%^&*]/.test(passwordValue)){
    passError.textContent="Password should contain atleast one special character.";
  }else{
    passError.textContent="";
  }
            
  });
