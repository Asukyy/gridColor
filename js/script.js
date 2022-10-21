
        function changeColor() {
            let i = Math.floor(Math.random() * 21);
            let randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)

            document.getElementById("grid-item-" + i).style.backgroundColor = randomColor;
            for (let j = 0; j < 21; j++) {
                if (j != i) {
                    setTimeout(() => {
                        console.log("grid-item-" + j);
                        document.getElementById("grid-item-" + i).style.backgroundColor = "#ffffff";
                    }, 2000);
                }
            }
            setTimeout(changeColor, 2000);
        }


        changeColor();