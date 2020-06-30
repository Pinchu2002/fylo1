var slider = document.getElementById("myrange");
var output = document.getElementById("used_storage");
var leftgb = document.getElementById("value");
var Progressbar = document.getElementById("progressbar")

output.innerHTML = slider.value;
leftgb.innerHTML = 1000-slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    leftgb.innerHTML = 1000-this.value;
    Progressbar.style.width = this.value + "%";
}
