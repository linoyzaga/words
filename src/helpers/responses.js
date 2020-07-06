const OK = 200;

const successResponse = (data, res) => {
  return res.status(OK).json(data);
};

module.exports = {
  successResponse,
}