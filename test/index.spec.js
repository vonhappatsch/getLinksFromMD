/* eslint-disable no-undef */
const getLinksFromMD = require('../index');
const chai = require('chai');
const expect = chai.expect;
describe('index test', () => {
  describe('valid link from string - only link', () => {
    it('should return true', () => {
      expect(getLinksFromMD.getLinksFromMD(`[example](www.example.com)`)).to.equal(true);
    });
  });
  describe('valid link from string - with another content', () => {
      it('it should return true', () => {
          expect(getLinksFromMD.getLinksFromMD(`[example](www.example.com) oieeee turu pom? [text](www.link.com)`)).to.equal(true);
      });
  });
  describe('invalid link from string', () => {
      it('it should return false', () => {
          expect(getLinksFromMD.getLinksFromMD(`(example)[www.example.com]`)).to.equal(false);
      });
  });
});