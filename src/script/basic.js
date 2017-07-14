$('.datetime').flatpickr({
  enableTime: true,
  locale: 'zh',
  time_24hr: true,
  allowInput:true,
  plugins: [new confirmDatePlugin({})]
})

$('.selallcb').on('change', e => {
  $('.listitemcb').prop('checked', e.currentTarget.checked)
})

$('.selallbtn').on('click', function(){
  $('.listitemcb, .selallcb').prop('checked', true)
})

$('.m-topic-module').each((i, el) => {
  let $color = $(el).find('>.title,>.num')
  let hue = Math.floor(Math.random() * 360)
  $color.css('background', 'hsl(' + hue + ', 40%, 60%)')
})

$('.m-dropdown.select').on('mousedown', '.list>.item', e => {
  let t = e.currentTarget.innerText
  let p = $(e.delegateTarget)
  p.find('button>.text').text(t)
})
$('.bomb,.bomp-password').on('click',function(e){
  e.stopPropagation()
  $(this).hide()
})
$('.bomb>div,.bomp-password>div.info').on('click',function(e){
  e.stopPropagation()
})
$('.close,.cancel').on('click',function(){
  $('.bomb').hide()
  $('.bomp-password').hide()
})
$('a.delete').on('click', function(){
  $('.bomb').show()
})
$('.admin-info .btn').on('click',function(){
  $('.bomp-password').show()
})

