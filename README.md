# Slide de imagens em JavaScript

## Descrição

Este projeto implementa um simples carrossel de imagens em JavaScript. O carrossel exibe uma série de imagens, trocando-as automaticamente a cada 3 segundos. As imagens entram suavemente na tela a partir da margem direita e são sobrepostas de acordo com o z-index para garantir que a imagem atual esteja sempre visível no topo.

### Estrutura de Código

#### Variáveis Globais

* **`nextImage`**: Um índice que aponta para a próxima imagem a ser exibida. Inicialmente definido como 1, pois a imagem na posição 0 já está visível.

* **`zCurrentIndex`**: Um índice z-index crescente usado para garantir que a nova imagem apareça sobre as imagens anteriores. Inicialmente definido como 0.

* **`images`**: Uma coleção HTML contendo todas as imagens filhas dentro do elemento <div> com o ID container.

#### Funções

**`advanceImage()`**

Esta função é responsável por avançar para a próxima imagem no carrossel. Funciona da seguinte maneira:

1. Seleciona a Próxima Imagem: A imagem apontada por nextImage é armazenada na variável image.

2. Atualiza o z-index: O z-index da imagem é aumentado e atribuído a ela para garantir que ela apareça no topo.
3. Reseta a Margem: A margem esquerda da imagem é redefinida para 0%, o que faz com que a imagem entre na tela a partir da direita.

4. Atualiza o Índice: O índice nextImage é incrementado para apontar para a próxima imagem.

5. Resetar o Índice (se necessário): Se nextImage alcança o fim da coleção de imagens, ele é resetado para 0.

6. Chama resetImages(): Após 500 milissegundos, a função resetImages() é chamada para mover as imagens que já passaram para fora da área visível.

**`resetImages()`**

Esta função reposiciona todas as imagens, exceto a imagem atualmente visível, para fora da área visível da tela. Funciona da seguinte forma:

1. Determina a Imagem Visível: Calcula a imagem visível subtraindo 1 de nextImage. Se o resultado for menor que 0, é ajustado para o último índice da coleção.

2. Move Imagens Inativas: Itera sobre todas as imagens e move para fora da tela (margin-left: 100%) todas as imagens que não são a imagem visível.

### Intervalo de Tempo

* **`interval**: Um intervalo de tempo é configurado para chamar a função advanceImage() a cada 3 segundos, assegurando a troca automática de imagens.

### Notas Finais

* A transição suave é conseguida utilizando CSS para animar a margem das imagens.

* Este código é uma implementação básica e pode ser ajustada para incluir controles manuais, como botões para avançar ou retroceder as imagens.

* Para melhorar a experiência do usuário, considere adicionar controles de pausa ao passar o mouse sobre o carrossel.

Com esta estrutura, você pode criar facilmente um carrossel de imagens em qualquer página web. Sinta-se à vontade para personalizar e expandir conforme necessário!