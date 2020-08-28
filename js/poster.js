document.addEventListener('scroll', () => {
    let scroll_pos = $(this).scrollTop();
    if(scroll_pos >= $('#switching-point').offset().top)
        $('.sticky-social').css({'flex-direction': 'column', 'bottom': '25%'});
    else
        $('.sticky-social').css({'flex-direction': 'row', 'bottom': '0%'});
});

$(document).on('ready', () => {
    $(document).css({'background-color': '#ff003f'});
});

function acceptDisclaimer(){
    $('.disclaimer').css({'display': 'none'});
    $('.main-content').css({'display': 'block'});
}