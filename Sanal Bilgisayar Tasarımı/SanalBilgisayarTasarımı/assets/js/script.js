function allProsess() {
    var progressBar = document.getElementById("progressBar");
    var progressValue = 0;
    var pageTitle = document.getElementById("prosessTitle");


    // Giriş yaptıktan sonra gelen yükeleme barı fonksiyonu
    function progressBarUpdate() {
        if (progressValue < 99) {

            pageTitle.innerText = "Giriş Yapılıyor...";
            progressValue += 3;
            updateProgressBar(progressValue);
        } else if (progressValue === 99) {

            pageTitle.innerText = "Neredeyse Bitti...";
            setTimeout(function () {
                progressValue = 100;
                pageTitle.classList.add("text-success");
                pageTitle.innerText = "Hoşgeldiniz !";
                updateProgressBar(progressValue);
            }, 5000);
        }
        else if (progressValue === 100) {
            window.location.href = "desktop.html";


        }

    }
    // bar değerleri atama fonksiyonu
    function updateProgressBar(value) {
        progressBar.style.width = value + "%";
        progressBar.innerHTML = value + " %";
        progressBar.setAttribute("aria-valuenow", value);


    }

    setInterval(progressBarUpdate, 100);
};

var barShow = document.getElementById("prosessBar");
var formShow = document.getElementById("Kullanıcı-form");
// Butona basıldıktan sonra çalışan fonksiyon
function login() {
    event.preventDefault();
    var password = document.getElementById("password").value;
    event.preventDefault();
    if (password === "1234") {
        barShow.style.display = "block";
        allProsess();
        formShow.style.display = "none";


    }
    else {
        alert("Yanlış Şifre Girdiniz!");
        document.getElementById("password").value = ""
    }

}


// tarih ve zaman fonksiyonu
function updateDateTime() {
    var now = new Date();
    var dateString = now.toLocaleDateString();
    var timeString = now.toLocaleTimeString();

    document.getElementById("date").innerHTML = dateString;
    document.getElementById("time").innerHTML = timeString;
}

setInterval(updateDateTime, 1000);
updateDateTime();

// Resim Modal için fonksiyon
function openImageModal(imageSrc) {

    var img = document.createElement("img");
    img.src = imageSrc;
    img.classList.add("img-fluid");


    var modalBody = document.querySelector("#imageModal .modal-body");
    modalBody.innerHTML = "";
    modalBody.appendChild(img);


    var modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
}
// Resmi yukarı kaydırmak için fonksiyon
function slideUpAndDisappear() {
    var image = document.getElementById('fullSizeImage');
    var initialTop = 0;
    var interval = 5;
    var step = 2.5;

    var moveImage = function () {
        initialTop -= step;
        image.style.top = initialTop + 'px';


        if (window.innerHeight + initialTop <= 0) {
            clearInterval(animation);
            image.style.display = 'none';
        }
    };

    var animation = setInterval(moveImage, interval);
}


function desktopLogin() {

    powerButon = document.getElementById("power");
    powerButon.style.display = "none";
    slideUpAndDisappear();
    uyku();
}

function uyku() {
    setTimeout(function () {
        form = document.getElementById("gizleForm");

        form.style.display = "block";
    }, 2130);
}

function pckapat() {
    window.location.href = "index.html";

}

