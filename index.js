import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const uid = user.uid;
    let e=document.getElementById("hola")
    e.classList.remove("invisible")
    
  } else {
    
  }
});
