import { getAuth, createUserWithEmailAndPassword ,signOut  } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js"


let boton=document.getElementById("boton")

boton.addEventListener("click",function(evento){


    evento.preventDefault()
    let password=document.getElementById("contrasena").value

    let email=document.getElementById("correo").value

    console.log(email,password)

    const auth = getAuth();
    console.log(auth)
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
       
        const uid = user.uid;
        let e=document.getElementById("hola")
        e.classList.remove("invisible")

        alert("oky dody")
        window.location.href="./index.html"
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log("uppss"+errorMessage)
    });




})

let salir=document.getElementById("boton2")
salir.addEventListener("click",function(){

    const auth = getAuth();
    signOut(auth).then(() => {
    // Sign-out successful.
    alert("adios")
    }).catch((error) => {
    // An error happened.
    });

})