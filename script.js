const form = document.getElementById("book-form");

const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");

const bookList = document.getElementById("book-list");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${title.value}</td>
        <td>${author.value}</td>
        <td>${isbn.value}</td>
        <td>
            <button class="delete">X</button>
        </td>
    `;

    bookList.appendChild(row);

    title.value = "";
    author.value = "";
    isbn.value = "";
});


bookList.addEventListener("click", function (e) {

    if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
    }

});