/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Pausing videos once the modal is closed

var GTLSmodal = document.getElementById('GTLSmodal');
var BDmodal = document.getElementById('BDmodal');
var IoTmodal = document.getElementById('IoTmodal');
var BBmodal = document.getElementById('BBmodal');


GTLSmodal.addEventListener('hidden.bs.modal', function (){
    var video = document.getElementById('GTLSvideo');
    video.pause();
});

BDmodal.addEventListener('hidden.bs.modal', function (){
    var video = document.getElementById('BDvideo');
    video.pause();
});

IoTmodal.addEventListener('hidden.bs.modal', function (){
    var video = document.getElementById('IoTvideo');
    video.pause();
});

BBmodal.addEventListener('hidden.bs.modal', function (){
    var video = document.getElementById('BBvideo');
    video.pause();
});
