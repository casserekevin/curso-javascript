document.write("Curso Javascript - Aula 15<br><br>")

// let array = new Array()
let mochila = []
let mochila1 = []
let mochila2 = []

mochila1.push("Faca")
mochila1.push("Corda")
mochila1.push("Pederneira")
mochila1.push("Chave")
mochila1.push("Lanterna")
mochila1.push("Pedra")
mochila1.push("Mouse")

mochila2.push("Arame")
mochila2.push("Luvas")
mochila2.push("Joelheira")
mochila2.push("Meias")
mochila2.push("Moeda")
mochila2.push("Canivete")

mochila1.pop()

mochila = mochila1.concat(mochila2)

document.write(`${mochila.join('<br>')}<br>`)

document.write(`Tamanho da mochila 1: ${mochila1.length}<br>`)
document.write(`Tamanho da mochila 2: ${mochila2.length}<br>`)
document.write(`Tamanho da mochila: ${mochila.length}<br>`)

