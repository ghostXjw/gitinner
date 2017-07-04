$('.m-topic-module').on('click', function(){
  $(this).toggleClass('active')
})

$('.m-topic-module').on('mouseenter', function(){
  if($(this).hasClass('active')){
    $(this).addClass('hover')
  }
})

$('.m-topic-module').on('mouseleave', function(){
  $(this).removeClass('hover')
})

$('.m-topic-module>.mask').on('click', e => {
  e.stopPropagation()
})

$('.m-topic-module>.mask>.cancel').on('click', function(){
  let $el = $(this).parents('.m-topic-module')
  $el.removeClass('active hover')
})

