/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function(){
    $(".practice").css("background-color", "purple");
    $('p:last').css({"background-color":"red", "color": "white"});  
   
   
   // $('oneButton').bind('click', alertButtonClick);
    
   // $('logo').bind('mouseover', mouseOverme).bind('mouseout', mouseOutMe);
    
   // $('#repLaceWTetxt').bind('click', repLaceWText);
    
    $('#addAPara').bind('click', addAPara);
    
    $('#removeAPara').bind('click', removeAPara);
    
    $('#replaceWHtml').bind('click', replaceWHtml);
$('#replaceWText').bind('click', replaceWText);

$('#superHumane').accordion({header: "h3"});
});

function removeAPara(){
    $('#randPara p1Last').remove();
}

function addAPara(){
    $('randPara').append('p2ADDED/p2');
}

function replaceWHtml(){
    $('#h3Tag').html('<h6>I\'m an h6</h6>');
}


function replaceWText(){
    $('#replaceWText').text('Replace');
    $('#h3Tag').text('<h6>I\'m an h6</h6>');
}
