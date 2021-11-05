// async function newReviewFormHandler(event) {
//   event.preventDefault();

//   console.log("INSIDE LISTENER ---- ");

//   const form = document.querySelector("#new-review-form");
//   const formData = new FormData(form);

//   const response = await fetch(`/api/buyer-reviews`, {
//     method: "POST",
//     body: formData,
//   });
//   if (response.ok) {
//     document.location.replace("/buyer_reviews");
//   } else {
//     alert("Your review was not submitted!");
//   }
// }

// document.querySelector("#new-review-form").addEventListener("submit", newListingFormHandler);

async function newReviewHandler(event) {
    event.preventDefault();
  
    const buyer_review = document.querySelector("#new-review");
  
    const response = await fetch(`/api/buyer-reviews`, {
      method: "POST",
      body: buyer_review,
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      alert("Review added to purchased listing!");
      //document.location.replace('/dashboard/');  Maybe something like this?
    } else {
      console.log(err);
      alert("Your review was not submitted!");
    }
  }
  
  document
    .querySelector("#new-review")
    .addEventListener("submit", newReviewHandler);