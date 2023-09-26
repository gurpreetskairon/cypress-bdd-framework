class ShopPage {
  elements = {
    productQuantityPrice: new Map(),
  };

  // action methods
  addProductsToCart(productData) {
    productData.hashes().forEach((row) => {
      // click on the Buy button of the production for the number of times = quantity expected
      for (let i = 0; i < Number(row.quantity); i++) {
        cy.contains(row.product.toString())
          .parent()
          .children("p")
          .children("a")
          .click();
      }

      // extracrt the price of the product selected and add it to the product map
      cy.contains(row.product)
        .parent()
        .children("p")
        .children("span")
        .then((element) => {
          this.elements.productQuantityPrice.set(row.product, [
            row.quantity,
            element.text(),
          ]);
        });
    });
    return this.elements.productQuantityPrice;
  }
}
export default ShopPage;
