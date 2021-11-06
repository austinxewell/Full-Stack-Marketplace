async function deleteFormHandler(event) {
   event.preventDefault();
   console.log('deleteFormHandler is clicked');

   const id = this.post.id;
   console.log('This is ID:', id);
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

// * EXAMPLE CODE TO EXPLORE *
// *var allSubjectName = document.querySelectorAll('.subjectName');
// *for (var index = 0; index < allSubjectName.length; index++) {
// *   allSubjectName[index].addEventListener('click', function () {
// *      this.classList.toggle('active');
// *   });
// *   allSubjectName[index].querySelector('button').addEventListener('click', function () {
// *      this.closest('.subjectName').remove();
// *   });
// * }
