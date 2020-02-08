$('.nav-item').on('click',function(e){
    e.preventDefault();
    $('.nav-item.active').removeClass('active');
    $(this).addClass('active');
})