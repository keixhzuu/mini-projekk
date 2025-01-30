const slider = document.querySelector('.slider');
const list = document.querySelector('.list');
const thumbnail = document.querySelector('.thumbnail');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const content = document.querySelector('.content');

//home scroll ke bawah otomatis
setTimeout(() => {
    content.scrollIntoView({ behavior: "smooth" });
}, 8000);

//autoplay
let runAuto =setTimeout(() => {
    next.click();
}, 8000);

//jika diklik memanggil fungsi iniSlider
next.addEventListener('click',()=>{
    iniSlider('next');
});

prev.addEventListener('click',()=>{
    iniSlider('prev');
});

const iniSlider = (type)=>{
    const sliderItems = list.querySelectorAll('.item');
    const thumbnailItem = thumbnail.querySelectorAll('.item');

    if(type== 'next'){
        list.appendChild(sliderItems[0]); //elemen pertama dipindah ke akhir (appendchild)
        thumbnail.appendChild(thumbnailItem[0]);
        slider.classList.add('next'); //kelas next ditambahkan ke slider
    }else{
       const lastPosisition = sliderItems.length - 1;
        list.prepend(sliderItems[lastPosisition]); //elemen terakhir dipindah ke awal (prepend)
        thumbnail.prepend(thumbnailItem[lastPosisition]);
        slider.classList.add('prev'); //kelas prev ditambahkan ke slider 
    }

    setTimeout(()=>{ //biar bisa diklik lagi tombolnya (menghilangkan next/prev)
        slider.classList.remove('next');
        slider.classList.remove('prev');
    }, 2000);

    clearTimeout(runAuto); //reset waktu autoplay
    runAuto =setTimeout(() => {
        next.click();
    }, 8000);
};