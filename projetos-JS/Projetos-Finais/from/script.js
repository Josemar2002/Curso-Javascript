let B7Validator = {
    handleSubmit:(event)=>{
        event.preventDefault()

        let send = true
        let inputs = form.querySelectorAll('input')

        B7Validator.clearErrors()

        for(let i=0; i <inputs.length;i++){
            let input = inputs[i]
            let check = B7Validator.checkInput(input)
            if(check !== true) {
                send = false
                B7Validator.showError(input, check )
            }
        }
        if(send) {
            form.submit()
        }
    },
    checkInput:(input) => {
        let rules = input.getAttribute('data-rules')

        if(rules !== null) {
            rules = rules.split('|')
            for(let k in rules) {
                let rDetails = rules[k].split('=')
                switch(rDetails[0]) {
                    case 'required':
                        if(input.value == '') {
                            return 'Campo não pode ser vazio'
                        }
                    break
                    
                    case 'min':
                        if(input.value.length < rDetails[1]) {
                            return 'Campo tem que ter pelo menos ' +rDetails[1]+ ' caracters'
                        }
                    break
                    case 'email':
                        if(input.value != '') {
                            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            if(!regex.test(input.value.toLowerCase())) {
                                return 'E-mail digitado não é válido!';
                            }   
                        }
                    break    
                }
            }
        }
        return true
    },
    showError:(input, error) => {
        input.style.borderColor = 'red'
        let errorELement = document.createElement('div')
        errorELement.classList.add('error')
        errorELement.innerHTML = error
        input.parentElement.insertBefore(errorELement, input.ElementSibling)

    },
    clearErrors() {
        let inputs = form.querySelectorAll('input')
        for(let i =0;i<inputs.length;i++) {
            inputs[i].style =''
        }
        let errorELements = document.querySelectorAll('.error')
        for(let i=0;i<errorELements.length;i++) {
            errorELements[i].remove()
        }
    }
}
let form = document.querySelector('.b7validator')
form.addEventListener('submit', B7Validator.handleSubmit)