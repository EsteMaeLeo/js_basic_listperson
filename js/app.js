const people = [
  new Person("John", "Walker", 35),
  new Person("Steven", "Johnson", 23),
];

function showPeople() {
  let texto = "";
  for (let person of people) {
    texto += `<li>Name: ${person.name} ${person.lastname} age: ${person.age}`;
  }
  document.getElementById("personas").innerHTML = texto;
}

function addPerson() {
  //another away to get the form
  const forma = document.forms["forma"];
  const nombre = forma["nombre"];
  const apellido = forma["apellido"];
  const edad = forma["edad"];
  if (nombre.value != " " && apellido.value != " " && edad.value) {
    const persona = new Person(nombre.value, apellido.value, edad.value);
    people.push(persona);
    console.log(persona);
    showPeople();
  }
}
