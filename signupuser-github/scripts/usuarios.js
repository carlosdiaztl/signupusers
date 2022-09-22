const APIUSUARIOS= "http://localhost:3000/usuarios"
let id = JSON.parse(sessionStorage.getItem("id")) || [];
console.log(id);
const save=document.getElementById('save');
let users;
const formedit= document.getElementById('formedit');
const contenedorcartas=document.getElementById("contenedor")
const btnshowedit=document.getElementById('btnshowedit')
const editinfo=document.getElementById('editinfo')
const canceledit=document.getElementById('canceledit')
editinfo.classList.add('hidden')
const unshow=()=>{
    if(editinfo.classList.contains('hidden')){
        editinfo.classList.remove('hidden')
    }else{
        editinfo.classList.add('hidden')
    }
}
btnshowedit.addEventListener('click',unshow)

const unshow2=()=>{
    editinfo.classList.add('hidden')
}
canceledit.addEventListener('click',unshow2)




const getData=async(url)=>{
    const info=  await fetch(url);
    const data= await info.json();
    users=data
    console.log(users);
    const user = users.find(u => u.id === id);
    console.log(user);
    // const usuarioEncontrado= users.find((item)=>item.id == id);
    formedit.elements[0].value=user.name;
    formedit.elements[1].value=user.apellidos;
    formedit.elements[2].value=user.email;
    formedit.elements[3].value=user.clave;
    formedit.elements[4].value=user.img;
    formedit.elements[5].value=user.frase;
    
    rendercards(user)
}
document.addEventListener('DOMContentLoaded',getData(APIUSUARIOS))

const rendercards =(user)=>{
   
        contenedorcartas.innerHTML =`
        <h1>hola ${user.name} </h1>
        <section class="cardsuser">
                <div class="userimg">

                    <figure>
                        <img src="${user.img} " alt="">
                    </figure>
                </div>
                <div class="userinfo">

                    <ul>
                        <li> ${user.name} </li>
                        <li> ${user.apellidos}</li>
                        <li> ${user.email} </li>
                        <li>${user.frase}</li>
                    </ul>
                </div>
                
            </section>`

    }



const haddleUpdate = async()=>{

    const cliente={
    name: formedit.elements[0].value,
    apellidos: formedit.elements[1].value,
    email: formedit.elements[2].value,
    clave: formedit.elements[3].value,
    type:"user",
    img: formedit.elements[4].value,
    frase:formedit.elements[5].value
}
const editurl=`${APIUSUARIOS}/${id}`
console.log(editurl);
let response = await fetch(editurl,{
    method:'PUT',
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(cliente)
})
console.log(cliente);


}
save.addEventListener('click',haddleUpdate);
// const handdleEdit = async(url,id)=>{
//     const info=  await fetch(url);
//     const data= await info.json();
//     users=data
//     console.log(users);
//     const usuarioEncontrado= users.find((item)=>item.id == id);
//     console.log(usuarioEncontrado);
//     formedit.elements[0].value=usuarioEncontrado.name
// //     const user={
// //     name: form.elements[0].value,
// //     apeliidos: form.elements[1].value,
// //     email: form.elements[2].value,
// //     clave: form.elements[3].value,
// //     type: form.elements[4].value,
// //     img: form.elements[5].value,
// //     frase:form.elements[6].value
// // }

// }
// save.addEventListener('click',handdleEdit(APIUSUARIOS,id))