import app from '../algorithms/在N个字符串中找出最长的公子串'
let assert = require('chai').assert

describe('app', function () {
    it('the-longest-common-substring-from-["1234","2234","333234","233234"]-is-"234"', function () {
        assert.equal(app('1234','2234','333234', '233234'), '234')
    })
})