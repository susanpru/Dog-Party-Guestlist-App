//dog constructor
function Dog(name, breed, age) {
  this.name = name;
  this.breed = breed;
  this.age = age;
}
//UI constructor
function UI(){}
//add dog to List
UI.prototype.addDogToList = function(dog) {
  const list = document.getElementById("guest-list");
  const row = document.createElement("tr");
  row.innerHTML = `<td>${dog.name}</td>
                   <td>${dog.breed}</td>
                   <td>${dog.age}</td>
                   <td><a href="#" class="delete">X</a></td>`;
    list.appendChild(row);
}
UI.prototype.clearFields = function() {
  document.getElementById("name").value = "";
  document.getElementById("breed").value = "";
  document.getElementById("age").value = "";
}
UI.prototype.showAlert = function(message, className) {
  //create div
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div .appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const form = document.getElementById("guest-form");
  container.insertBefore(div, form);

  setTimeout(function(){
    document.querySelector(".alert").remove();
  },3000);
}
UI.prototype.deleteDog = function(target){
  if(target.className === "delete") {
    target.parentElement.parentElement.remove();
  }
}


//event Listener submit
document.getElementById("guest-form").addEventListener("submit", function(e){
  const name = document.getElementById("name").value;
  const breed = document.getElementById("breed").value;
  const age = document.getElementById("age").value;
 //instantiate dog
  const dog = new Dog(name, breed, age);
  const ui = new UI();

  if(name === "" || breed === "" || age === "") {
    ui.showAlert("please fill out all sections", "error");
  }else {

//add dog
  ui.addDogToList(dog);
  ui.clearFields();
  ui.showAlert("dog is coming!", "success");

  e.preventDefault();
}});
document.getElementById("guest-list").addEventListener("click", function(e){

  const ui = new UI();
  ui.deleteDog(e.target);
  ui.showAlert("Dog is no longer coming", "error");


  e.preventDefault();
});
