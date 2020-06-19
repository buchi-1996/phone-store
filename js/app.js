const menu = document.querySelector('.menu');

document.querySelector('.toggle').addEventListener('click', (e) => {
    menu.classList.toggle('show');
})

// $(document).ready(function(){
//     var softalSlider = $('.owl-carousel');
//     softalSlider.owlCarousel({
//         loop: true,
//         items: 1,
//         nav: true,
//         dots: false,
//         autoplayTimeOut: 15000,
//         autoplay: true,
//         navText:['<i class="fa fa-angle-left fa-5x fa-fw"></i>', '<i class="fa fa-angle-right fa-5x fa-fw"></i>'],
 
//     })
//    });

    
    document.addEventListener('DOMContentLoaded', ()=>{
        let owl = $('.owl-stage');
        owl.owlCarousel({
            loop: true,
            items: 1,
            margin: 0,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            smartSpeed: 1200,
            nav: true,
            dots: false,
            autoplay: true,
            navText:['<i class="fa fa-angle-left fa-5x fa-fw"></i>', '<i class="fa fa-angle-right fa-5x fa-fw"></i>'],   
        });

    })

    document.addEventListener('DOMContentLoaded', () => {
        let owl = $('.product-slider');
        owl.owlCarousel({
            loop: true,
            margin: 30,
            // stagePadding: 300,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayTimeOut: 5000,
            responsive : {
                0 : {
                    items: 1,
                },
                480 : {
                    items: 2,
                },
                768 : {
                    items: 3,
                },
                1200 : {
                    items: 4,
                }
            }
        })
    })


