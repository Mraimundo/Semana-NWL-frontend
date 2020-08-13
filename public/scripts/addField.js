// Procurar o botao
 document.querySelector("#add-time")
 // Quanto clicar no botao
.addEventListener('click', cloneField);


// Executar uma acao
function cloneField() {
    // Duplicar os campos. que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Limpar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    
    fields.forEach(element => {
        element.value = ""
    });

    // Colocar na página: onde??
    document.querySelector('#schedule-item').appendChild(newFieldContainer)
    
}
    