import axios from "axios";

const BASE = "http://localhost:3000/forms";

// ========== LOGIN ==========
export async function loginAxiosFunction(data) {
  console.log("loginAxiosFunction called");
  return await axios.post(`${BASE}/login`, data);
}
export async function getAllLoginAxiosFunction() {
  return await axios.get(`${BASE}/login`);
}
export async function getLoginByIdAxiosFunction(id) {
  return await axios.get(`${BASE}/login/${id}`);
}
export async function updateLoginAxiosFunction(id, data) {
  return await axios.put(`${BASE}/login/${id}`, data);
}
export async function deleteLoginAxiosFunction(id) {
  return await axios.delete(`${BASE}/login/${id}`);
}

// ========== SIGNUP ==========
export async function signupAxiosFunction(data) {
  console.log("signupAxiosFunction called");
  return await axios.post(`${BASE}/signup`, data);
}
export async function getAllSignupAxiosFunction() {
  return await axios.get(`${BASE}/signup`);
}
export async function getSignupByIdAxiosFunction(id) {
  return await axios.get(`${BASE}/signup/${id}`);
}
export async function updateSignupAxiosFunction(id, data) {
  return await axios.put(`${BASE}/signup/${id}`, data);
}
export async function deleteSignupAxiosFunction(id) {
  return await axios.delete(`${BASE}/signup/${id}`);
}

// ========== CONTACT ==========
export async function contactAxiosFunction(data) {
  console.log("contactAxiosFunction called");
  return await axios.post(`${BASE}/contact`, data);
}
export async function getAllContactAxiosFunction() {
  return await axios.get(`${BASE}/contact`);
}
export async function getContactByIdAxiosFunction(id) {
  return await axios.get(`${BASE}/contact/${id}`);
}
export async function updateContactAxiosFunction(id, data) {
  return await axios.put(`${BASE}/contact/${id}`, data);
}
export async function deleteContactAxiosFunction(id) {
  return await axios.delete(`${BASE}/contact/${id}`);
}

// ========== NEWSLETTER ==========
export async function newsletterAxiosFunction(data) {
  console.log("newsletterAxiosFunction called");
  return await axios.post(`${BASE}/newsletter`, data);
}
export async function getAllNewsletterAxiosFunction() {
  return await axios.get(`${BASE}/newsletter`);
}
export async function getNewsletterByIdAxiosFunction(id) {
  return await axios.get(`${BASE}/newsletter/${id}`);
}
export async function updateNewsletterAxiosFunction(id, data) {
  return await axios.put(`${BASE}/newsletter/${id}`, data);
}
export async function deleteNewsletterAxiosFunction(id) {
  return await axios.delete(`${BASE}/newsletter/${id}`);
}

// ========== REVIEW ==========
export async function reviewAxiosFunction(data) {
  console.log("reviewAxiosFunction called");
  return await axios.post(`${BASE}/review`, data);
}
export async function getAllReviewAxiosFunction() {
  return await axios.get(`${BASE}/review`);
}
export async function getReviewByIdAxiosFunction(id) {
  return await axios.get(`${BASE}/review/${id}`);
}
export async function updateReviewAxiosFunction(id, data) {
  return await axios.put(`${BASE}/review/${id}`, data);
}
export async function deleteReviewAxiosFunction(id) {
  return await axios.delete(`${BASE}/review/${id}`);
}

// ========== SEARCH ==========
export async function searchAxiosFunction(data) {
  console.log("searchAxiosFunction called");
  return await axios.post(`${BASE}/search`, data);
}
export async function getAllSearchAxiosFunction() {
  return await axios.get(`${BASE}/search`);
}
export async function getSearchByIdAxiosFunction(id) {
  return await axios.get(`${BASE}/search/${id}`);
}
export async function updateSearchAxiosFunction(id, data) {
  return await axios.put(`${BASE}/search/${id}`, data);
}
export async function deleteSearchAxiosFunction(id) {
  return await axios.delete(`${BASE}/search/${id}`);
}

