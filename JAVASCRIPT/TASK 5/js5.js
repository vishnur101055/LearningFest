var personListElement = document.getElementById("personList");
  
fetch('people.json').then(function (response) {
  return response.json();
}).then(function (data) {
  for (var i = 0; i < data.length; i++) {
        var person = data[i];
        var name = person.name;
        var age = person.age;
      
        var listItem = document.createElement("li");
        listItem.textContent = "Name: " + name + ", Age: " + age;
      
        personListElement.appendChild(listItem);
    }
}).catch(function (error) {
  console.error("something went wrong !");
  console.error(error);
})