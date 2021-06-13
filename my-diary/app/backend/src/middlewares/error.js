exports.errorHandle = (err, req, res, next) => {
  console.log(err)

  if('CastError' === err.name) return res.status(404).json({ err: err.message, message: 'error!' })
  res.status(500).send('something is wrong')
}