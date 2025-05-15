const html = document;
const add = html.getElementById("add");
const grid = html.getElementById("grid");
const update = html.getElementsByClassName("read");
const remove = html.getElementsByClassName("delete");
let Library = [];

function Book(pages, title, author) {
    if (!new.target) {
        console.log("ERROR");
        return;
    }
    this.id = crypto.randomUUID();
    this.pages = pages;
    this.title = title;
    this.author = author;
    this.read = false;
}

function addBook() {
    let name, pages, author, title;
    pages = prompt("Number of the pages in the book");
    if (pages == "" || pages == NaN || pages == null) pages = 0;
    author = prompt("Name of the author");
    if (author == "" || author == null) author = "IAF";
    title = prompt("Title of the book");
    if (title == "" || title == null) title = "PKMKB";
    let book = new Book(pages, title, author);
    return book;
}

let i = 0;
let s = 0;

function createGridElement(title, author, n) {
    let E = html.createElement("div");
    let C1 = html.createElement("div");
    let C2 = html.createElement("div");
    let C3 = html.createElement("div");
    let C31 = html.createElement("button");
    let C32 = html.createElement("button");
    E.setAttribute("id", "gridflex" + i.toString());
    C1.setAttribute("id", "gridflex" + i.toString() + "1");
    C2.setAttribute("id", "gridflex" + i.toString() + "2");
    C3.setAttribute("id", "gridflex" + i.toString() + "3");
    C31.setAttribute("class", "read");
    C32.setAttribute("class", "delete");
    i++;
    E.setAttribute("style", "display:flex;flex-direction:column;height:10vh;width:10vw;border-radius:2vh;border-style:solid;border-width: 0.7vh;border-color:lightcoral;");
    C1.setAttribute("style", "display:flex;height:35%;width:100%;border-radius:2vh 2vh 0 0;background-color:white;color:black;font-style:italic;font-size:1.5vh;justify-content:center;align-items:center;font-weight:700;")
    C1.innerText = title;
    C2.setAttribute("style", "display:flex;height:25%;width:100%;border-radius:0 0 0 0;background-color:black;color:white;font-size:1vh;justify-content:center;align-items:center;font-weight:600;")
    C2.innerText = author;
    C3.setAttribute("style", "display:flex;gap:10%;height:40%;width:100%;border-radius:0 0 2vh 2vh;background-color:white;color:black;font-size:1.5vh;justify-content:center;align-items:center;");
    C31.setAttribute("style", "display:flex;justify-content:center;align-items:center;border-radius:1vh;height:80%;width:40%;background-color:red;");
    C31.innerText = "READ";
    C32.setAttribute("style", "display:flex;justify-content:center;align-items:center;border-radius:1vh;height:80%;width:40%;background-color:red;");
    C32.innerText = "REMOVE";
    E.appendChild(C1);
    E.appendChild(C2);
    E.appendChild(C3);
    C3.appendChild(C31);
    C3.appendChild(C32);
    grid.appendChild(E);
    let r = false;
    C31.addEventListener("click", function () {
        if (r == false) {
            E.setAttribute("style", "display:flex;flex-direction:column;height:10vh;width:10vw;border-radius:2vh;border-style:solid;border-width: 0.7vh;border-color:lightgreen;");
            C31.innerText = "UNREAD";
            r = true;
        }
        else {
            E.setAttribute("style", "display:flex;flex-direction:column;height:10vh;width:10vw;border-radius:2vh;border-style:solid;border-width: 0.7vh;border-color:lightcoral;");
            C31.innerText = "READ";
            r = false;
        }
    });
    function notID(it) {
        return it.id != n;
    }
    C32.addEventListener("click", function () {
        Library = Library.filter(notID);
        grid.removeChild(E);
        s--;
        console.log(Library);
    })
}

function showLibrary() {

}

add.addEventListener("click", function () {
    Library.push(addBook());
    console.log(Library);
    createGridElement(Library[s].title, Library[s].author, Library[s].id);
    s++;
});







