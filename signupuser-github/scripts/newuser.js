const nameInput = document.getElementsByName("name")[0];
const apellidoInput = document.getElementsByName("apellido")[0];
const emailInput = document.getElementsByName("email")[0];
const imgInput = document.getElementsByName("img")[0];
const fraseInput = document.getElementsByName("frase")[0];
const enviarform = document.getElementById("enviar");
const APIUSUARIOS= "http://localhost:3000/usuarios"
//forma 2
const form = document.getElementById("formsign");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(form.elements[0].value);
  console.log(form.elements[1].value);
  console.log(form.elements[2].value);
  console.log(form.elements[3].value);
  console.log(form.elements[4].value);
  console.log(form.elements[5].value);
  console.log(form.elements[6].value);
  const newuser = {
    name: form.elements[0].value,
    apellidos: form.elements[1].value,
    email: form.elements[2].value,
    clave: form.elements[3].value,
    type: form.elements[4].value,
    img: form.elements[5].value,
    frase:form.elements[6].value
  };
  try {
    let response = await fetch(APIUSUARIOS,
        {
            method: 'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newuser)
        })
        window.location.assign("/home.html");
  } catch (error) {
    console.log(error);
    
  }
});
