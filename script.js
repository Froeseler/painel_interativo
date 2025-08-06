document.querySelector("#novos").addEventListener("click",()=>{
    const painel = document.querySelector(".painel");
    let totalUniversos = document.querySelectorAll(".universo").length;
    for (let i=1; i<=2; i++){
        totalUniversos++;
        const novoUniverso = document.createElement("div");
        novoUniverso.className = "universo";
        novoUniverso.innerHTML = `
        <div class="titulo"> Universo ${totalUniversos}</div>
        <div class="icone">🔀</div>
        `
        painel.appendChild(novoUniverso)
    }
})

document.querySelector("#expansao").addEventListener("click",()=>{
    const atual = window.getComputedStyle(document.body).fontSize;
    document.body.style.fontSize = atual==="16px" ? "20px" : "16px"
})

document.querySelector("#modo").addEventListener("click",()=>{
    document.body.classList.toggle("light-mode")
})