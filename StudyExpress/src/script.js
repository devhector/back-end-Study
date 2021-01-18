document.addEventListener("DOMContentLoaded", () => {
    
    let quote = document.getElementById("quote");
    let author = document.getElementById("author");
    


    function putQuote(){
        quote.innerText = "Há apenas uma coisa que faz um sonho impossível de alcançar: o medo do fracasso.";
        author.textContent = "Paulo Coelho";
    }

    putQuote();
});
