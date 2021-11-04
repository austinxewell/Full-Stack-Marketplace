const url = 'https://api.cloudinary.com/v1_1/joseepina/image/upload';
const form = document.querySelector('.new-post-form');
const NO_IMAGE_URL = 
'https://res.cloudinary.com/joseepina/image/upload/v1635966743/istockphoto-922962354-170667a_ys4tsk.jpg';

form.addEventListener('submit', (event) => {
   event.preventDefault();
   const formData = new FormData(form);
   const file = document.querySelector('#item_img').files[0];
   if (file) {
      const formFileData = new FormData();
      formFileData.append('file', file);
      formFileData.append('upload_preset', 'project-2');
      fetch(url, {
         method: 'POST',
         body: formFileData,
      })
         .then((response) => {
            return response.json();
         })
         .then((data) => {
            formData.append('secure_url', data.secure_url);
            fetch(`/api/posts`, {
               method: 'POST',
               body: formData,
            }).then((response) => {
               if (response.ok) {
                  document.location.replace('/mylisting');
               } else {
                  alert('Your item was not submitted!');
               }
            });
         });
   } else {
      formData.append('secure_url', NO_IMAGE_URL);
      fetch(`/api/posts`, {
         method: 'POST',
         body: formData,
      }).then((response) => {
         if (response.ok) {
            document.location.replace('/mylisting');
         } else {
            alert('Your item was not submitted!');
         }
      });
   }
});
