# 1. Mark your selected initial node with a current distance of 0 and the rest with infinity.
# 2. Set the non-visited node with the smallest current distance as the current node C.
# 3. For each neighbour N of your current node C: add the current distance of C with the weight of the edge connecting C-N. If it's smaller than the current distance of N, set it as the new current distance of N.
# 4. Mark the current node C as visited.
# 5. If there are non-visited nodes, go to step 2.


visited = {"A", "C"}
currentDistances = {"A":0, "B":5, "C":99999, "D":99999, "E":4, "F":3, "G":5 }


# Step 2 in dijkstra's algortihm
def set_current_node(visited, currentDistances):
  # visited is a set that contains the names of the nodes marked as visited. E.g. {'A', 'C'}.
  # currentDistances is a dictionary that contains the current minimum distance of each node. E.g. {'A': 0, 'B': 3, 'C': 5}
  x = 99999
  # 99999 is being used instead of inifinity
  for i in list(currentDistances):
    for a in visited:
      if a == i:
        del currentDistances[a]

  for i in currentDistances:
    if currentDistances[i] < x:
      x = currentDistances[i]
      node = i

  return node

set_current_node(visited, currentDistances)