$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true, 
    animateOut: 'fadeOut',
    autoplaySpeed: 5,

    responsive:{
        0:{
            items:1 //số lượng phần tử hiển thị tùy theo độ phân giải
        },
        600:{
            items:1 //số lượng phần tử hiển thị tùy theo độ phân giải
        },
        1000:{
            items:1 //số lượng phần tử hiển thị tùy theo độ phân giải
        }
    }
})