// ========== FEEDBACK ==========
export async function feedbackAxiosFunction(data) {
  console.log("feedbackAxiosFunction called");
  return await axios.post(`${BASE}/feedback`, data);
}
export async function getAllFeedbackAxiosFunction() {
  return await axios.get(`${BASE}/feedback`);
}
export async function getFeedbackByIdAxiosFunction(id) {
  return await axios.get(`${BASE}/feedback/${id}`);
}
export async function updateFeedbackAxiosFunction(id, data) {
  return await axios.put(`${BASE}/feedback/${id}`, data);
}
export async function deleteFeedbackAxiosFunction(id) {
  return await axios.delete(`${BASE}/feedback/${id}`);
}

// ========== SUGGEST GAME ==========
export async function suggestGameAxiosFunction(data) {
  console.log("suggestGameAxiosFunction called");
  return await axios.post(`${BASE}/suggest-game`, data);
}
export async function getAllSuggestGameAxiosFunction() {
  return await axios.get(`${BASE}/suggest-game`);
}
export async function getSuggestGameByIdAxiosFunction(id) {
  return await axios.get(`${BASE}/suggest-game/${id}`);
}
export async function updateSuggestGameAxiosFunction(id, data) {
  return await axios.put(`${BASE}/suggest-game/${id}`, data);
}
export async function deleteSuggestGameAxiosFunction(id) {
  return await axios.delete(`${BASE}/suggest-game/${id}`);
}

// ========== REPORT BUG ==========
export async function reportBugAxiosFunction(data) {
  console.log("reportBugAxiosFunction called");
  return await axios.post(`${BASE}/report-bug`, data);
}
export async function getAllReportBugAxiosFunction() {
  return await axios.get(`${BASE}/report-bug`);
}
export async function getReportBugByIdAxiosFunction(id) {
  return await axios.get(`${BASE}/report-bug/${id}`);
}
export async function updateReportBugAxiosFunction(id, data) {
  return await axios.put(`${BASE}/report-bug/${id}`, data);
}
export async function deleteReportBugAxiosFunction(id) {
  return await axios.delete(`${BASE}/report-bug/${id}`);
}

// ========== COMMENT ==========
export async function commentAxiosFunction(data) {
  console.log("commentAxiosFunction called");
  return await axios.post(`${BASE}/comment`, data);
}
export async function getAllCommentAxiosFunction() {
  return await axios.get(`${BASE}/comment`);
}
export async function getCommentByIdAxiosFunction(id) {
  return await axios.get(`${BASE}/comment/${id}`);
}
export async function updateCommentAxiosFunction(id, data) {
  return await axios.put(`${BASE}/comment/${id}`, data);
}
export async function deleteCommentAxiosFunction(id) {
  return await axios.delete(`${BASE}/comment/${id}`);
}

// ========== RATING ==========
export async function ratingAxiosFunction(data) {
  console.log("ratingAxiosFunction called");
  return await axios.post(`${BASE}/rating`, data);
}
export async function getAllRatingAxiosFunction() {
  return await axios.get(`${BASE}/rating`);
}
export async function getRatingByIdAxiosFunction(id) {
  return await axios.get(`${BASE}/rating/${id}`);
}
export async function updateRatingAxiosFunction(id, data) {
  return await axios.put(`${BASE}/rating/${id}`, data);
}
export async function deleteRatingAxiosFunction(id) {
  return await axios.delete(`${BASE}/rating/${id}`);
}

// ========== PREMIUM ==========
export async function premiumAxiosFunction(data) {
  console.log("premiumAxiosFunction called");
  return await axios.post(`${BASE}/premium`, data);
}
export async function getAllPremiumAxiosFunction() {
  return await axios.get(`${BASE}/premium`);
}
export async function getPremiumByIdAxiosFunction(id) {
  return await axios.get(`${BASE}/premium/${id}`);
}
export async function updatePremiumAxiosFunction(id, data) {
  return await axios.put(`${BASE}/premium/${id}`, data);
}
export async function deletePremiumAxiosFunction(id) {
  return await axios.delete(`${BASE}/premium/${id}`);
}
