const editReviewFormHandler = async (event) => {
    event.preventDefault();

    const id = document.getElementById()

    const response = await fetch(`/api/reviews/${id}`, {
        method: 'POST',
        body: JSON.stringify({
            buyer_review,
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
};

document.querySelector('#edit-review-form').addEventListener('submit', editReviewFormHandler);
