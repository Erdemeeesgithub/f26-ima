function createDominoFace(value) {
    const face = document.createElement("div")
    face.classList.add("domino-face");
    for (let i = 0; i < 9; i++) {
        const pip = document.createElement("div")
        pip.classList.add("pip")


        if (value > 1 && i == 0) {
            pip.classList.add("dot")
        }
        if (value > 1 && i == 8) {
            pip.classList.add("dot")
        }

        if (value > 3 && i == 2) {
            pip.classList.add("dot")
        }
        if (value > 3 && i == 6) {
            pip.classList.add("dot")
        }
        if (value > 5 && i == 3) {
            pip.classList.add("dot")
        }
        if (value > 5 && i == 5) {
            pip.classList.add("dot")
        }
        if (value % 2 == 1 && i == 4) {
            pip.classList.add("dot")
        }
        face.appendChild(pip)
    }
    return face
}



function createDomino(value1, value2) {
    const domino = document.createElement("div");
    domino.classList.add("domino")
    const face1 = createDominoFace(value1)
    const face2 = createDominoFace(value2)
    domino.appendChild(face1)
    domino.appendChild(face2)
    return domino
}

const dominoes = []
const dominoContainer = document.getElementById("domino-container");

for (let i = 0; i <= 6; i++) {
    for (let j = i; j <= 6; j++) {
        const domino = createDomino(i, j)
        domino.addEventListener("click", function () {
            domino.classList.toggle("flipped")
        })
        dominoContainer.appendChild(domino);
        dominoes.push(domino)
    }
}

