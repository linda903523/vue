import $ from 'jquery'
$(document).on('click',function(e){
    if(e.target.className.toLowerCase()=='bill_h3'){
        $(e.target).next('ul').css({display:'block'})
        $(e.target).find('span').css({display:'block'})
        
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
