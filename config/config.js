module.exports = {
  environment: "dev",
  database: {
    dbName: "island",
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345678",
  },
  security: {
    secretKey: "abcdefg",
    expiresIn: 60 * 60,
  },
  wx: {
    appId: "wx859326cab90073dc",
    appSecret: "8f1f1357a1fa5746ee0b86aa54f6213e",
    loginUrl: "https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code",
  },
};
