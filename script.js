let arr = [
  { id: 1, name: "Walter White", age: "21", profession: "developer" },
  { id: 2, name: "Jesse Pinkman", age: "19", profession: "developer" },
  { id: 3, name: "Saul Goodman", age: "25", profession: "admin" },
];

function PrintDeveloperbyMap() {
  const developers = arr.filter(arr => arr.profession === "developer");
  const developerNames = developers.map(developer => developer.name);
  console.log("Developers by Map: ", developerNames);
}
PrintDeveloperbyMap()

function PrintDeveloperbyForEach() {
  const developers = [];
  arr.forEach(function(arr) {
      if (arr.profession === "developer") {
          developers.push(arr.name);
      }
  });
  console.log("Developers by forEach: ", developers);
}
PrintDeveloperbyForEach()

function addData() {
  const newEmployee = { id: 4, name: "Skylar White", age: "23", profession: "intern" };
  arr.push(newEmployee);
  console.log("Employee added: ", newEmployee);
  console.log("New Employee array: ", arr);

}
addData()

function removeAdmin() {
  const filteredEmployees = arr.filter(arr => arr.profession !== "admin");
  console.log("Admin removed. New employee array: ", filteredEmployees);
}
removeAdmin();

function concatenateArray() {
  const newEmployees = [
      { id: 5, name: "Gus Fring ", age: "22", profession: "developer" },
      { id: 6, name: "Hank Schrader", age: "21", profession: "manager" },
      { id: 7, name: "Hector Salamanca", age: "25", profession: "sales" }
  ];
  const allEmployees = arr.concat(newEmployees);
  console.log("Concatenated employee array: ", allEmployees);
}
concatenateArray()
