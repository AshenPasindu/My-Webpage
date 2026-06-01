
// Scroll Animation
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
reveal();

function hideLoader() {
  var loader = document.querySelector('.page-loader');
  if (loader) {
    loader.style.transition = 'opacity 0.4s ease';
    loader.style.opacity = '0';
    loader.style.pointerEvents = 'none';
    setTimeout(function() {
      if (loader && loader.parentNode) loader.parentNode.removeChild(loader);
    }, 500);
  }
}

// Ensure page becomes accessible after ~1.5s
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(hideLoader, 1500);
});

// Fallback: also hide when full load completes (if later)
window.addEventListener('load', function() {
  setTimeout(hideLoader, 1500);
});

// Toggle home background video visibility: only show when #home is the main section
// Use IntersectionObserver to show the background video only when #home is visible
function initHomeVideoObserver() {
  var wrap = document.querySelector('.site-video-wrap');
  var home = document.getElementById('home');
  if (!wrap || !home) return;
  var video = wrap.querySelector('video');

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && entry.intersectionRatio > 0.35) {
        wrap.classList.add('active');
        document.body.classList.add('home-video-active');
        if (video) { try { video.play(); } catch(e){} }
      } else {
        wrap.classList.remove('active');
        document.body.classList.remove('home-video-active');
        if (video) { try { video.pause(); } catch(e){} }
      }
    });
  }, { threshold: [0, 0.15, 0.35, 0.5] });

  observer.observe(home);
}

document.addEventListener('DOMContentLoaded', initHomeVideoObserver);
window.addEventListener('load', initHomeVideoObserver);
