const email = document.getElementById("email");
const pass = document.getElementById("pass");
const buttton = document.getElementById("signin");

buttton.addEventListener("click", () => {
  fetch("http://localhost:7070/users", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      const comparision = data.find(
        (ele) => ele.email === email.value && ele.password === pass.value
      );
      console.log(comparision);
      if (comparision != null) {
        alert("logged in successfully");
        localStorage.setItem("token", JSON.stringify(Date.now()));
        window.location.href = "./home.html";
      } else {
        alert("You are not signed in");
      }
    });
});