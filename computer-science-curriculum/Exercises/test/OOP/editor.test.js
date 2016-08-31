const expect = require('chai').expect
var Editor = require('../../src/OOP/editor')

describe('Editor', function () {

  it("allows users to write text", function () {
    var editor = new Editor()
    editor.write("Hello - codez")
    expect(editor.toString()).to.deep.equal("Hello - codez")

    editor.write(" moar")
    expect(editor.toString()).to.deep.equal("Hello - codez moar")
  })

  it("allows users to undo writes", function () {
    var editor = new Editor()
    editor.write("Hello - codez")
    expect(editor.toString()).to.deep.equal("Hello - codez")
    editor.write("Moar stuff")
    expect(editor.toString()).to.deep.equal("Hello - codezMoar stuff")
    editor.write("Even more")
    expect(editor.toString()).to.deep.equal("Hello - codezMoar stuffEven more")

    editor.undo()
    expect(editor.toString()).to.deep.equal("Hello - codezMoar stuff")

    editor.undo()
    expect(editor.toString()).to.deep.equal("Hello - codez")

    editor.undo()
    expect(editor.toString()).to.deep.equal("")
  })

  it("allows users to find and replace", function () {
    var editor = new Editor()
    editor.write("foo stuff")
    editor.write(" other foo")

    editor.replace("foo", "bar")
    expect(editor.toString()).to.deep.equal("bar stuff other bar")
  })

  it("allows undo replaces", function () {
    var editor = new Editor()
    editor.write("foo stuff")
    editor.write(" other foo")

    editor.replace("foo", "bar")
    expect(editor.toString()).to.deep.equal("bar stuff other bar")

    editor.undo()
    expect(editor.toString()).to.deep.equal("foo stuff other foo")

    editor.undo()
    expect(editor.toString()).to.deep.equal("foo stuff")
  })

  it("allows users to redo", function () {
    var editor = new Editor()
    editor.write("foo stuff")
    editor.write(" other foo")
    editor.replace("foo", "bar")
    expect(editor.toString()).to.deep.equal("bar stuff other bar")

    editor.undo()
    expect(editor.toString()).to.deep.equal("foo stuff other foo")

    editor.undo()
    expect(editor.toString()).to.deep.equal("foo stuff")

    editor.redo()
    expect(editor.toString()).to.deep.equal("foo stuff other foo")

    editor.redo()
    expect(editor.toString()).to.deep.equal("bar stuff other bar")
  })

})
