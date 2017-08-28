/* Auth APIs */
export const BASE_URL = 'http://api-server-test.carcility.com';
export const SIGNUP = BASE_URL + '/auth/signup';
export const SIGNIN = BASE_URL + '/auth/login';
export const SOCIAL_AUTH = BASE_URL + '/auth/socialsignin';
export const FORGOT_PASSWORD = BASE_URL + '/auth/forgot-password';
export const VERIFY_OTP = BASE_URL + '/api/users/verifyotp/';
export const VERIFY_EMAIL = BASE_URL + '/auth/verifyemail';
export const REQUEST_OTP = BASE_URL + '/api/users/otp';
export const RESET_PASSWORD = BASE_URL + '/auth/reset-password';
export const LOGOUT = BASE_URL + '/auth/logout';

/* Car Profile APIs */
export const CREATE_CAR_PROFILE = BASE_URL + '/api/vehicles';
export const CURRENT_USER_DETAILS = BASE_URL + '/api/users/me';
export const LIST_CAR_PROFILES = BASE_URL + '/api/vehicles';
export const EDIT_CAR_PROFILES = BASE_URL + '/api/vehicles/';
export const GET_CAR_PROFILE_DETAILS = BASE_URL + '/api/vehicles/';
export const DELETE_CAR_PROFILE = BASE_URL + '/api/vehicles/';
export const CAR_MAKE_AND_MODELS = BASE_URL + '/api/cars';
