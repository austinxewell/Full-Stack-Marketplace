async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const price = document.querySelector('input[name="post-price"]').value;
    const shipping = document.querySelector('input[name="post-shipping"]').value;
    const description = document.querySelector('input[name="post-info"]').value;

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
            'Content-Type': 'applicaton/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);