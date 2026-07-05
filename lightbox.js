document.addEventListener("DOMContentLoaded", function () {
  var images = Array.prototype.slice.call(document.querySelectorAll(".gallery-grid img.gallery-shot"));
  if (images.length === 0) return;

  var overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  overlay.innerHTML =
    '<button class="lightbox-close" aria-label="Close">&times;</button>' +
    '<button class="lightbox-nav lightbox-prev" aria-label="Previous screenshot">&#8249;</button>' +
    '<img class="lightbox-img" alt="" />' +
    '<button class="lightbox-nav lightbox-next" aria-label="Next screenshot">&#8250;</button>';
  document.body.appendChild(overlay);

  var lightboxImg = overlay.querySelector(".lightbox-img");
  var prevBtn = overlay.querySelector(".lightbox-prev");
  var nextBtn = overlay.querySelector(".lightbox-next");
  var currentIndex = 0;

  function show(index) {
    currentIndex = (index + images.length) % images.length;
    var img = images[currentIndex];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || "";
  }

  function open(index) {
    show(index);
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function close() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    lightboxImg.src = "";
  }

  images.forEach(function (img, index) {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", function () {
      open(index);
    });
  });

  overlay.addEventListener("click", close);

  [prevBtn, nextBtn, lightboxImg].forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  });

  prevBtn.addEventListener("click", function () {
    show(currentIndex - 1);
  });

  nextBtn.addEventListener("click", function () {
    show(currentIndex + 1);
  });

  document.addEventListener("keydown", function (e) {
    if (!overlay.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(currentIndex - 1);
    if (e.key === "ArrowRight") show(currentIndex + 1);
  });
});
