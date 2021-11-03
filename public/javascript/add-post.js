async function newFormHandler(event) {
   event.preventDefault();

   const form = document.querySelector('.new-post-form');

   const formData = new FormData(form);
   
 
   
   console.log('FORMDATA**************:', formData.get('item_img'));

   console.log('START FETCH');
   
   const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: formData,
   });

   if (response.ok) {
      console.log('FETCH OK');
      document.location.replace('/mylisting');
   } else {
      console.log('FETCH FAIL');

      alert('Your item was not submitted!');
   }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
