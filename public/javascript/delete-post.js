async function deleteFormHandler(event) {
   event.preventDefault();
   console.log('deleteFormHandler is clicked');

   //const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
   const response = await fetch(`/api/post/${id}`, {
      method: 'DELETE',
   });

   if (response.ok) {
      document.location.replace('/dashboard/');
   } else {
      alert(response.statusText);
   }
}

document.querySelector('.delete').forEach((button) => {
   button.addEventListener('click', deleteFormHandler);
});
