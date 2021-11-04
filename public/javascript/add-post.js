async function newFormHandler(event) {
    event.preventDefault();

    // const title = document.querySelector('input[name="post-title"]').value.trim();
    // const price = document.querySelector('input[name="post-price"]').value.trim();
    // const shipping = document.querySelector('input[name="post-shipping"]').value.trim();
    // const description = document.querySelector('input[name="post-description"]').value.trim();
    // const picture_url = document.querySelector('input[name="picture_url"]').value.trim();

    const title = document.querySelector('#post-title').value.trim();
    const price = document.querySelector('#post-price').value.trim();
    const shipping = document.querySelector('#post-shipping').value.trim();
    const description = document.querySelector('#post-description').value.trim();
    const picture_url = document.querySelector('#picture_url').value.trim();

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
        alert('Your item was not submitted!');
    }
}

document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);