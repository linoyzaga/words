const BAD_REQUEST = 400;
const OK = 200;

const successResponse = (data, res) => {
  return res.status(OK).json(data);
};

const validationErrorResponse = (res, e) => {
  return res.status(BAD_REQUEST).json({
    message: `Validation error: ${e}`
  });
};

module.exports = {
  successResponse,
  validationErrorResponse,
}