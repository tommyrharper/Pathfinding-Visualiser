function dijkstra(
  nodes,
  start,
  target,
  nodesToAnimate,
  boardArray,
  name,
  heuristsic
) {
  if (name === "astar")
    return astar(nodes, start, target, nodesToAnimate, boardArray, name);
  if (!start || !target || start === target) {
    return false;
  }

  nodes[start].distance = 0;
  nodes[start].direction = "right";
  let unvisitedNodes = Object.keys(nodes);
  while (unvisitedNodes.length) {
    let currentNode = closestNode(nodes, unvisitedNodes);
    while (currentNode.status === "walll" && unvisitedNodes.length) {
      currentNode = closestNode(nodes, unvisitedNodes);
    }
    if (currentNode.distance === Infinity) {
      return false;
    }
    nodesToAnimate.push(currentNode);
    currentNode.status = "visited";
    if (currentNode.id === target) return "success!";
    if (name === "CLA" || name === "greedy") {
      updateNeighbours(
        nodes,
        currentNode,
        boardArray,
        target,
        name,
        start,
        heuristic
      );
    } else if (name === "dijkstra") {
      updateNeighbours(nodes, currentNode, boardArray);
    }
  }
}
