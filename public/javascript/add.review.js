async function newReviewFormHandler(event) {
    event.preventDefault();

    const purchased_id = document.querySelector('').value.trim();
    const buyer_id = document.querySelector('').value.trim();
    const buyers_review = document.querySelector('#review-buyers_review').value.trim();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    console.log(buyers_review, post_id);
}

document.querySelector('#review-form').addEventListener('submit', newReviewFormHandler);