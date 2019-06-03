const COMMENTS =[   {
    name: "Леонид",
    data: "20 декабря 2015",
    text: "Привет!"
}, {
    name: "Роман",
    data: "13 декабря 2016",
    text: "Услуги супер"
}, {
    name: "Григорий",
    data: "13 декабря 2016",
    text: "Ну ничего себе"
},{
    name: "Светлана",
    data: "13 декабря 2016",
    text: "Спасибо,вера"
},{
    name: "Анечка",
    data: "13 декабря 2016",
    text: "Мне не очень понравилось все"
},{
    name: "Татьяна",
    data: "13 декабря 2016",
    text: "Ну... мне эти ваши услуги лаже не понадобились. Я сама все умею"
},{
    name: "Костя",
    data: "13 декабря 2016",
    text: "Ты очень красивая,Верочка"
},{
    name: "Артем",
    data: "13 декабря 2016",
    text: "Это моя девушка"
},{
    name: "Соня",
    data: "13 декабря 2016",
    text: "1. Услуги класс,все правда понравилось \n" +
        "2.Решение моей проблемы было быстрым и оперативным \n" +
        "3.Все Супер! Буду обращаться еще \n"
},{
    name: "Рома",
    data: "13 декабря 2016",
    text: "Фотка класс!=)"
},{
    name: "Игорь",
    data: "20 января 2017",
    text: "Нет на земле дороже,\n" +
         "Ласковых глаз твоих.\n" +
         "Сердце моё они тревожат,\n" +
         "Счастлив тонуть я в них."
},{
    name: "Самуил",
    data: "13 октября 2011",
    text: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!!"
},{
    name: "Лилия Семёновна",
    data: "14 октября 2011",
    text: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?"
},{
    name: "Лилия Семёновна",
    data: "14 октября 2011",
    text: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?"
},];


function RenderComments(commentsArr) {
    const commentsContainer = document.createElement("div");
    commentsArr.forEach((item) => {
        const commentWrap = document.createElement("div");
        commentWrap.setAttribute("class","write");
        const commentUser = document.createElement("div");
        commentUser.setAttribute("class","user");
        const commentName = document.createElement("div");
        commentName.setAttribute("class","write-name");
        const commentNameP = document.createElement("p");
        commentNameP.innerText = item.name;
        const commentData = document.createElement("div");
        commentData.setAttribute("class","data");
        const commentDataP = document.createElement("p");
        commentDataP.innerText = item.data;
        const commentWriteText = document.createElement("div");
        commentWriteText.setAttribute("class","write-text");
        const triangle = document.createElement("div");
        triangle.setAttribute("class","triangle");
        const commentWriteTextP = document.createElement("p");
        commentWriteTextP.innerText = item.text;
        commentName.appendChild(commentNameP);
        commentData.appendChild(commentDataP);
        commentUser.appendChild(commentName);
        commentUser.appendChild(commentData);
        commentWrap.appendChild(commentUser);
        commentWriteText.appendChild(triangle);
        commentWriteText.appendChild(commentWriteTextP);
        commentWrap.appendChild(commentWriteText);
        commentsContainer.appendChild(commentWrap);
    });
    document.getElementById('comments').innerHTML = "";
    document.getElementById('comments').appendChild(commentsContainer);
    document.getElementById('comments-counter').innerText = COMMENTS.length;
}
RenderComments(COMMENTS.slice(-3));

document.getElementById("add-btn").addEventListener("click", (e) => {
    e.preventDefault();
    const inputValue = document.getElementById("textAdd").value;
    const newComment = {
        name: "Денис",
        data: "1 июня 2020",
        text: inputValue
    }
    if(inputValue === "") {
        alert('Заполните поле');
        return true
    }
    COMMENTS.push(newComment);
    RenderComments(COMMENTS.slice(-3));
    document.getElementById("textAdd").value = ""
});

document.getElementById("all-reviews").addEventListener("click",(e) => {
    e.preventDefault();
    document.getElementById("all-reviews").classList.toggle("newClassAll");
    document.getElementById("last-reviews").classList.toggle("newClassLast");
    RenderComments(COMMENTS)
});
document.getElementById("last-reviews").addEventListener("click",(e) => {
    e.preventDefault();
    document.getElementById("last-reviews").classList.toggle("newClassLast");
    document.getElementById("all-reviews").classList.toggle("newClassAll");
    RenderComments(COMMENTS.slice(-3))
});
/*document.getElementById("like-counter").innerText = Math.floor(Math.random() * 100);*/

document.getElementById("textAdd")
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.shiftKey && event.keyCode === 13) {
            document.getElementById("add-btn").click();
        }
    });



