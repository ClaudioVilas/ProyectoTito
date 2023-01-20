const iconoMenu = document.querySelector ("#iconmenuhamburgesa")

const ocultar = document.querySelector ("#businesshamburgesa")

const ocultar2 = document.querySelector ("#workerhamburgesa")

const ocultar3 = document.querySelector ("#downloadhamburgesa")

    iconoMenu.addEventListener ("click", (e) => {
        menu.classList.toggle ("mostrar")
            document.body.classList.toggle ("opacity")
    })


    ocultar.addEventListener ("click", () => {
        menu.classList.toggle ("mostrar")
            document.body.classList.toggle ("opacity")
    })


    ocultar2.addEventListener ("click", () => {
        menu.classList.toggle ("mostrar")
            document.body.classList.toggle ("opacity")
    })

    ocultar3.addEventListener ("click", () => {
        document.body.classList.toggle ("opacity")
        menu.classList.toggle ("mostrar")
    })





