const { Router } = require("express");
const Axios = require("axios").default;

const API_URL = "https://api.mercadolibre.com";
const HEADERS_DEFAULT = { "Content-Type": "application/json" };

const apiRouter = Router();

apiRouter.get("/items", (req, res) => {
  const url = `${API_URL}/sites/MLA/search`,
    params = { q: req.query.search };

  Axios({ url, params, method: "get", headers: HEADERS_DEFAULT })
    .then((rawRes) => {
      const { filters, results } = rawRes.data;

      const result = {
        author: { name: "Cristian", lastname: "Barreto" },
        categories: filters && filters.length ? filters.find((filter) => filter.id === "category").values[0].path_from_root : [],
        items: results.slice(0, 4).map((item) => ({
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: item.price,
            decimals: 0,
          },
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
          location: item.address.state_name,
        })),
      };

      res.status(rawRes.status).send(result);
    })
    .catch((err) => res.status(500).send(err));
});

apiRouter.get("/items/:id", (req, res) => {
  const { id } = req.params;

  Promise.all([
    Axios({ url: `${API_URL}/items/${id}`, method: "get", headers: HEADERS_DEFAULT }),
    Axios({ url: `${API_URL}/items/${id}/description`, method: "get", headers: HEADERS_DEFAULT }),
  ])
    .then((rawRes) => {
      const item = rawRes[0].data,
        description = rawRes[1].data;

      const result = {
        author: { name: "Cristian", lastname: "Barreto" },
        item: {
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: item.price,
            decimals: 0,
          },
          picture: item.pictures[0].url,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
          sold_quantity: item.sold_quantity,
          description: description.plain_text,
        },
      };

      res.status(200).send(result);
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = apiRouter;
