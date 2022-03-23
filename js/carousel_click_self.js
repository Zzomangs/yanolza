toRight = function() {
  galleryEle = document.querySelector('#gallery');
  galleryEle.classList.remove('lt');
  if (galleryEle.classList.contains('no1')) {
    galleryEle.classList.remove('no1');
    galleryEle.classList.add('no2');
  }
  else if (galleryEle.classList.contains('no2')) {
    galleryEle.classList.remove('no2');
    galleryEle.classList.add('no3');
  }
  else if (galleryEle.classList.contains('no3')) {
    galleryEle.classList.remove('no3');
    galleryEle.classList.add('no1');
  }
  timer = 0;
};

toLeft = function() {
  galleryEle = document.querySelector('#gallery');
  if (galleryEle.classList.contains('no1')) {
    galleryEle.classList.remove('no1');
    galleryEle.classList.add('no3');
    galleryEle.classList.add('lt');
  }
  else if (galleryEle.classList.contains('no2')) {
    galleryEle.classList.remove('no2');
    galleryEle.classList.add('no1');
    galleryEle.classList.add('lt');
  }
  else if (galleryEle.classList.contains('no3')) {
    galleryEle.classList.remove('no3');
    galleryEle.classList.add('no2');
    galleryEle.classList.add('lt');
  }
  timer = 0;
};

 setTimeout(function() {
  timer = 0;
  (function aniBinder() {
    setTimeout(function() {
      timer = timer || 1;
      if (timer === 5) {
        galleryEle = document.querySelector('#gallery');
        galleryEle.classList.remove('lt');
        if (galleryEle.classList.contains('no1')) {
          galleryEle.classList.remove('no1');
          galleryEle.classList.add('no2');
         }
         else if (galleryEle.classList.contains('no2')) {
            galleryEle.classList.remove('no2');
            galleryEle.classList.add('no3');
         }
         else if (galleryEle.classList.contains('no3')) {
           galleryEle.classList.remove('no3');            
           galleryEle.classList.add('no1');
         }
         timer = 0;
        }   
        ++timer;
        aniBinder();
    }, 1000);
  })();
}, 2000);






