/**
 * 
 */
import $ from 'jquery'
import './css/index.css'

$(function(){
    $('li:odd').css("backgroundColor","lightblue")
    $('li:even').css("backgroundColor",function(){
        return '#' + 'abcdef'
    })
})