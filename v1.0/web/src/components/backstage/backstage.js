import $ from 'jquery'
$(document).on('click',function(e){
    if(e.target.className.toLowerCase()=='bill_h3'){
        $(e.target).next('ul').css({display:'block'})
        $(e.target).find('span').css({display:'block'})
        for(var i=0;i<$(e.target).next('ul').find('li').length;i++){
            $(e.target).next('ul').find('li').eq(i).find('input').eq(0).css({background:'#fc5000'})
        }
    }
    if(e.target.className.toLowerCase()=='bill_h2'){
        $(e.target).parent('ul').css({display:'none'})
        $(e.target).parent('ul').prev('h3').find('span').css({display:'none'})
        
    }
    if(e.target.className.toLowerCase()=='bill_span'){
        $(e.target).parent('h3').next('ul').css({display:'none'})
        $(e.target).css({display:'none'})
        
    }
    if($(e.target).val() == '准备'){
        $(e.target).css({backgroundColor:'#fc5000'})
        $(e.target).prev('input').css({display:'none'})
    }else if($(e.target).val() == '完成'){
        $(e.target).css({backgroundColor:'#fc5000'})
        $(e.target).prevAll('input').css({display:'none'})
    }
})


// var ws;
// ws = new WebSocket("ws://10.3.131.14:888");
// ws.onmessage = function(_msg){
//     console.log(_msg.data);
// }  

// $(":button").click(function(_me){
//     ws.send($(this).val());
// })