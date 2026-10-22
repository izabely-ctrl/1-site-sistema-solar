const formulario = document.getElementById("formulario")
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");
    if(email === "admin" && senha === "admin"){
        alert("Login correto")
        window.location.href = "index.html";
    }else{
            alert("Login incorreto")
            mensagem.textContent = "Email ou senha incorretos, tente novamente."

        }
})