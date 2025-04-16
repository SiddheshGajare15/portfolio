// Store the reviews in an object for each work item.
const reviewsData = {
    "Bug Report Sample": [],
    "Test Case Sheet": []
};

// Function to handle the submission of a review
function submitReview(workTitle) {
    const reviewerName = document.getElementById('reviewer-name').value.trim();
    const reviewText = document.getElementById('review-text').value.trim();

    if (!reviewerName || !reviewText) {
        alert("Please provide both your name and a review.");
        return;
    }

    const newReview = {
        reviewer: reviewerName,
        text: reviewText
    };

    reviewsData[workTitle].push(newReview);

    document.getElementById('reviewer-name').value = '';
    document.getElementById('review-text').value = '';

    displayReviews(workTitle);
}

// Function to display the reviews for a specific work item
function displayReviews(workTitle) {
    const reviewsContainer = document.getElementById('reviews-display');

    reviewsContainer.innerHTML = '';

    if (reviewsData[workTitle].length === 0) {
        reviewsContainer.innerHTML = "<p>No reviews yet. Be the first to review!</p>";
    } else {
        reviewsData[workTitle].forEach((review) => {
            const reviewItem = document.createElement('div');
            reviewItem.classList.add('review-item');

            const reviewer = document.createElement('strong');
            reviewer.textContent = review.reviewer;

            const reviewText = document.createElement('p');
            reviewText.textContent = review.text;

            reviewItem.appendChild(reviewer);
            reviewItem.appendChild(reviewText);
            reviewsContainer.appendChild(reviewItem);
        });
    }
}
