const classA = [
    {
        name: "Marco",
        result: 9.8
    },
    {
        name: "Mayk",
        result: 10
    },
    {
        name: "Fulano",
        result: 4
    }
]

const classB = [
    {
        name: "Cleiton",
        result: 4
    },
    {
        name: "Robson",
        result: 7.5
    },
    {
        name: "Ciclano",
        result: 5
    },
    {
        name: 'New student',
        result: 6.5
    }
]

function calculateAverage(students) {
    let sum = 0;

    for (let i = 0; i < students.length; i++) {
        sum += students[i].result
    }

    return (sum / students.length)
}

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`The average of ${turma} is ${average}, Congrats!`)
    } else {
        console.log(`The average of ${turma} is less than 5, study more!`)
    }
}

function markAsFlunked(student) {
    student.Flunked = false

    if (student.result < 5)
        student.Flunked = true
}

function sendMessageFlunked(student) {
    if (student.Flunked) {
        console.log(`The student ${student.name} is Flunked.`)
    } else {
        console.log(`The student ${student.name} is approved.`)
    }
}

function studentsFlunkeds(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendMessageFlunked(student)
    }
}

const averageA = calculateAverage(classA)
const averageB = calculateAverage(classB)

sendMessage(averageA, 'turmaA')
sendMessage(averageB, 'turmaB')

studentsFlunkeds(classA)
studentsFlunkeds(classB)