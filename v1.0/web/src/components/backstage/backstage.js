import $ from 'jquery'
$(document).on('click',function(e){
    if(e.target.className.toLowerCase()=='bill_h3'){
        $(e.target).next('ul').css({display:'block'})
    }
    if(e.target.className.toLowerCase()=='bill_h2'){
        $(e.target).parent('ul').css({display:'none'})
        
    }
    if($(e.target).val() == '准备'){
        $(e.target).prev('input').css({display:'none'})
    }else if($(e.target).val() == '完成'){
        $(e.target).prevAll('input').css({display:'none'})
    }
})
