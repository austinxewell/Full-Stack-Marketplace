async function editFormHandler(event) {
    event.preventDefault();


    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            price,
            shipping,
            description,
            picture_url,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.reload;
    } else {
        alert(response.statusText);
    }
  
}
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);