let emailsuscribe = document.querySelector ("#exampleFormControlInput1")
let botonsuscribe = document.querySelector ('.botonsuscribite')


botonsuscribe.addEventListener ("click", (e) =>{

    e.preventDefault();
    localStorage.setItem("emailsuscribe", emailsuscribe.value);
//         if(

// )
            Swal.fire('Tu datos han sido enviados correctamente');
})

