// let emailsuscribe = document.querySelector ("#exampleFormControlInput1")
// let botonsuscribe = document.querySelector ('.botonsuscribite')


// botonsuscribe.addEventListener ("click", (e) =>{

//     e.preventDefault();
//     localStorage.setItem("emailsuscribe", emailsuscribe.value);
//         if(

// )
//             Swal.fire('Tu datos han sido enviados correctamente');
// })


let botonsuscribe = document.querySelector ('#form')

botonsuscribe.addEventListener ("submit", handlesubmit)

async function handlesubmit (event) {
    event.preventDefault();
    const form = new FormData (this)
    const response = await fetch  (this.action, {
        method: this.method,
        body: form, 
        headers: {
            'Accept' : 'application/json'
        }
    })

if (response.ok){
    this.reset()
    Swal.fire(
        'We Get your Email',
        'We will contact you soon',
        'success'
      )
    }
}

