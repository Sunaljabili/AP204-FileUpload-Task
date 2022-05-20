let uploadIcon = document.getElementById("uploadIcon");
let removeAll = document.querySelector(".removeAll");
let tableBdy = document.querySelector(".table tbody");
let table = document.querySelector(".table");


uploadIcon.addEventListener("click", function () {
    this.nextElementSibling.click();
})

removeAll.addEventListener("click", function () {
tableBdy.innerHTML ="";
this.classList.add("d-none")
table.classList.add("d-none");

})

uploadIcon.nextElementSibling.onchange = function (ev) {
    for (const file of ev.target.files) {
        let reader = new FileReader();

        reader.onload = function (ev) {
            let tr = document.createElement("tr");

            let tdImg = document.createElement("td");
            let img = document.createElement("img");
            img.setAttribute("src", ev.target.result);
            img.setAttribute("width", "200px");
            tdImg.append(img);
            let tdName = document.createElement("td");
            tdName.innerText = file.name;

            let tdSize = document.createElement("td");
            tdSize.innerText = file.size;


            let tdIcon = document.createElement("td");
            tdIcon.innerHTML = ' <i class="fa-solid fa-ban"></i>';



            tr.append(tdImg, tdName, tdSize, tdIcon);

            document.querySelector(".table tbody").append(tr);

            tdIcon.addEventListener("click", function () {
                tr.remove();
            })
        }

        reader.readAsDataURL(file);
        removeAll.classList.remove("d-none");
        table.classList.remove("d-none")
    }
    this.value = ""

}
