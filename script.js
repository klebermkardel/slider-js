let nextImage = 1; //guarda a posição da imagem que deve entrar na tela, no caso é a imagem da posição 1, pois a imagem 0 já está visível na tela
let zCurrentIndex = 0; //usado para criar um aumento progressivo no z-index
let images = document.getElementById("container").children; //pega todos os nodos filhos da div #container, ou seja, nossa coleção de imagens

function advanceImage() {
    image = images[nextImage]; // armazena a proxima imagem na fila em uma variável
    image.style.zIndex = ++zCurrentIndex; // aumenta o índice do z-index e atribui à próxima imagem da fila
    image.style.marginLeft = "0%"; // reseta a margem da imagem, fazendo ela entrar na tela

    nextImage++; // ajusta o índice que aponta a próxima imagem

    // caso o índice tenha alcançado o fim da fila, resetá-lo
    if(nextImage >= images.length) {
        nextImage = 0;
    }

    // aqui está o truque para fazer com que as imagens que já passaram voltem para fora da área visível
    // o tempo de intervalo está aqui para que isso ocorra depois que a imagem ficou atrás da nova imagem da fila
    setTimeout(resetImages, 500);
}

function resetImages() {
    visibleImage = nextImage -1;

    // se o índice alcançou o início da fila, voltar para o final
    if(visibleImage < 0) {
        // o menos 1 está aqui pois o parâmetro length retorna o total de itens no array (no caso, 3)
        // precisamos da posição do último item do array (sempre é length-1)
        visibleImage = images.length - 1;
    }

    // retorna todas as imagens à sua posição original, menos a imagem visível
    for(i = 0; i < images.length; i++) {
        if(i != visibleImage) {
            images[i].style.marginLeft = "100%";
        }
    }
}

let interval = setInterval(advanceImage, 3000);