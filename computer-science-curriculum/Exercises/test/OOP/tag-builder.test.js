const expect = require("chai").expect
const TagBuilder = require('../../src/OOP/tag-builder')

describe("TagBuilder", function () {

  it("can create html tags", function () {
    var builder = new TagBuilder("p")
    expect(builder.toString()).to.eq("<p></p>")

    expect(new TagBuilder("div").toString()).to.eq("<div></div>")
  })

  it("can create self-closing HTML tags", function () {
    var builder = new TagBuilder("p", true)
    expect(builder.toString()).to.eq("<p />")

    expect(new TagBuilder("div", true).toString()).to.eq("<div />")
  })

  it("can render innerHTML", function () {
    var builder = new TagBuilder("p")
    builder.setInnerHTML("foo")
    expect(builder.toString()).to.eq("<p>foo</p>")

    var builder = new TagBuilder("p", true)
    builder.setInnerHTML("foo")
    expect(builder.toString()).to.eq("<p />")
  })

  it("can add attributes", function () {
    var builder = new TagBuilder("p")
    builder.addAttribute("id", "foo")
    expect(builder.toString()).to.eq('<p id="foo"></p>')

    var builder = new TagBuilder("p", true)
    builder.addAttribute("id", "foo")
    expect(builder.toString()).to.eq('<p id="foo" />')
  })

  it("can add classes", function () {
    var builder = new TagBuilder("p")
    builder.addClass("selected")
    expect(builder.toString()).to.eq('<p class="selected"></p>')

    builder.addClass("active")
    expect(builder.toString()).to.eq('<p class="selected active"></p>')
  })

  it("can add classes even if the attribute was called first", function () {
    var builder = new TagBuilder("p")
    builder.addAttribute("class", "card")
    builder.addClass("selected")
    expect(builder.toString()).to.eq('<p class="card selected"></p>')
  })

})
