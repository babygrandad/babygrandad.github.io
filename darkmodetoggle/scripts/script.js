function toggleDarkMode(){
    $("body").toggleClass("dark-mode");
    $("#box-display").toggleClass("box-display-dark");
    $(".btn").toggleClass("toggle-button-dark")
    
    if ($('.switch-words:eq(0)').text() === 'light') {
        $('.switch-words:eq(0)').text('dark');
        $('.switch-words:eq(1)').text('light');
        $("link[rel='icon']").attr("href", 'images/dark-mode.svg');
        $('.switch-words:eq(0)').removeClass('light-word').addClass('dark-word')
        $('.switch-words:eq(1)').addClass('light-word').removeClass('dark-word')

    } else {
        $('.switch-words:eq(1)').text('dark');
        $('.switch-words:eq(0)').text('light');
        $("link[rel='icon']").attr("href", 'images/light-mode.svg');
        $('.switch-words:eq(1)').removeClass('light-word').addClass('dark-word')
        $('.switch-words:eq(0)').addClass('light-word').removeClass('dark-word')
    }
}