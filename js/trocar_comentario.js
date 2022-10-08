import comentarios from './comentarios.json' assert { type: "json" }

const comment = document.querySelectorAll(".card-testimonies")

comment.forEach(element => element.addEventListener("click", () => {
    changeTextCommentary(element)
}))

const changeTextCommentary = (element) => {
    const nameElement = element.querySelector(".profile-name")
    const nameMain = document.querySelector(".card-main  .profile-name-main")

    const elementJson = comentarios.find(item => {
        return item.name == nameElement.textContent
    });

    nameElement.textContent = nameMain.textContent;
    nameMain.textContent = elementJson.name;

    const photoElement = element.querySelector(".profile-image")
    const photoMain = document.querySelector(".card-main  .profile-image-main")

    photoElement.src = photoMain.src;
    photoMain.src = elementJson.urlImage;

    const commentMain = document.querySelector(".card-main  .commentary-text")
    commentMain.textContent = elementJson.textCommentary
}