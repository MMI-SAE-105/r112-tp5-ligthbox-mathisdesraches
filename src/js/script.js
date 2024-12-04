document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('ul img');
    let expandedImage = null;
  
    images.forEach(img => {
      img.addEventListener('click', () => {
        if (img === expandedImage) {
       
          img.classList.remove('expanded');
          document.body.classList.remove('expanding');
          expandedImage = null;
  
         
          img.src = img.dataset.thumbnail;
        } else {
          
          if (expandedImage) {
            expandedImage.classList.remove('expanded');
            expandedImage.src = expandedImage.dataset.thumbnail; 
          }
  
          img.src = img.dataset.fullImg;
          img.classList.add('expanded');
          document.body.classList.add('expanding');
          expandedImage = img;
        }
      });
    });
  
   
    document.body.addEventListener('click', (e) => {
      if (expandedImage && !e.target.closest('ul img')) {
        expandedImage.classList.remove('expanded');
        document.body.classList.remove('expanding');
        expandedImage.src = expandedImage.dataset.thumbnail;
        expandedImage = null;
      }
    });
  });
  
  
