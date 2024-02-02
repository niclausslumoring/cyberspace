document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("imageSlider");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;

  function showImage(index) {
    var active = [];
    const images = slider.children;
    const screenWidth = window.innerWidth;

    // Menentukan jumlah foto yang akan ditampilkan berdasarkan lebar layar
    const numVisibleImages = screenWidth >= 640 ? 3 : 1;

    for (let i = 0; i < images.length; i++) {
      const adjustedIndex = (index + i) % images.length;
      if (i >= 0 && i < numVisibleImages) {
        images[adjustedIndex].classList.remove("hidden");
        active.push(adjustedIndex);
      } else {
        images[adjustedIndex].classList.add("hidden");
      }
    }
    // console.log(active);
    if (JSON.stringify(active) === JSON.stringify([4, 5, 0])) {
      // console.log("TET");
      slider.innerHTML = `
      <img src="temp-asset/partnership/sevilla.png" alt="" class="image__slider" />
      <img src="temp-asset/partnership/btb.png" alt="" class="image__slider" />
      <img src="temp-asset/partnership/uph.png" alt="" class="image__slider" />
      <img src="temp-asset/partnership/hope.png" alt="" class="image__slider hidden" />
      <img src="temp-asset/partnership/gatau.png" alt="" class="image__slider hidden" />
      <img src="temp-asset/partnership/bbs.png" alt="" class="image__slider hidden" />            
      `;
    } else if (JSON.stringify(active) === JSON.stringify([5, 0, 1])) {
      // console.log("TET");
      slider.innerHTML = `
      <img src="temp-asset/partnership/btb.png" alt="" class="image__slider" />
      <img src="temp-asset/partnership/uph.png" alt="" class="image__slider" />
      <img src="temp-asset/partnership/hope.png" alt="" class="image__slider" />
      <img src="temp-asset/partnership/gatau.png" alt="" class="image__slider hidden" />
      <img src="temp-asset/partnership/bbs.png" alt="" class="image__slider hidden" />
      <img src="temp-asset/partnership/sevilla.png" alt="" class="image__slider hidden" />
      `;
    } else {
      slider.innerHTML = `
      <img src="temp-asset/partnership/uph.png" alt="" class="image__slider" />
      <img src="temp-asset/partnership/hope.png" alt="" class="image__slider" />
      <img src="temp-asset/partnership/gatau.png" alt="" class="image__slider" />
      <img src="temp-asset/partnership/bbs.png" alt="" class="image__slider" />
      <img src="temp-asset/partnership/sevilla.png" alt="" class="image__slider" />
      <img src="temp-asset/partnership/btb.png" alt="" class="image__slider" />
      `;
      for (let i = 0; i < images.length; i++) {
        const adjustedIndex = (index + i) % images.length;
        if (i >= 0 && i < numVisibleImages) {
          images[adjustedIndex].classList.remove("hidden");
        } else {
          images[adjustedIndex].classList.add("hidden");
        }
      }
    }
  }

  function prevImage() {
    const screenWidth = window.innerWidth; // Tambahkan ini
    const numVisibleImages = screenWidth >= 640 ? 3 : 1;
    currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
    showImage(currentIndex);
    console.log(currentIndex);
  }

  function nextImage() {
    const screenWidth = window.innerWidth; // Tambahkan ini
    const numVisibleImages = screenWidth >= 640 ? 3 : 1;
    currentIndex = (currentIndex + 1) % slider.children.length;
    showImage(currentIndex);
    console.log(currentIndex);
  }

  prevBtn.addEventListener("click", prevImage);
  nextBtn.addEventListener("click", nextImage);

  // Show the initial images
  showImage(currentIndex);
});
