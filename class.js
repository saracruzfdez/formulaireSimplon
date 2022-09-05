// class Employer {
//     constructor(nom, prenom){
//         this.prenom = prenom
//         this.nom = nom;
//     }
//     presentation() {
//         console.log("Bonjour " + this.prenom.toUpperCase()[0] + this.prenom.slice(1, this.prenom.length) + "." + this.nom.toUpperCase()[0])
//     }
// }

// let sara = new Employer("cruz", "sara")
// let aicha = new Employer("Ibrahima", "Aicha")
// let romain = new Employer("V", "Romain")

// aicha.presentation()
// sara.presentation()
// romain.presentation()

class Employer {
    constructor(avatar, fname, lname, genre, telephone, email, contract, salary, start, birthday, password) {
        this.avatar = avatar;
        this.fname = fname;
        this.lname = lname;
        this.genre = genre;
        this.telephone = telephone;
        this.email = email;
        this.contract = contract;
        this.salary = parseInt(salary);
        this.start = new Date(start);
        this.birthday = new Date(birthday);
        this.password = password;
    }
    getAge() {
        var diff = Date.now() - this.birthday;
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    }
    getYears() {
        var diff = Date.now() - this.start;
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    }
    getSalary() {
        return this.salary + (((10 / 100) * this.salary) * this.getYears());
    }
}

// Verifie si inputs valides et active ou non submit selon
function updateSubmitButton() {
    isAvatarValid = document.getElementById("avatar").checkValidity(),
        isFnameValid = document.getElementById("fname").checkValidity(),
        isLnameValid = document.getElementById("lname").checkValidity(),
        isGenreValid = document.getElementById("genre").checkValidity(),
        isTelephoneValid = document.getElementById("telephone").checkValidity(),
        isEmailValid = document.getElementById("email").checkValidity(),
        isContractValid = document.getElementById("contract").checkValidity(),
        isSalaryValid = document.getElementById("salary").checkValidity(),
        isStartValid = document.getElementById("start").checkValidity(),
        isBirthdayValid = document.getElementById("birthday").checkValidity(),
        isPasswordValid = document.getElementById("pass").checkValidity()

    if (isAvatarValid && isFnameValid && isLnameValid && isGenreValid && isTelephoneValid
        && isEmailValid && isContractValid && isSalaryValid && isStartValid && isBirthdayValid && isPasswordValid) {
        document.getElementById("submit").disabled = false
    } else {
        document.getElementById("submit").disabled = true
    }
}

// apeler function ensuite pour desactiver au demarrage
updateSubmitButton()

// apeler fonction à nouveau pour que une fois le champ rempli le button se reactive
document.getElementById("avatar").addEventListener("change", function () {
    updateSubmitButton()
})
document.getElementById("fname").addEventListener("change", function () {
    updateSubmitButton()
})
document.getElementById("lname").addEventListener("change", function () {
    updateSubmitButton()
})
document.getElementById("genre").addEventListener("change", function () {
    updateSubmitButton()
})
document.getElementById("telephone").addEventListener("change", function () {
    updateSubmitButton()
})
document.getElementById("email").addEventListener("change", function () {
    updateSubmitButton()
})
document.getElementById("contract").addEventListener("change", function () {
    updateSubmitButton()
})
document.getElementById("salary").addEventListener("change", function () {
    updateSubmitButton()
})
document.getElementById("start").addEventListener("change", function () {
    updateSubmitButton()
})
document.getElementById("birthday").addEventListener("change", function () {
    updateSubmitButton()
})
document.getElementById("pass").addEventListener("change", function () {
    updateSubmitButton()
})

// Bouton submit avec evenement qui se declenche au click. Au click, la function suivante s'applique :
let submit = document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault()
    
    // Je crée mon objet à partir de ce que l'utilisateur rentre comme valeur dans le formulaire html :
    let employeesList = []
    
    let employer = new Employer(
        document.getElementById("avatar").value,
        document.getElementById("fname").value,
        document.getElementById("lname").value,
        document.getElementById("genre").value,
        document.getElementById("telephone").value,
        document.getElementById("email").value,
        document.getElementById("contract").value,
        document.getElementById("salary").value,
        document.getElementById("start").value,
        document.getElementById("birthday").value,
        document.getElementById("pass").value)
        
        employeesList.push(employer)
        console.log(employeesList)
        
        // Je cree les elements de mon tableau html : 
        let ligne = document.createElement("tr")
        
        ligne.addEventListener("click", function(){
            
            // recupere l'acces à lobjet modal html :
            const myModalAlternative = new bootstrap.Modal('.modal', {})
            myModalAlternative.show()
    })

    let avatarColonne = document.createElement("td")
    let prenomColonne = document.createElement("td")
    let nomColonne = document.createElement("td")
    let genreColonne = document.createElement("td")
    let telephoneColonne = document.createElement("td")
    let emailColonne = document.createElement("td")
    let contractColonne = document.createElement("td")
    let salaryColonne = document.createElement("td")
    let startColonne = document.createElement("td")
    let birthdayColonne = document.createElement("td")
    let passColonne = document.createElement("td")

    // Je joins mes colonnes aux lignes :
    ligne.appendChild(avatarColonne)
    ligne.appendChild(prenomColonne)
    ligne.appendChild(nomColonne)
    ligne.appendChild(genreColonne)
    ligne.appendChild(telephoneColonne)
    ligne.appendChild(emailColonne)
    ligne.appendChild(contractColonne)
    ligne.appendChild(salaryColonne)
    ligne.appendChild(startColonne)
    ligne.appendChild(birthdayColonne)
    ligne.appendChild(passColonne)

    // Je insère mon contenu aux colonnes (affichage) :
    avatarColonne.innerHTML = `<img src="${employer.avatar}" style="width:35px"/>`
    prenomColonne.innerHTML = employer.fname
    nomColonne.innerHTML = employer.lname
    genreColonne.innerHTML = employer.genre
    telephoneColonne.innerHTML = employer.telephone
    emailColonne.innerHTML = employer.email
    contractColonne.innerHTML = employer.contract
    salaryColonne.innerHTML = employer.getSalary() + "  €/mois";
    startColonne.innerHTML = employer.getYears() + " ans";
    birthdayColonne.innerHTML = employer.getAge() + " ans";
    passColonne.innerHTML = employer.password;

    // Je joins les lignes, colonnes et le contenu à mon tableau html
    document.getElementById("table").appendChild(ligne)
})