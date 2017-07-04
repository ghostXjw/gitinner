$('.m-report-list>.listItem').on('click', function(){
  $(this).toggleClass('active')
})

$('.m-report-list>.listItem').on('mouseenter', function(){
  if($(this).hasClass('active')){
    $(this).addClass('hover')
  }
})

$('.m-report-list>.listItem').on('mouseleave', function(){
  $(this).removeClass('hover')
})

$('.m-report-list>.listItem>.mask').on('click', e => {
  e.stopPropagation()
})

$('.m-report-list>.listItem>.mask>.cancel').on('click', function(){
  let $el = $(this).parents('.listItem')
  $el.removeClass('active hover')
})