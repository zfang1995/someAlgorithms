import app from "../algorithms/树的广度优先遍历";
let assert = require("chai").assert;

describe("app", function() {
  // it("test-1", function() {
  //   let xOBJ = {
  //     x: "x",
  //     y: "y",
  //     z: "z"
  //   };
  //   let luliOBJ = {
  //     luli: "luli",
  //     pp: "pp"
  //   }
  //   let c = [
  //     1,
  //     2,
  //     xOBJ,
  //     luliOBJ,
  //     "xx"
  //   ];
  //   let tree = {
  //     a: "hello",
  //     b: "oho",
  //     c,
  //     d: "d"
  //   };
  //   assert.equal(app(tree, _ => {}), [
  //     tree,
  //     "hello",
  //     "oho",
  //     c,
  //     "d",
  //     1,
  //     2,
  //     xOBJ,
  //     luliOBJ,
  //     'xx',
  //     'x',
  //     'y',
  //     'z',
  //     'luli',
  //     "pp"
  //   ]);
  // });
  it('test-2', function () {
    app({a:'a', b: 'b'})
    // assert.equal(app([1,2,3,4], _ => {}), [1,2,3,4])
  })
});
