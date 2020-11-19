document.addEventListener("DOMContentLoaded",function() {
    let content = document.getElementById('content');

    window.addEventListener('deviceorientation', function(e) {
        a = Math.floor(e.alpha);
        b = Math.floor(e.beta);
        c = Math.floor(e.gamma);
        
        let transform = 'rotateZ('+ Math.round(e.alpha) +' deg) rotateX('+ Math.round(e.beta -90) +' deg) rotateY('+ Math.round(e.gamma) +' deg)';

        content.style.transform = transform;
    });
})