const slides = [
  {
    images: [
      "https://images.unsplash.com/photo-1581093448799-9b6c174ab2aa",
      "https://images.unsplash.com/photo-1601758123927-1965d3b8dc21",
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
    ],
    title: "Your One-Stop Name Solution",
    text: "Simplify the process of finding the perfect and professional name."
  },
  {
    images: [
      "https://images.unsplash.com/photo-1552058544-f2b08422138a",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    ],
    title: "Creative Inspiration Hub",
    text: "Discover endless ideas to craft unique brand identities."
  },
  {
    images: [
      "https://images.unsplash.com/photo-1552058544-f2b08422138a",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    ],
    title: "Start Building Today",
    text: "Let’s begin creating something extraordinary together."
  }
];

let current = 0;
const imageSet = document.getElementById('imageSet');
const title = document.getElementById('title');
const text = document.getElementById('text');
const nextBtn = document.getElementById('nextBtn');
const dots = document.querySelectorAll('.dot');

// 🧠 Barcha rasmlarni oldindan yuklab olish (preload)
function preloadImages() {
  slides.forEach(slide => {
    slide.images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  });
}
preloadImages(); // ishga tushiramiz

nextBtn.addEventListener('click', () => {
  current++;
  if (current < slides.length) {
    updateSlide();
  } else {
    window.location.href = "sign up.html"; // signup sahifaga o'tish
  }
});

function updateSlide() {
  // chiqish animatsiyasi
  imageSet.style.opacity = 0;
  title.style.opacity = 0;
  text.style.opacity = 0;
  imageSet.style.transform = "translateY(20px)";
  title.style.transform = "translateY(20px)";
  text.style.transform = "translateY(20px)";

  // oldindan yuklangan rasmni zudlik bilan almashtirish
  setTimeout(() => {
    imageSet.innerHTML = slides[current].images
      .map(img => `<img src="${img}" loading="eager" alt="">`)
      .join('');

    title.textContent = slides[current].title;
    text.textContent = slides[current].text;

    // nuqtalarni yangilash
    dots.forEach((dot, i) => dot.classList.toggle('active', i === current));

    // kirish animatsiyasi
    requestAnimationFrame(() => {
      imageSet.style.opacity = 1;
      title.style.opacity = 1;
      text.style.opacity = 1;
      imageSet.style.transform = "translateY(0)";
      title.style.transform = "translateY(0)";
      text.style.transform = "translateY(0)";
    });

    if (current === slides.length - 1) nextBtn.textContent = "Get Started";
  }, 200); // vaqt qisqartirildi, javob tezroq
}

    // ///
    