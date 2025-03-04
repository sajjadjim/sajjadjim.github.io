$(document).ready(function(){ 
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings: ["Computer Engineer", "Programmer", "Web Developer"],
        typeSpeed: 150,
        backSpeed: 70,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Computer Engineer", "Programmer", "Web Developer"],
        typeSpeed: 150,
        backSpeed: 60,
        loop: true
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

function openModal(reference) {
    const modal = document.getElementById("referenceModal");
    const modalContent = document.getElementById("modalContent");

    modalContent.innerHTML = `
        <h3>${reference.name}</h3>
        <br>
        <p>${reference.designation}</p>
        <p>${reference.department}</p>
        <p>${reference.company}</p>
        <br>
        <p>Contact: ${reference.contact}</p>
        <p>Email: <a href="mailto:${reference.email}" style="color: #111;">${reference.email}</a></p>
    `;

    modal.style.display = "block";

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

function closeModal() {
    const modal = document.getElementById("referenceModal");
    modal.style.display = "none";
}
