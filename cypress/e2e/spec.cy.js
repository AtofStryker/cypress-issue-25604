describe("template spec", () => {
  it("passes", () => {
    cy.task('readXlsxFile').then((fileContents) => {
      expect(fileContents).to.deep.equal([{1: 'a', 2: 'b', 3: 'c'}])
    });
  });
});