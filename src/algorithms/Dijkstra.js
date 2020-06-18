const node = {
  row,
  col,
  isVisited,
  distance,
};

function dijkstra(grid, startnode, finishNode) {
  if (!startNode || !finishNode || startNode === finishNode) {
    return false;
  }
  nodes[startNode].distance = 0;
  const unvisitedNodes = nodes.slice();
  while (!!unvisitedNodes.length) {
    sortNodesByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.unshift();
    // // HANDLE WALLS LATER
    // while (currentNode.status === "wall" && unvisitedNodes.length) {
    //   currentNode = getClosestNode(nodes, unvisitedNodes)
    // }
    // // HANDLE IMPOSSIBLE LATER
    // if (closestNode.distance === Infinity) return false;
    // // ANIMATE LATER
    // nodesToAnimate.push(closestNode)
    closestNode.isVisited = true;
    if (closestNode === finishNode) return "success!";
    updateNeighbors(closestNode, grid);
  }
}

function sortNodesByDistance(unvisitedNodes) {
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateNeighbors(node, grid) {
  const neighbors = getNeighbors(node, grid);
  for (const neighbor of neighbors) {
    neighbor.distance = node.distance + 1;
  }
}

function getNeighbors(node, grid) {
  const neighbors = [];
  const { col, row } = node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
}
