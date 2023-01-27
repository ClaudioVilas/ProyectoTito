// codigo para mensaje de enviado para el servicio de formspree


// let botonsuscribe = document.querySelector ('#form')

// botonsuscribe.addEventListener ("submit", handlesubmit)

// async function handlesubmit (event) {
//     event.preventDefault();
//     const form = new FormData (this)
//     const response = await fetch  (this.action, {
//         method: this.method,
//         body: form, 
//         headers: {
//             'Accept' : 'application/json'
//         }
//     })

// if (response.ok){
//     this.reset()
//     Swal.fire(
//         'We Get your Email',
//         'We will contact you soon',
//         'success'
//       )
//     }
// }

// codigo para mensaje de enviado para el servicio de clientify


let botonsuscribe = document.querySelector ('#btn-icon')


botonsuscribe.addEventListener ('click', test)

function test () {
    console.log ("test")
} 

// botonsuscribe.addEventListener ("click", (e) =>{

//     e.preventDefault();
//         Swal.fire(
//         'We Get your Email',
//         'We will contact you soon',
//         'success'
//       )
// })