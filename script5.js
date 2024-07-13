var whiteBoxs = document.querySelectorAll(".whiteBox")
var imgBox = document.querySelector(".imgBox")


for (whiteBox of whiteBoxs) {
    whiteBox.addEventListener("dragover", function (e) {
        e.preventDefault()
        console.log("drag over");

    })

    whiteBox.addEventListener("drop", function (e) {
        e.target.append(imgBox)
        console.log("drop");

    })
}