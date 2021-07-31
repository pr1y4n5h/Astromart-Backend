function apiServerErrors(err, req, res, next) {
  console.error(err.stack)
  res.status(500).json({success: false, message: "Some server error occured, please try later", errMessage: err.message})
}

module.exports = {apiServerErrors}