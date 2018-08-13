// This problem was asked by Snapchat.

// Given an array of time intervals(start, end) for classroom lectures(possibly overlapping),
// find the minimum number of rooms required.
// For example, given[(30, 75), (0, 50), (60, 150)], you should return 2.

function classroomLectures (lectures) {
  let rooms = []
  for (let i = 0; i < lectures.length; i++) {
    let availableIx = -1
    let lecture = lectures[i]
    for (let j = 0; j < rooms.length && availableIx === -1; j++) {
      let roomLectures = rooms[j]
      let possible = true
      for (let k = 0; k < roomLectures.length && possible; k++) {
        if (intersects(roomLectures[k], lecture)) possible = false
      }

      if (possible) availableIx = j
    }

    if (availableIx === -1) rooms.push([lecture])
    else rooms[availableIx].push(lecture)
  }

  return rooms.length

  function intersects (a, b) {
    return a[0] < b[1] && a[1] > b[0]
  }
}

module.exports = classroomLectures
