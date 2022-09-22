let users=[];
let elsuers=[]
let id = JSON.parse(sessionStorage.getItem("id")) || [];
const APIUSUARIOS= "http://localhost:3000/usuarios"
const getData=async(url)=>{  
try {
    const info=   await fetch(url);
    const data= await info.json();
    users=data
    console.log(users);
    const email=document.getElementById('email');
    const clave=document.getElementById('clave');
    const ingreso=document.getElementById('ingreso')
    ingreso.addEventListener('click',ingresoU)  
} catch (error) {
    console.log(error);
}
}

const ingresoU=(e)=>{
    e.preventDefault()
    let query1=email.value;
    let query2=clave.value;
    
    const user = users.find(u => u.email === query1);
    console.log(user);
    
   
    console.log(query1,query2);
        if (!user) {
            console.log('El usuario no existe');
        }
        if (query2 === user.clave) {
            console.log('Bienvenido',user.name);
            if (user.type === 'admin') {
                alert('hola admin');
                window.location.assign("/pages/admin.html");
            } else {
                const elsuer=user.id 
                id=elsuer
                sessionStorage.setItem("id", JSON.stringify(id));
                alert('hola user');
                window.location.assign("/pages/usuarios.html");
            }
        } else {
            console.log('Por favor verifique la contraseña ingresada');
            
        }    

    

}

document.addEventListener('DOMContentLoaded',getData(APIUSUARIOS))