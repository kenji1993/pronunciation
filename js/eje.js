document.addEventListener("DOMContentLoaded",function() {
    let main = document.getElementById("main");

    window.addEventListener('deviceorientation', function(e) {
        a = Math.floor(e.alpha);
        b = Math.floor(e.beta);
        g = Math.floor(e.gamma);
        
        let transform = 'rotateZ(' + Math.round(e.alpha) + 'deg) rotateX(' + Math.round(e.beta 90) + 'deg) rotateY(' + Math.round(e.gamma) + 'deg)';
        main.style.transform = transform;
    });
})