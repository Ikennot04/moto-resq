import Review from "./review.model.js";

export const ReviewService = {
  // CREATE REVIEW =============================================
  async createReview(data) {
    const requestReviewed = await Review.findOne({
      request_id: data?.request_id,
    });

    if (requestReviewed) {
      throw new Error("This service request is already reviewed");
    }
    const review = await Review.create(data);
    return review;
  },
  //   GET REVIEWS BY TECHNICIAN =======================================
  async getReviewsByTechnician(id) {
    const reviews = await Review.find({ technician_id: id });
    return reviews;
  },
  //   GET REVIEWS BY USER =======================================
  async getReviewsByUser(id) {
    const reviews = await Review.find({ user_id: id });
    return reviews;
  },
//   UPDATE REVIEW ==============================================
  async updateReview(id, data) {
    const review = await Review.findById(id);
    if (!review) {
      throw new Error("Review not found");
    }

    // Prevent updating request_id as it's unique
    if (data.request_id && data.request_id !== review.request_id.toString()) {
      throw new Error("Cannot change the service request for a review");
    }

    const updatedReview = await Review.findByIdAndUpdate(
      id,
      { ...data },
      { new: true, runValidators: true }
    );
    return updatedReview;
  },
};
