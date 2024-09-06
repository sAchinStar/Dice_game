addEventListener("DOMContentLoaded", () => {
    var img_1 = ["dice-1.svg", "dice-2.svg", "dice-3.svg", "dice-4.svg", "dice-5.svg", "dice-6.svg"]
    var img_2 = ["dice-1.svg", "dice-2.svg", "dice-3.svg", "dice-4.svg", "dice-5.svg", "dice-6.svg"]

    let btn = document.getElementById("btn")
    console.log(btn);
    btn.addEventListener("click", () => {
        // generate number from 0 to 5
        let num1 = Math.floor(Math.random() * 6);
        // console.log(num1);
        let num2 = Math.floor(Math.random() * 6);
        // console.log(num2);
        let img1 = document.getElementById("img1")
        let img2 = document.getElementById("img2")
        // console.log(img1)
        let element1 = img_1[num1]
        // console.log(element1);
        let element2 = img_2[num2]
        img1.setAttribute("src", element1)
        img2.setAttribute("src", element2)

        setTimeout(() => {
            if (num1 > num2) {
                alert("!! Player 1 win !!")
            }
            else if (num1 == num2) {
                alert("!! Draw !!")
            }
            else {
                alert("!! Player 2 win !!")
            }

        },1000)


    })


})

