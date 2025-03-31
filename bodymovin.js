//sunny
var animation_sunny = lottie.loadAnimation({
    container: document.getElementById('sunny'), 
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animation/sunny.json', // Replace with your JSON file path or URL

    //rendererSettings is setting in Lottie controls how the animation scales within its container while maintaining its aspect ratio.

    // rendererSettings: {
    //     preserveAspectRatio: 'xMidYMid meet' // Adjusts aspect ratio
    // }
});

// Change size dynamically
// document.getElementById('sunny').style.width = "50px";
// document.getElementById('sunny').style.height = "50px";

//cloudy
var animation_cloudy = lottie.loadAnimation({
    container: document.getElementById('cloudy'), 
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animation/cloudy.json' // Replace with your JSON file path or URL
});

//thunder

var animation_thunder = lottie.loadAnimation({
    container: document.getElementById('thunder'), 
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animation/thunder.json' // Replace with your JSON file path or URL
});

var animation_rain = lottie.loadAnimation({
    container: document.getElementById('rain'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animation/rain.json'
});

