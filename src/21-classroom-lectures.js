// This problem was asked by Snapchat.

// Given an array of time intervals(start, end) for classroom lectures(possibly overlapping),
// find the minimum number of rooms required.
// For example, given[(30, 75), (0, 50), (60, 150)], you should return 2.

function classroomLectures (lectures) {
  let rooms = []
  lectures.sort((a, b) => a[1] - b[1])// order by end time asc.

  for (let i = 0; i < lectures.length; i++) {
    let availableIx = -1
    let lecture = lectures[i]
    for (let j = 0; j < rooms.length; j++) {
      let roomLectures = rooms[j]
      let possible = roomLectures <= lecture[0]

      if (possible) availableIx = j
    }

    let endTime = lecture[1]
    if (availableIx === -1) rooms.push(endTime)
    else rooms[availableIx] = endTime
  }

  return rooms.length
}

module.exports = classroomLectures
classroomLectures([[0, 15], [10, 30], [15, 45], [30, 40], [40, 45]])
