function gantiHalaman(halamanTujuan){
let beranda = document.getElementById("halaman-beranda");
let tentang = document.getElementById("tentang-kami");
let jalan = document.getElementById("perjalanan");

if(halamanTujuan === 'beranda'){
        beranda.style.display = "block";
        tentang.style.display = "none";
        jalan.style.display = "none";

    } else if(halamanTujuan === 'tentang'){
        beranda.style.display = "none";
        tentang.style.display = "block";
        jalan.style.display = "none";
    } else if(halamanTujuan === 'jalan'){
         beranda.style.display = "none";
        tentang.style.display = "none";
        jalan.style.display = "block";
    }
    window.scrollTo(0,0);


}