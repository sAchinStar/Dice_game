addEventListener("DOMContentLoaded", () => {
    var img_Array1 = ["dice-1.png", "dice-2.png", "dice-3.png", "dice-4.png", "dice-5.png", "dice-6.png"]
    var img_Array2 = ["dice-1.png", "dice-2.png", "dice-3.png", "dice-4.png", "dice-5.png", "dice-6.png"]

    let btn = document.getElementById("btn")
    console.log(btn);
    btn.addEventListener("click", () => {
        btn.setAttribute("style","display:none;")
        // generate number from 0 to 5
        let num1 = Math.floor(Math.random() * 6);
        // console.log(num1);
        let num2 = Math.floor(Math.random() * 6);
        // console.log(num2);
        let img1 = document.getElementById("img1")
        let img2 = document.getElementById("img2")
        // console.log(img1)
        let element1 = img_Array1[num1]
        // console.log(element1);
        let element2 = img_Array2[num2]
        img1.setAttribute("src", element1)
        img2.setAttribute("src", element2)
        
        setTimeout(() => {
            if (num1 > num2) {
                alert("!! Player 1 win !!")
                btn.setAttribute("style","display:block;")
            }
            else if (num1 == num2) {
                alert("!! Draw !!")
                btn.setAttribute("style","display:block;")
            }
            else {
                alert("!! Player 2 win !!")
                btn.setAttribute("style","display:block;")
            }

        },1000)


    })


})

