document.getElementById("login").addEventListener("click",login);

function login(e){
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username==""|| password==""){
        alert("All field are Required");
        return;
    }

    let storedusername = localStorage.getItem("username");
    let storedpassword = localStorage.getItem("password");

    if(storedusername == username && storedpassword==password){
        alert(`Login successfully,Welcome To my Dashboard ${username}`);
        window.location.href = "index.html";
    }
    else{
        alert("Your Information is incorrect")
    }
}