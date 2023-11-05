const students = [
  { age: 18, name: 'Alex', group: 'A' },
  { age: 19, name: 'Tom', group: 'B' },
  { age: 19, name: 'Bob', group: 'A' },
  { age: 20, name: 'Pavel', group: 'C' },
  { age: 18, name: 'Sandy', group: 'A' }
];

function getOldestStudent(students) {
  if (students.length === 0) {
    return null;
  }

  let oldestStudent = students[0];
  for (const student of students) {
    if (student.age > oldestStudent.age) {
      oldestStudent = student;
    }
  }

  return oldestStudent;
}

function getOldestStudentFromGroup(students, group) {
  let oldestStudentInGroup = null;
  for (const student of students) {
    if (student.group === group && (!oldestStudentInGroup || student.age > oldestStudentInGroup.age)) {
      oldestStudentInGroup = student;
    }
  }
  return oldestStudentInGroup;
}

function sortStudentsByNames(students) {
  return students.slice().sort((a, b) => a.name.localeCompare(b.name));
}

function sortStudentsByAge(students) {
  return students.slice().sort((a, b) => a.age - b.age);
}

function countStudentsInGroup(students) {
  const groupCounts = {};
  for (const student of students) {
    const group = student.group;
    groupCounts[group] = (groupCounts[group] || 0) + 1;
  }
  return groupCounts;
}

function makeStudentsGroups(students) {
  const groupedStudents = {};
  for (const student of students) {
    const group = student.group;
    if (!groupedStudents[group]) {
      groupedStudents[group] = [];
    }
    groupedStudents[group].push(student);
  }
  return groupedStudents;
}

function doubleSort(students) {
  const groupedStudents = makeStudentsGroups(students);

  const sortedGroups = Object.keys(groupedStudents).sort();
  const result = [];

  for (const group of sortedGroups) {
    const sortedGroupStudents = sortStudentsByNames(groupedStudents[group]);
    result.push(...sortedGroupStudents);
  }

  return result;
}


console.log(getOldestStudent(students));
console.log(getOldestStudentFromGroup(students, 'C')); //группу указываю сам
console.log(sortStudentsByNames(students));
console.log(sortStudentsByAge(students));
console.log(countStudentsInGroup(students));
console.log(makeStudentsGroups(students));
console.log(doubleSort(students));