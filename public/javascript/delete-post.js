async function deleteFormHandler(event) {
   event.preventDefault();
   console.log('~ event', event);
   console.log('deleteFormHandler is clicked');

   
   const id = document.querySelectorAll('.id');
   console.log('This is:', id);
   const response = await fetch(`/api/post/${id}`, {
      method: 'DELETE',
   });

   if (response.ok) {
      document.location.replace('/dashboard/');
   } else {
      alert(response.statusText);
   }
}

document.querySelectorAll('#delete').forEach((button) => {
   button.addEventListener('click', deleteFormHandler);
});
