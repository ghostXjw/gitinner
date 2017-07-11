$btns = $('.m-filter>.body>.btns>.btn')
$page = $('.m-contlist')

$btns.click(function(){
  $el = $(this)
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