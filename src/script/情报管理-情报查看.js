let $btns = $('.m-filter>.body>.btns>.btn')
let $page = $('.m-contlist')

$btns.click(function(){
  let $el = $(this)
  if(!$el.hasClass('active')){
    $btns.removeClass('active')
    $el.addClass('active')
    if($el.hasClass('list')){
      $page.addClass('list')
    }else{
      $page.removeClass('list')      
    }
  }

})