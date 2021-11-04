async function newFormHandler(event) {
   event.preventDefault();

   const form = document.querySelector('.new-post-form');
   const formData = new FormData(form);
   
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

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
