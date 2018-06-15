var db = firebase.firestore();

function ingresar(score,name){

   db.collection("juego").add({
    Score: score,
    Nombre: name
    
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

    

}
//Este es el bueno!
var tabla = document.getElementById('tabla');

db.collection("juego").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
       
        console.log(`${doc.id} => ${doc.data().Nombre}`);
        console.log(`${doc.id} => ${doc.data().Score}`);
        tabla.innerHTML += `
        <tr>
      
      <td>${doc.data().Nombre}</td>
      <td>${doc.data().Score}</td>
      
    </tr>
        
        
    `;
        
    });
});

