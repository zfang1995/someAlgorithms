'use strict'

export default function 广度优先遍历(tree, callback) {
  let travelQueue = buildTravelQueue(tree);
  for (const e of travelQueue) {
    callback(tree)
  }
  return travelQueue
}

let buildTravelQueue = function (tree) {

  let makeChildrenQueue = function (...nodes) {
    return nodes.flatMap(e => Object.values(e))
  }

  let makeDescendantsQueue = function (...nodes) {
    let result = [];
    let childrenQueue = [];
    do {
      childrenQueue = makeChildrenQueue(...nodes);
      nodes = childrenQueue.filter(e => typeof e === 'object');
      result.push(...childrenQueue)
    } while (childrenQueue.length > 0);
    return result
  }
  
  let children = makeChildrenQueue(tree);
  let descendants = makeDescendantsQueue(...children)
  return [tree].concat(children, descendants)
}