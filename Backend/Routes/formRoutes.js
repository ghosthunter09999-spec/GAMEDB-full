import express from "express";

import {
  loginController, getAllLoginController, getLoginByIdController, updateLoginController, deleteLoginController,
} from "../Controllers/FormControllers/loginController.js";
import {
  signupController, getAllSignupController, getSignupByIdController, updateSignupController, deleteSignupController,
} from "../Controllers/FormControllers/signupController.js";
import {
  contactController, getAllContactController, getContactByIdController, updateContactController, deleteContactController,
} from "../Controllers/FormControllers/contactController.js";
import {
  newsletterController, getAllNewsletterController, getNewsletterByIdController, updateNewsletterController, deleteNewsletterController,
} from "../Controllers/FormControllers/newsletterController.js";
import {
  reviewController, getAllReviewController, getReviewByIdController, updateReviewController, deleteReviewController,
} from "../Controllers/FormControllers/reviewController.js";
import {
  searchController, getAllSearchController, getSearchByIdController, updateSearchController, deleteSearchController,
} from "../Controllers/FormControllers/searchController.js";
import {
  feedbackController, getAllFeedbackController, getFeedbackByIdController, updateFeedbackController, deleteFeedbackController,
} from "../Controllers/FormControllers/feedbackController.js";
import {
  suggestGameController, getAllSuggestGameController, getSuggestGameByIdController, updateSuggestGameController, deleteSuggestGameController,
} from "../Controllers/FormControllers/suggestGameController.js";
import {
  reportBugController, getAllReportBugController, getReportBugByIdController, updateReportBugController, deleteReportBugController,
} from "../Controllers/FormControllers/reportBugController.js";
import {
  commentController, getAllCommentController, getCommentByIdController, updateCommentController, deleteCommentController,
} from "../Controllers/FormControllers/commentController.js";
import {
  ratingController, getAllRatingController, getRatingByIdController, updateRatingController, deleteRatingController,
} from "../Controllers/FormControllers/ratingController.js";
import {
  premiumController, getAllPremiumController, getPremiumByIdController, updatePremiumController, deletePremiumController,
} from "../Controllers/FormControllers/premiumController.js";

const router = express.Router();

// LOGIN CRUD
router.post("/login", loginController);
router.get("/login", getAllLoginController);
router.get("/login/:id", getLoginByIdController);
router.put("/login/:id", updateLoginController);
router.delete("/login/:id", deleteLoginController);

// SIGNUP CRUD
router.post("/signup", signupController);
router.get("/signup", getAllSignupController);
router.get("/signup/:id", getSignupByIdController);
router.put("/signup/:id", updateSignupController);
router.delete("/signup/:id", deleteSignupController);

// CONTACT CRUD
router.post("/contact", contactController);
router.get("/contact", getAllContactController);
router.get("/contact/:id", getContactByIdController);
router.put("/contact/:id", updateContactController);
router.delete("/contact/:id", deleteContactController);

// NEWSLETTER CRUD
router.post("/newsletter", newsletterController);
router.get("/newsletter", getAllNewsletterController);
router.get("/newsletter/:id", getNewsletterByIdController);
router.put("/newsletter/:id", updateNewsletterController);
router.delete("/newsletter/:id", deleteNewsletterController);

// REVIEW CRUD
router.post("/review", reviewController);
router.get("/review", getAllReviewController);
router.get("/review/:id", getReviewByIdController);
router.put("/review/:id", updateReviewController);
router.delete("/review/:id", deleteReviewController);

// SEARCH CRUD
router.post("/search", searchController);
router.get("/search", getAllSearchController);
router.get("/search/:id", getSearchByIdController);
router.put("/search/:id", updateSearchController);
router.delete("/search/:id", deleteSearchController);

// FEEDBACK CRUD
router.post("/feedback", feedbackController);
router.get("/feedback", getAllFeedbackController);
router.get("/feedback/:id", getFeedbackByIdController);
router.put("/feedback/:id", updateFeedbackController);
router.delete("/feedback/:id", deleteFeedbackController);

// SUGGEST GAME CRUD
router.post("/suggest-game", suggestGameController);
router.get("/suggest-game", getAllSuggestGameController);
router.get("/suggest-game/:id", getSuggestGameByIdController);
router.put("/suggest-game/:id", updateSuggestGameController);
router.delete("/suggest-game/:id", deleteSuggestGameController);

// REPORT BUG CRUD
router.post("/report-bug", reportBugController);
router.get("/report-bug", getAllReportBugController);
router.get("/report-bug/:id", getReportBugByIdController);
router.put("/report-bug/:id", updateReportBugController);
router.delete("/report-bug/:id", deleteReportBugController);

// COMMENT CRUD
router.post("/comment", commentController);
router.get("/comment", getAllCommentController);
router.get("/comment/:id", getCommentByIdController);
router.put("/comment/:id", updateCommentController);
router.delete("/comment/:id", deleteCommentController);

// RATING CRUD
router.post("/rating", ratingController);
router.get("/rating", getAllRatingController);
router.get("/rating/:id", getRatingByIdController);
router.put("/rating/:id", updateRatingController);
router.delete("/rating/:id", deleteRatingController);

// PREMIUM CRUD
router.post("/premium", premiumController);
router.get("/premium", getAllPremiumController);
router.get("/premium/:id", getPremiumByIdController);
router.put("/premium/:id", updatePremiumController);
router.delete("/premium/:id", deletePremiumController);

export default router;
