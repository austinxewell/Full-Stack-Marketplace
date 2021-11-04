// async function newListingFormHandler(event) {
//    event.preventDefault();

//    console.log('INSIDE LISTENER ---- ');

//    const form = document.querySelector('.new-post-form');
//    const formData = new FormData(form);

//    console.log('item_img: ', formData.get('item_img'));
//    const response = await fetch(`/api/posts`, {
//       method: 'POST',
//       body: formData,
//    });
//    if (response.ok) {
//       document.location.replace('/mylisting');
//    } else {
//       alert('Your item was not submitted!');
//    }
// }

// document.querySelector('.new-post-form').addEventListener('submit', newListingFormHandler);
// *************************************************************************
const url = 'https://api.cloudinary.com/v1_1/joseepina/image/upload';

const form = document.querySelector('.new-post-form');
const NO_IMAGE_URL =
   'https://res.cloudinary.com/joseepina/image/upload/v1635966743/istockphoto-922962354-170667a_ys4tsk.jpg';

form.addEventListener('submit', (event) => {
   event.preventDefault();

   //const files = document.querySelector('#item_img').files;
   const file = document.querySelector('#item_img').files[0];
   console.log('~ file', file);

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
            console.log('INSIDE LISTENER ---- ');

            // const form = document.querySelector('.new-post-form');
            const formData = new FormData(form);
            formData.append('secure_url', data.secure_url);
            console.log('~ secure_url', data.secure_url);

            console.log('~~~ Form Data. Item Title: ', formData.get('item_title'));
            console.log('~~~ Form Data. Item Price: ', formData.get('item_price'));
            console.log('~~~ Form Data. Item Shipping: ', formData.get('item_shipping'));
            console.log('~~~ Form Data. Item Description: ', formData.get('item_description'));
            console.log('~~~ Form Data. Item URL: ', formData.get('secure_url'));
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

            // const response = fetch(`/api/posts`, {
            //    method: 'POST',
            //    body: formData,
            // });
            // if (response.ok) {
            //    document.location.replace('/mylisting');
            // } else {
            //    alert('Your item was not submitted!');
            // }
         });
   } else {
      console.log('INSIDE LISTENER ---- ');

      // const form = document.querySelector('.new-post-form');
      const formData = new FormData(form);
      formData.append('secure_url', NO_IMAGE_URL);
      console.log('~ secure_url', NO_IMAGE_URL);

      console.log('item_img: ', formData.get('item_img'));
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
