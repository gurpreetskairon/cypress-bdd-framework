class CartPage {
  elements = {
    lblTotal: () => cy.get(".total"),
  };

  // action methods
  validatePricePerProduct(expectedProductsData) {
    // validate the number of products in the cart
    cy.get("tr.cart-item").should("have.length", expectedProductsData.size);

    for (let item = 1; item <= expectedProductsData.size; item++) {
      cy.get(`tr.cart-item:nth-child(${item})`)
        .find("td:first()")
        .then(($prod) => {
          const prodData = expectedProductsData.get($prod.text().trim());

          // validate the price per product
          cy.get(`tr.cart-item:nth-child(${item}) td:nth-child(2)`).should(
            "have.text",
            prodData[1]
          );

          // validate the quantity per product
          cy.get(`tr.cart-item:nth-child(${item}) td:nth-child(3) input`)
            .invoke("val")
            .then((quantity) => {
              expect(quantity).to.eq(prodData[0]);
            });
        });
    }
  }

  validateSubtotalPerProduct(expectedProductsData) {
    // validate the number of products in the cart
    cy.get("tr.cart-item").should("have.length", expectedProductsData.size);

    for (let item = 1; item <= expectedProductsData.size; item++) {
      cy.get(`tr.cart-item:nth-child(${item})`)
        .find("td:first()")
        .then(($prod) => {
          const prodData = expectedProductsData.get($prod.text().trim());

          // validate subtotal amount per product
          cy.get(`tr.cart-item:nth-child(${item}) td:nth-child(4)`).should(
            "have.text",
            `$${Number(prodData[0]) * Number(prodData[1].slice(1))}`
          );
        });
    }
  }

  validateTotal(expectedProductsData) {
    let expectedTotal = 0;

    // calculate the expected total amount
    expectedProductsData.forEach((value, product) => {
      expectedTotal += Number(value[0]) * Number(value[1].slice(1));
    });

    // validate the Total amount againdt expected value
    this.elements.lblTotal().should("have.text", `Total: ${expectedTotal}`);
  }
}
export default CartPage;
