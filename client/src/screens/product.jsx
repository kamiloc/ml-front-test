import React from "react";

import { getItem } from "api/items";
import Loader from "components/loader";
import Breadcrumb from "components/breadcrumb";
import ProductDetail from "components/product-details";

export default class Product extends React.Component {
  state = { isError: false, isLoading: true, productInfo: null };

  componentDidMount() {
    const { productId } = this.props;
    getItem(productId).then((data) => this.setState({ isLoading: false, productInfo: data.item }));
  }

  render() {
    const { isLoading, productInfo } = this.state;
    const breadCrumbItems = [
      { text: "Electrónica, Audio y Video", url: "#" },
      { text: "iPod", url: "#" },
      { text: "Reproductores", url: "#" },
      { text: "iPod touch", url: "#" },
      { text: "32GB", url: "#" },
    ];

    if (isLoading) return <Loader />;
    else if (productInfo !== null)
      return (
        <>
          <Breadcrumb items={breadCrumbItems} />
          <ProductDetail product={productInfo} />
        </>
      );
    else return <div>Error, no se encontraron resultados.</div>;
  }
}
