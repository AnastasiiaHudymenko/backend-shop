const HttpError = require("../helpers/HttpError");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    if (req.body.basket.length === 0) {
      next(HttpError(400));
    }
    const { error } = schema.validate(req.body);

    if (error) {
      if (Object.keys(req.body).length === 0) {
        throw HttpError(400, "missing fields");
      }
      console.log(error.message);
      const match = error.message.match(/"([^"]*)"/);
      next(HttpError(400, `missing required ${match[1]} field`));
    }
    next();
  };
  return func;
};

module.exports = validateBody;
