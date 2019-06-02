const COMMENTS =[{
    name: "Самуил",
    data: "13 октября 2011",
    text: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!!"
}, {
    name: "Лилия Семёновна",
    data: "14 октября 2011",
    text: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?"
}, {
    name: "Лилия Семёновна",
    data: "14 октября 2011",
    text: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?"
}, {
    name: "Леонид",
    data: "20 декабря 2015",
    text: "Привет!"
}, {
    name: "Рома",
    data: "13 декабря 2016",
    text: "Фотка класс!=)"
}, {
    name: "Игорь",
    data: "20 января 2017",
    text: "Нет на земле дороже,\n" +
         "Ласковых глаз твоих.\n" +
         "Сердце моё они тревожат,\n" +
         "Счастлив тонуть я в них."
}];


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
    document.getElementById('comments-counter').innerText = commentsArr.length;
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
    COMMENTS.push(newComment);
    RenderComments(COMMENTS.slice(-3));
    document.getElementById("textAdd").value = ""
});

document.getElementById("all-reviews").addEventListener("click",(e) => {
    e.preventDefault();
    RenderComments(COMMENTS)
});
document.getElementById("last-reviews").addEventListener("click",(e) => {
    e.preventDefault();
    RenderComments(COMMENTS.slice(-3))
});
document.getElementById("like-counter").innerText = Math.floor(Math.random() * 100);

