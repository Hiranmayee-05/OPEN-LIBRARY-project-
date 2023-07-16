const email=document.getElementById("email");
const pass=document.getElementById("password");
const buttton=document.getElementById("signin");

buttton.addEventListener("click",() =>{
    fetch("http://localhost:8080/users",{
        method: "GET",
    }).then((res) => res.json())
    .then((data)=>{
        const comparision= data.find(
            (ele) => ele.email === email.value && ele.password === pass.value );
        console.log(comparision);
        if (comparision != null){
            alert("logged in successfully");
            localStorage.setItem("token",JSON.stringify(Date.now()));
            window.location.href = "./index.html";
        }else {
            alert("You are not signed in");
        }
    });
});