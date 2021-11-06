async function viewReviewsFormHandler(event) {
  event.preventDefault();

  const review_text = document.querySelector("#view-reviews").value.trim();

  if (review_text) {
    const response = await fetch("/api/buyer_reviews", {
      method: "GET",
      body: JSON.stringify({
        buyers_review,
        where: {
          buyers_id: req.session.user_id,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

async function reviewFormHandler(event) {
  event.preventDefault();

  const review_text = document.querySelector("#buyers-review").value.trim();

  if (review_text) {
    const response = await fetch("/buyer_reviews", {
      method: "POST",
      body: JSON.stringify({
        buyers_review,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector("#view-reviews-form")
  .addEventListener("click", reviewFormHandler);

document
  .querySelector("#review-form")
  .addEventListener("click", reviewFormHandler);
