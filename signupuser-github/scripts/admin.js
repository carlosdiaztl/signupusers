let users=[];
const contenedorcartas=document.getElementById("contenedorcartas")
const APIUSUARIOS= "http://localhost:3000/usuarios"
const getData=async(url)=>{
    const info=  await fetch(url);
    const data= await info.json();
    users=data
    console.log(users);
    rendercards()
}
document.addEventListener('DOMContentLoaded',getData(APIUSUARIOS))

const rendercards =()=>{
    contenedorcartas.innerHTML="";
    users.forEach((item)=>{
        contenedorcartas.innerHTML +=`
       
        <section class="cartas">
        
        <div class="divimg">
            <figure>

                <img src=" ${item.img} " alt="">
            </figure>
                
        </div>
        <div class="divinfo">
            <p>name ${item.name} </p>
            <p>last name${item.apellidos} </p>
            <p> email${item.email} </p>
            <p> phrase${item.frase} </p>


        </div>
        <div class="actions">
        <button class="delete" name"${item.id}> delete</button>
        <button class="editar" name"${item.id}> editar</button>
        </div>

        

    </section>`

    })

    const btnDeletes = document.getElementsByClassName('delete');
    const btnEdits = document.getElementsByClassName('editar');

    //Listeners
    Array.from(btnDeletes).forEach((element) => {
        let id = element.getAttribute('name');
        element.addEventListener('click', () => {
            handleDelete(id);
        })
    });

    Array.from(btnEdits).forEach((element) => {
        let id = element.getAttribute('name');
        element.addEventListener('click', () => {
            handleEdit(id);
        })
    });

}

const handleDelete = async (id) => {
    try {
        let response = await fetch(`${APIUSUARIOS}/${id}`,{
            method: 'DELETE'
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
    getData(APIUSUARIOS);
}