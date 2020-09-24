import React from "react";
import queryString from "query-string";

import { getItems } from "api/items";
import Loader from "components/loader";
import Breadcrumb from "components/breadcrumb";
import ProductItem from "components/product-item";

export default class Search extends React.Component {
  state = { isError: false, isLoading: true, searchItems: [] };

  componentDidMount() {
    const { search } = queryString.parse(window.location.search);

    getItems(search)
      .then((data) => this.setState({ isLoading: false, searchItems: data.items }))
      .catch((err) => console.warn(err));
  }

  render() {
    const { isLoading, searchItems } = this.state;
    const breadCrumbItems = [
      { text: "Electrónica, Audio y Video", url: "#" },
      { text: "iPod", url: "#" },
      { text: "Reproductores", url: "#" },
      { text: "iPod touch", url: "#" },
      { text: "32GB", url: "#" },
    ];

    if (isLoading) return <Loader />;
    else if (searchItems.length)
      return (
        <>
          <Breadcrumb items={breadCrumbItems} />

          <div className="prod-list">
            {searchItems.map((item, index) => (
              <ProductItem product={item} key={index} />
            ))}
          </div>
        </>
      );
    else return <div>Error, no se encontraron resultados.</div>;
  }
}
