import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ShopPage from "../pages/ShopPage";
import CartPage from "../pages/CartPage";

const shopPage = new ShopPage();
const cartPage = new CartPage();

let productQuantityPrice = new Map();

When("I choose to buy the following products", (datatable) => {
  productQuantityPrice = shopPage.addProductsToCart(datatable);
});

Then("I validate the price displayed per product", () => {
  cartPage.validatePricePerProduct(productQuantityPrice);
});

And("I validate the subtotal per product", () => {
  cartPage.validateSubtotalPerProduct(productQuantityPrice);
});

And("I validate the total amount to be paid", () => {
  cartPage.validateTotal(productQuantityPrice);
});
