$(document).ready(function() {
    $('#carousel-images').slick({
        autoplay: true,
    });

    $('.menu-hamburger').click(function() {
        $('nav').slideToggle()
    });

    $('#cpf').mask('000.000.000-00');
    $('#telefone').mask('(00) 00000-0000');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },

            email: {
                required: true,
                email: true
            },

            cpf: {
                required: true
            }
        },

        messages: {
            nome: 'Por favor, insira seu nome.',
            email: 'Por favor, preencha seu e-mail.',
            cpf: 'Por favor, informe seu CPF.'
        }
    });


    $('.container-planos button').click(function() {
        const destino = $('#cadastro');

        const plano = $(this).parent().find('h4').text();

        $('#plano').val(plano);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    });
})