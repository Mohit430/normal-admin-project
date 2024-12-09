document.getElementById("btn1").addEventListener("click",add);

async function add(e) {
    e.preventDefault(); //to prevent defaultbehavior of form submission


    let empno = document.getElementById("eno").value;
    let myname = document.getElementById("nm").value;
    let mycity = document.getElementById("city").value;
    let mysalary = document.getElementById("salary").value;

    let url = "http://localhost:3000/employees";
    

    //post request
    try {
        let response = await fetch(url,{
            method:"POST",
            body:JSON.stringify({
                employeeno:empno,
                employeename:myname,
                city:mycity,
                salary:mysalary
            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
        });

        console.log(response);

        let value = await response.json();
        console.log(value);
        alert("Employee added successfully");

    
}
    catch (error) {
        console.log( error);
        alert("Failed to add employee");
    }
}


















const sideMenu = document.querySelector(".sidebar");
const menuBtn = document.querySelector("#bar");
const closeBtn = document.querySelector(".close");
menuBtn.addEventListener("click", () => {
sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
sideMenu.style.display = "none";
});