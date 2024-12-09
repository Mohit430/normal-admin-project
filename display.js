async function datashow() {
    let mytable= `
    <table border= "1px" >
    <tr>
    <th>employee no </th>
    <th>employee name </th>
    <th>city </th>
    <th>salary </th>
    </tr>
    `;

    //url of the server to fetch data
    let url= `http://localhost:3000/employees`
    
    //get data from server
    let myobj= await fetch(url);
    console.log(myobj);

    //converting response obj to json obj
    let data= await myobj.json();
    console.log(data);

    //looping through each obj in the array
    data.map((key)=>
    {
        mytable+=`
        <tr>
        <td>${key.employeeno}</td>
        <td>${key.employeename}</td>
        <td>${key.city}</td>
        <td>${key.salary}</td>
        </tr>
        `
    })
    mytable += "</table>\n";
    document.getElementById("demo").innerHTML=mytable;
}
datashow();




const sideMenu = document.querySelector(".sidebar");
const menuBtn = document.querySelector("#bar");
const closeBtn = document.querySelector(".close");
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});