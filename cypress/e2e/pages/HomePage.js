class HomePage {
  elements = {
    menuItem: (item) => cy.get(`li#nav-${item} a`),
  };

  selectMenuItem(item) {
    this.elements.menuItem(item).click();
  }
}
export default HomePage;
