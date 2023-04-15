let employees = [];

document.querySelector("form").addEventListener("submit", Add);

function Add(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let prof = document.getElementById("prof").value;
  let age = document.getElementById("age").value;

  if (name.trim() === "" || prof.trim() === "" || age.trim() === "") {
    document.getElementById("error-message").textContent =
      "Error : Please Make sure All the fields are filled before adding in an employee !";
    document.getElementById("success-message").textContent = "";
    alert("hi");
  }
  // console.log(employees);
  const id = employees.length + 1;
  const obj = {
    id,
    name,
    prof,
    age,
  };

  employees.push(obj);
  displayEmployee(obj);
  document.getElementById("success-message").textContent =
    "Success: Employee Added!";
  document.getElementById("error-message").textContent = "";
  document.querySelector("form").reset();
}
// console.log(employees);

// Display emp////////////////////

function displayEmployee(obj) {
  const addedEmp = document.getElementById("addedEmp");
  addedEmp.innerHTML = "";

  employees.forEach((item) => {
    const empList = document.createElement("div");
    empList.className = "emp-list";

    const idSpan = document.createElement("span");
    idSpan.textContent = `${obj.id}`;
    empList.appendChild(idSpan);

    const nameSpan = document.createElement("span");
    nameSpan.textContent = `Name:${obj.name}`;
    empList.appendChild(nameSpan);

    const profSpan = document.createElement("span");
    profSpan.textContent = `Profession:${obj.prof}`;
    empList.appendChild(profSpan);

    const ageSpan = document.createElement("span");
    ageSpan.textContent = `Age:${obj.age}`;
    empList.appendChild(ageSpan);

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-employee-button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      const index = employees.findIndex((emp) => emp.id === obj.id);
      employees.splice(index, 1);
      displayEmployee();
    });

    empList.appendChild(deleteButton);
    addedEmp.appendChild(empList);
  });
}
