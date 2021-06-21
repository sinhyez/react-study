//-------------------------------------------------------
// Custom ErrorHandler
//-------------------------------------------------------

exports.errorHandle = (err, req, res, next) => {
  console.log(err)

  if('CastError' === err.name) return res.status(404).send({ err: err.message, message: 'error!' })

  res.status(500).send({ err: err.message })
}