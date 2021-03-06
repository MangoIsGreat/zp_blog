const { HttpException } = require("../core/http-exception");

const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    // 开发环境直接抛出异常，方便定位异常代码：
    const isHttpException = error instanceof HttpException;
    const isDev = global.config.environment === "dev";
    if (isDev && !isHttpException) {
      throw error;
    }

    if (error instanceof HttpException) {
      ctx.body = {
        msg: error.msg,
        error_code: error.errorCode,
        request: `${ctx.method} ${ctx.path}`,
      };

      ctx.status = error.code;
    } else {
      ctx.body = {
        msg: "we made a mistake!",
        error_code: 999,
        request: `${ctx.method} ${ctx.path}`,
      };

      ctx.status = 500;
    }
  }
};

module.exports = catchError;
