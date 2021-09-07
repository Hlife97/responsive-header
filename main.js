$(function () {
    var openMenu = $('#openmenu-btn'),
        responsiveMenu = $('#responsive-menu'),
        logo = $('.container .logo'),
        search = $('.container .search-bar'),
        social = $('.container .social-media'),
        menu = $('.container .menu');

    var responsiveMenuHtml = `
        <a class='close-menu' id='close-menu'>
        <i class = 'bx bxs-x-circle' > </i>
        </a>
        <div class='logo'>
            ${logo.html()}
        </div>
        <div class='search-bar'>
            ${search.html()}
        </div>
        <div class='menu'>
            ${menu.html()}
        </div>
        <div class='social-media'>
            ${social.html()}
        </div>
        `;

    responsiveMenu.html(responsiveMenuHtml);

    var closeMenu = $('#close-menu');

    openMenu.on('click', e => {
        responsiveMenu.addClass('active');
        e.preventDefault();
    });

    closeMenu.on('click', e => {
        responsiveMenu.removeClass('active');
        e.preventDefault();
    });
});