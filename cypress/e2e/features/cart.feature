Feature: Cart
  This feature file covers scenarios related to cart functionality
  of Jupiter Toys application

  ########################################################################
  #   Test case 3:
  #      1. Buy 2 Stuffed Frog, 5 Fluffy Bunny, 3 Valentine Bear.
  #      2. Go to the cart page.
  #      3. Verify the subtotal for each product is correct.
  #      4. Verify the price for each product.
  #      5. Verify that total = sum(sub totals).
  ########################################################################

  Scenario: [Testcase_3]: Verify subtotal, price and total value of products added to cart
    Given I am on the Jupiter Toys home page
    And I navigate to "Shop" page
    When I choose to buy the following products
      | product        | quantity |
      | Stuffed Frog   | 2        |
      | Fluffy Bunny   | 5        |
      | Valentine Bear | 3        |
    And I navigate to "Cart" page
    Then I validate the price displayed per product
    And I validate the subtotal per product
    And I validate the total amount to be paid