'use strict'

module.exports = function 找出最长公子串 (...strings) {
    let setsOfSubstrings = []
    strings.reduce((accumulator, currentValue) => {
        setsOfSubstrings.push( findAllSubStringsFromTwoString( accumulator, currentValue))
        return accumulator
    })
    return getTheLongestString( getIntersection( ...setsOfSubstrings))
}

function getIntersection (...sets) {
    /**
     *
     *
     * @param {array} sets :a list of sets
     * @returns {array} the elements of the intersection of given sets.
     */
    return sets.reduce((accumulator, currentValue) => [...accumulator].filter(value => currentValue.has(value)))
}

function findAllSubStringsFromTwoString (string1, string2) {
    let allSubstrings = new Set()
    for (let index = 0; index < string1.length; index++) {
        let length = 1, substring = string1.substr(index, length)
        while (string2.indexOf(substring) !== -1 && length <= string1.length) { // 当string2内含有substring时
            allSubstrings.add(substring)
            substring = string1.substr(index, length++)
        }
    }
    return allSubstrings
}

function getTheLongestString (strings) {
    return strings.reduce((accumulator, currentValue) => findTheLonger(accumulator, currentValue), '')
}

function findTheLonger (string1, string2) {
    return (string1.length > string2.length) ? (string1) : (string2)
}