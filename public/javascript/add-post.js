async function newFormHandler(event) {
   event.preventDefault();

   const title = document.querySelector('input[name="post-title"]').value;
   const price = document.querySelector('input[name="post-price"]').value;
   const info = document.querySelector('input[name="post-info"]').value;
   const shipping = document.querySelector('input[name="post-shipping"]').value;

   const imgPath = document.querySelector('input[name="image-file"]').value;
   const image_path = imgPath
      ? `/public/images/` + imgPath.toString().split('\\')[imgPath.toString().split('\\').length - 1]
      : `/public/images/not_available.png`;

   const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
         title,
         price,
         info,
         shipping,
         image_path,
      }),
      headers: {
         'Content-Type': 'applicaton/json',
      },
   });

   if (response.ok) {
      document.location.replace('/dashboard');
   } else {
      alert(response.statusText);
   }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
