'use strict'

function 找出最长公子串 (...arrayOfStrings) {
    let arraiesOfSubStrings = []
    arrayOfStrings.reduce((accumulator, currentValue) => {
        arraiesOfSubStrings.push(findAllSubStringsFromTwoString(accumulator, currentValue))
        return accumulator
    })
    return findTheLongest(findIntersection(...arraiesOfSubStrings))
}

function findIntersection (...sets) {
    /**
     *
     *
     * @param {sets} a list of sets
     * @returns {array} the elements of the intersection of given sets.
     */
    return sets.reduce((accumulator, currentValue) => [...accumulator].filter(value => currentValue.has(value)))
}

function findAllSubStringsFromTwoString (string1, string2) {
    let string = string1.split(''),
        nextString = string2.split(''),
        currentSubString,
        subStrings = new Set(),
        nextFindStartPoint
    for (let i_string = 0; i_string < string.length; i_string++) {
        let character = string[i_string]
        if (nextFindStartPoint === undefined) {
            nextFindStartPoint = nextString.findIndex(function getIndexOfFirstFindedElement (element, index, array) {
                return element === character
            })
            if (nextString[nextFindStartPoint] === character) {
                currentSubString = currentSubString ? currentSubString + character : character
                subStrings.add(currentSubString)
            }
            nextFindStartPoint = nextFindStartPoint === -1 ? undefined : nextFindStartPoint
        } else {
            if (nextString[nextFindStartPoint + 1] === character) {
                nextFindStartPoint = nextFindStartPoint + 1
                currentSubString = currentSubString ? currentSubString + character : character
            } else {
                nextFindStartPoint = undefined
                subStrings.add(currentSubString)
                currentSubString = character
            }
        }
    }
    return subStrings
}

function findTheLongest (arrayOfStrings) {
    return arrayOfStrings.reduce((accumulator, currentValue) => findTheLonger(accumulator, currentValue), '')

    function findTheLonger (string1, string2) {
        return (string1.length > string2.length) ? (string1) : (string2)
    }
}
