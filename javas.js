function slideCards(direction) {
    const cards = document.querySelector('.cards');
    const cardWidth = document.querySelector('.card').offsetWidth;
    const cardsContainerWidth = cards.offsetWidth;
    const cardsVisibleCount = Math.floor(cardsContainerWidth / cardWidth);
    const maxTranslateX = (cards.childElementCount - cardsVisibleCount) * cardWidth;
  
    let currentTranslateX = parseInt(cards.style.transform.slice(11)) || 0;
    
    if (direction === 'next') {
      currentTranslateX -= cardWidth;
      if (currentTranslateX < -maxTranslateX) {
        currentTranslateX = -maxTranslateX;
      }
    } else if (direction === 'prev') {
      currentTranslateX += cardWidth;
      if (currentTranslateX > 0) {
        currentTranslateX = 0;
      }
    }
    
    cards.style.transform = `translateX(${currentTranslateX}px)`;
  }
  