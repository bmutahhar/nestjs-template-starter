import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production')
    .default('development'),
  API_PORT: Joi.number().default(3000),
  API_PREFIX: Joi.string().default('/api'),
  //   DB_HOST: Joi.string().required(),
  //   DB_PORT: Joi.number().default(5432),
  //   DB_USERNAME: Joi.string().required(),
  //   DB_PASSWORD: Joi.string().required(),
  //   DB_NAME: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRY_TIME: Joi.string().required(),
  DATABASE_URL: Joi.string().required(),
  //   BCRYPT_SALT: Joi.number().default(10),
});
