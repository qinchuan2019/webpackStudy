/**
 * 
 */
import $ from 'jquery'
import './css/index.css'
import './css/index.scss'
import 'bootstrap/dist/css/bootstrap.css'

$(function(){
    $('li:odd').css("backgroundColor","pink")
    $('li:even').css("backgroundColor",function(){
        return '#' + 'abcdef'
    })
})