async function reviewFormHandler(event) {
  event.preventDefault();

  const review_text = document.querySelector('textarea[name="buyers_review-body]').value.trim();
  const sellers_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (review_text) {
    const response = await fetch('/api/buyer_reviews', {
      method: 'POST',
      body: JSON.stringify({
        sellers_id,
        review_text,
        buyers_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('#review-form').addEventListener('submit', reviewFormHandler);