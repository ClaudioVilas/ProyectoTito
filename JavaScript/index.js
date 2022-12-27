const printdownload = document.querySelector(".botonheaderprint");
printdownload.addEventListener("click", print);



function print  (e)  {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'DownLoad SuccesFull',
        showConfirmButton: false,
        timer: 1500
      })
}




