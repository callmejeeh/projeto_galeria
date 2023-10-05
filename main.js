$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const URLimg = $('#endereco-imagem').val();
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src="${URLimg}" />`).appendTo(novoItem);
        $(`
        <div class="overlay-link">
        <a href="${URLimg}" title="Ver imagem em tamanho real" target="_blank">
        Ver imagem em tamanho real
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(500);
        $('#endereco-imagem').val('');
    })
})