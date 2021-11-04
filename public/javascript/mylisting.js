async function newListingFormHandler(event) {
   event.preventDefault();

   console.log('INSIDE LISTENER ---- ');

   const form = document.querySelector('.new-post-form');
   const formData = new FormData(form);

   console.log('item_img: ', formData.get('item_img'));
   const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: formData,
   });
   if (response.ok) {
      document.location.replace('/mylisting');
   } else {
      alert('Your item was not submitted!');
   }
}

document.querySelector('.new-post-form').addEventListener('submit', newListingFormHandler);

// async function newListingFormHandler(event) {
//     event.preventDefault();

//     const title = document.querySelector('#post-title').value.trim();
//     const price = document.querySelector('#post-price').value.trim();
//     // const shipping = document.querySelector('#post-shipping').value.trim();
//     const description = document.querySelector('#post-description').value.trim();
//     // const picture_url = document.querySelector('#picture_url').value.trim();

//     const response = await fetch(`/api/posts`, {
//         method: 'POST',
//         body: JSON.stringify({
//             title,
//             price,
//             // shipping,
//             description,
//             // picture_url,
//         }),
//         headers: {
//             'Content-Type': 'applicaton/json'
//         }
//     });

//     if (response.ok) {
//         // document.location.replace('/dashboard');
//         alert('passed')

//     } else {
//         alert('failed');
//         console.log(response)
//     }
// }

// // document.querySelector('#view-your-listings').addEventListener('click', viewYourListingsHandler);

// document.querySelector('#new-mylisting').addEventListener('click', newListingFormHandler);
