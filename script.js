
        // JavaScript to toggle the display of content
        document.addEventListener('DOMContentLoaded', function () {
          const coll = document.querySelectorAll('.collapsible');
          for (let i = 0; i < coll.length; i++) {
            coll[i].addEventListener('click', function () {
              this.classList.toggle('active');
              const content = this.nextElementSibling;
              if (content.style.display === 'block') {
                content.style.display = 'none';
              } else {
                content.style.display = 'block';
              }
            });
          }
        });
  
        