const main = document.querySelector(".container3")
const divModal = document.getElementById("divModal")




    
function criarModal(){

    for(let i = 0; i < posts.length; i++){
        let div = document.createElement("div")
        let section1 = document.createElement("section")
        let section2 = document.createElement("section")
        let figure = document.createElement("figure")
        let img = document.createElement("img")
        let section3 = document.createElement("section")
        let h4 = document.createElement("h4")
        let p1 = document.createElement("p")
        let but = document.createElement("button")
        let h1 = document.createElement("h1")
        let p2 = document.createElement("p")
        div.id = posts[i].id_post
        
        
            for(let j = 0; j < users.length; j++){
                
                if(posts[i].user === users[j].id){
                    img.src = users[j].img
                    h4.innerText = users[j].user
                    p1.innerText = users[j].stack
                }
                but.innerText = "X"
                h1.innerText = posts[i].title
                p2.innerText = posts[i].text

                div.classList.add("modalTotal")
                section1.classList.add("modal")
                section1.classList.add("modal2")
                section1.classList.add("relative")
                section2.classList.add("cardUser")
                div.classList.add("modalDesaparecer")
                but.classList.add("butModal")

                figure.appendChild(img)
                section3.append(h4, p1)
                section2.append(figure, section3)
                section1.append(section2, but, h1, p2)
                div.appendChild(section1)
                main.appendChild(div)


            }
        
    }

}


criarModal()

const modal1 = document.getElementById("1")
const modal2 = document.getElementById("2")
const modal3 = document.getElementById("3")

const butShowPost = document.querySelectorAll("[data-modal-control]")

        for(let p = 0; p < butShowPost.length; p++){
        butShowPost[p].addEventListener("click", function(){
            let valueBut = butShowPost[p].getAttribute("data-modal-control")
            let value = valueBut.substring(4)
            console.log(value)
            if(value == modal1.id){
                modal1.classList.remove("modalDesaparecer")
            }
            if(value == modal2.id){
                modal2.classList.remove("modalDesaparecer")
            }
            if(value == modal3.id){
                modal3.classList.remove("modalDesaparecer")
            }

        })
    }
    
const butModal = document.querySelectorAll(".butModal")

    for(let i = 0; i < butModal.length; i++){
        butModal[i].addEventListener("click", function(){
            modal1.classList.add("modalDesaparecer")
            modal2.classList.add("modalDesaparecer")
            modal3.classList.add("modalDesaparecer")
        })
    }

    
