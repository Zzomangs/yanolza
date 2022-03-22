// for progress tag in HTML 
function tag () {
  let progress = document.querySelector('.progressTag')
  let progress2 = document.querySelector('.progressTag2')
  let progress3 = document.querySelector('.progressTag3')
  let progress4 = document.querySelector('.progressTag4')
  let interval = 1
  let updatesPerSecond = 1000 / 60
  let end = progress.max * 0.95

  function animator () {
    progress.value = progress.value + interval
    if ( progress.value + interval < end){
      setTimeout(animator, updatesPerSecond);
    } else { 
      progress.value = end
    }
    progress2.value = progress2.value + interval
    if ( progress2.value + interval < end){
      setTimeout(animator, updatesPerSecond);
    } else { 
      progress2.value = end
    }
    progress3.value = progress3.value + interval
    if ( progress3.value + interval < end){
      setTimeout(animator, updatesPerSecond);
    } else { 
      progress3.value = end
    }
    progress4.value = progress4.value + interval
    if ( progress4.value + interval < end){
      setTimeout(animator, updatesPerSecond);
    } else { 
      progress4.value = end
    }
  }
  

  setTimeout(() => {
    animator()
  }, updatesPerSecond)
}

tag()