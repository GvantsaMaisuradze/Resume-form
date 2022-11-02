var allHumans = [];
const humanAreaCon = document.querySelector("#humanArea");
const imageUrlInp = document.querySelector("#imageUrl");
const nameInp = document.querySelector("#name");
const surnameInp = document.querySelector("#surname");
const emailInp = document.querySelector("#email");
const phoneInp = document.querySelector("#phone");
const githubInp = document.querySelector("#github");
const saveInfoBtn = document.querySelector("#saveInfo");

saveInfoBtn.addEventListener("click",function(){
    var humanTmp = getHumanObject(imageUrlInp.value,
            nameInp.value,
            surnameInp.value,
            emailInp.value,
            phoneInp.value,
            githubInp.value
            );
            allHumans.push(humanTmp);
            humanAreaCon.innerHTML += humanTmp.getFullInfoHtmlCard();
            clearInputValues();
})

function clearInputValues(){
    var allInputs = document.querySelectorAll("input");
    allInputs.forEach(inpItem => {
        inpItem.value = "";
    })
}

function getHumanObject (imageUrl, name, surname, email, phone, githubLink){
    var tmp = {
        name : name,
        surname : surname,
        imageUrl : imageUrl ,
        emailAdress : email,
        phoneNumber : phone ,
        githubLink : githubLink,
        getFullInfoHtmlCard : function(){
            return ` <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${this.imageUrl}" alt="Card image cap">
                    <div class="card-body">
                    <h5 class="card-title">${this.name} ${this.surname}</h5>
                    <p class="card-text">${this.emailAdress}</p>
                    <a href="tel:${this.phoneNumer}">Call</a>
                    <br>
                    <a href="${this.githubLink}" class="btn btn-dark col-md-12">Go to GitHub</a>
                    
                 </div>`
        }
    
    }
    return tmp;
    
}