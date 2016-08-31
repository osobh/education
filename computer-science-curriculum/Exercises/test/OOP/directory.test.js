const expect = require('chai').expect
var Directory = require('../../src/OOP/directory');

describe('Directory', ()=> {

  it("has a name", ()=> {
    var directory = new Directory('workspace');
    expect(directory.name).to.deep.equal('workspace');

    directory = new Directory('filestuff');
    expect(directory.name).to.deep.equal('filestuff');
  });

  it("returns filenames in order with ls", ()=> {
    var directory = new Directory('workspace');
    expect(directory.ls()).to.deep.equal([]);

    directory.write("foo.txt", "w00t!");
    expect(directory.ls()).to.deep.equal(["foo.txt"]);

    directory.write("bar.txt", "Hello world");
    expect(directory.ls()).to.deep.equal(["bar.txt", "foo.txt"]);
  });

  it("returns filenames with size with ls_la", ()=> {
    var directory = new Directory('workspace');
    expect(directory.ls_la()).to.deep.equal([]);

    directory.write("foo.txt", "w00t!");
    expect(directory.ls_la()).to.deep.equal(["foo.txt - 5"]);

    directory.write("bar.txt", "Hello world");
    expect(directory.ls_la()).to.deep.equal(["bar.txt - 11", "foo.txt - 5"]);
  });

  it("returns the content of the given file with cat", ()=> {
    var directory = new Directory('workspace');

    directory.write("foo.txt", "w00t!");
    expect(directory.cat('foo.txt')).to.deep.equal("w00t!");

    directory.write("bar.txt", "Hello world");
    directory.ls();
    expect(directory.cat('bar.txt')).to.deep.equal("Hello world");
  });

  it("changes the name of a given file to another name with mv", ()=> {
    var directory = new Directory('workspace');

    directory.write("bar.txt", "Hello world");
    directory.mv("bar.txt", "foo.txt");

    expect(directory.cat('foo.txt')).to.deep.equal('Hello world');
    expect(directory.ls()).to.deep.equal(['foo.txt']);
  });

  it("copies one object to another with cp", ()=> {
    var directory = new Directory('workspace');

    directory.write("bar.txt", "Hello world");
    directory.cp("bar.txt", "foo.txt");
    directory.write("bar.txt", "I've changed");

    expect(directory.cat('foo.txt')).to.deep.equal('Hello world');
    expect(directory.cat('bar.txt')).to.deep.equal("I've changed");
    expect(directory.ls()).to.deep.equal(['bar.txt', 'foo.txt']);
  });

  it("symlinks one object to another with ln_s", ()=> {
    var directory = new Directory('workspace');

    directory.write("bar.txt", "Hello world");
    directory.ln_s("bar.txt", "foo.txt");
    directory.write("bar.txt", "I've changed");

    expect(directory.cat('foo.txt')).to.deep.equal("I've changed");
    expect(directory.cat('bar.txt')).to.deep.equal("I've changed");
    expect(directory.ls()).to.deep.equal(['bar.txt', 'foo.txt']);
  });

});
