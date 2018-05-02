const axios = require("axios");
module.exports = {
  getProducts: (req, res, next) => {
    const db = req.app.get("db");

    db
      .all_products()
      .then(products => res.status(200).send(products))
      .catch(error =>
        res.status(500).send(error, "Sorry an unknown error occured")
      );
  },
  deleteProduct: (req, res, next) => {
    const db = req.app.get("db");
    const { params } = req;

    db
      .delete_product([params.id])
      .then(products => res.status(200).send(products))
      .catch(error =>
        res.status(500).send(error, "Sorry an unknown error occured")
      );
  },
  updateProduct: (req, res, next) => {
    const db = req.app.get("db");
    const { params, body } = req;

    db
      .update_product([
        params.id,
        body.image,
        body.name,
        body.price,
        body.description,
        body.stock
      ])
      .then(products => res.status(200).send(products))
      .catch(error =>
        res.status(500).send(error, "Sorry an unknown error occured")
      );
  },
  createProduct: (req, res, next) => {
    const db = req.app.get("db");
    const { image, name, description, price, stock } = req.body;

    db
      .create_product([image, name, description, price, stock])
      .then(products => res.status(200).send(products))
      .catch(error =>
        res.status(500).send(error, "Sorry an unknown error occured")
      );
  },
  auth: (req, res) => {
    axios
      .post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, {
        client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
        client_secret: process.env.REACT_APP_AUTH0_CLIENT_SECRET,
        code: req.query.code,
        grant_type: "authorization_code",
        redirect_uri: `http://${req.headers.host}/auth/callback`
      })
      .then(accessTokenResponse => {
        const accessToken = accessTokenResponse.data.access_token;
        return axios
          .get(
            `https://${
              process.env.REACT_APP_AUTH0_DOMAIN
            }/userinfo/?access_token=${accessToken}`
          )
          .then(userInfoResponse => {
            const userData = userInfoResponse.data;
            return req.app
              .get("db")
              .find_user_by_auth0_id(userData.sub)
              .then(users => {
                  if (users.length) {
                  const user = users[0];
                  req.session.user = {
                    email: user.email,
                    name: user.name,
                    cart: []
                  };
                  res.redirect('/');
                } else {
                  const createData = [
                    userData.sub,
                    userData.email,
                    userData.name,
                  ];
                  return req.app
                    .get("db")
                    .createUser(createData)
                    .then(newUsers => {
                      const user = newUsers[0];
                      req.session.user = { email: user.email, name: user.name, cart: []};
                    });
                    res.redirect('/');
                }
              });
          });
      })
      .catch(error => {
        console.log("error in /auth/callback", error);
        res
          .status(500)
          .json({ message: "An unexpected error occurred on the server." });
      });
  },
  logout: (req, res) => {
    // const name = req.sezsion.user.name;
    req.session.destroy();
    res.json({ message: `See you next time` });
  },
  cart: (req, res) => {
    const { name, price, image } = req.body;
    console.log(req.body);
    req.session.user.push([...req.session.user, { name, price, image }]);
    res.json({ cart: req.session.user });
  }
};
