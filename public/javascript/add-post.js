async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const price = document.querySelector('input[name="post-price"]').value;
    const info = document.querySelector('input[name="post-info"]').value;
    const shipping = document.querySelector('input[name="post-shipping"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            price,
            info,
            shipping
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