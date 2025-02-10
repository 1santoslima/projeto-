function toggleMode(){
const html = document.documentElement
 html.classList.toggle("light")

 // pegar a tag img
const img = document.querySelector("#profile img")

if(html.classList.contains("light","img")) {
    img.setAttribute("src", "./assets/meet-Photoroom.png")  
    img.setAttribute("alt","Foto de Igor Lima , usando fone branco , camisa branca. fundo cor Branco")
     //se tiver light mode, adicionar imagem light
} else {
    //se tiver sem light mode , manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt","Foto de Igor Lima , usando fone branco , camisa branca. fundo cor amarelo")
}
   
}







