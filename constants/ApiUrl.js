export const URL_LOGIN = "auth/sign-in"
export const URL_REGISTER = "auth/sign-up"
export const URL_DOCTORS = "api/doctors"
export const URL_PATIENT = "api/patient"
export const URL_SCHEDULE = "api/schedule"

//
// POST   /api/doctors/
// int     json:"id" db:"id"
// int     json:"id_user" db:"id_user" binding:"required"
// float64 json:"salary"
// string  json:"qualifications"
// string  json:"contacts"
//
// GET    /api/doctors/
// GET    /api/doctors/:id
// PUT    /api/doctors/:id
// int     json:"id" db:"id"
// int     json:"id_user" db:"id_user" binding:"required"
// float64 json:"salary"
// string  json:"qualifications"
// string  json:"contacts"
//
// DELETE /api/doctors/:id
//
//
//
// POST   /api/patient/
// int    json:"id" db:"id"
// int    json:"id_user" db:"id_user" binding:"required"
// string json:"description"
// bool   json:"recovered"
//
// GET    /api/patient/
// GET    /api/patient/:id
// PUT    /api/patient/:id
// int    json:"id" db:"id"
// int    json:"id_user" db:"id_user" binding:"required"
// string json:"description"
// bool   json:"recovered"
// DELETE /api/patient/:id
//
//
// POST   /api/schedule/
// int    json:"id" db:"id"
// int    json:"id_user" db:"id_user" binding:"required"
// string json:"title"
// string json:"description"
// GET    /api/schedule/
// GET    /api/schedule/:id
// PUT    /api/schedule/:id
// int    json:"id" db:"id"
// int    json:"id_user" db:"id_user" binding:"required"
// string json:"title"
// string json:"description"
// DELETE /api/schedule/:id
//
//
// POST   /api/schedule/:id/event/
// int    json:"id" db:"id"
// string json:"id_patient" db:"id_patient" binding:"required"
// int    json:"id_users" db:"id_user" binding:"required"
// string json:"title"
// string json:"description"
// string json:"time_start"
// string json:"time_end"
// GET    /api/schedule/:id/event/
// GET    /api/schedule/event/:id
// PUT    /api/schedule/event/:id
// DELETE /api/schedule/event/:id

