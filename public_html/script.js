/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//this is bascially adding text when you click a certian word 

$("document").ready(function(){
    $(".you").css("background-color", "pink");
    
    $('#superHumans').accordion({ header:"h3"});
    $('#superHumans').css('width','400px');
    
    $('p:nth-child(3)').css('color','white');
    
    $('p:nth-child(2)').css('color','yellow');
    
     $("h1").bind('mouseover',mouseOverMe).bind('mouseout',mouseOutMe);
     
     $('#replceWText').bind('click',replaceWText);
     
     $('#randPara').bind('click',addAPara);
     
     $('#removePara').bind('click',removeApara);
     
     $('#hide').bind('click',hideThepage);
     
     $('#show').bind('click',showThepage);
     
     $('div').css("background","url(captin2.png)");
     
     });
     //this is to click siblings and it will dissapear 
     function hideThepage(){
         $('#show').css('visibility','visible');
         $('div').hide('slide',{},1500);
         $('#show').show('fold',{},1500);
         
         
          }
       //this is to bring back the page when you click the button show the page 
     function showThepage() {
         $('div').show('fold',{},1500);
         $('#show').hide('puff',{},1500);
         
     }
    


     function removeApara(){
         $('#randPara p:last').remove();
     }
     //this is the text that shows when you click a certin word 
     function addAPara () {
         $('#randPara').append('<p>JAZMINE O</p>');
     }
     //this is to get rid of the text when you click a certain word 
     function replaceWText(){
         $('replaceWText'),text('replaced!');
     }
// this is saying when yiu hover over the hi it changes to hello 
function mouseOverMe() {
    $("h1").html("hi");
}

function mouseOutMe () {
    $('h1').html("hello");
}