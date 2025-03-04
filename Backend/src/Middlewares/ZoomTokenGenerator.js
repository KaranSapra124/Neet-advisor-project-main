const  axios  = require("axios");

exports.getAuthTokenZoom = async (req, res, next) => {
  try {
    const credentials = `${process.env.ZOOM_CLIENT_ID}:${process.env.ZOOM_CLIENT_SECRET}`;
    // console.log(credentials);
    const base64String = Buffer.from(credentials).toString("base64");
    const { data } = await axios.post(
      `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${process.env.ZOOM_ACCOUNT_ID}`,
      null,
      {
        headers: {
          Authorization: `Basic ${base64String}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );
    const { access_token } = data;
    req.code = access_token;
    next()
  } catch (err) {
    console.log(err)
    return res.status(401).send({ message: "Something Went Wrong", err });
  }
};
