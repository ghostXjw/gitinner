$('.datetime').flatpickr({
  enableTime: true,
  locale: 'zh',
  time_24hr: true,
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
$('.bomb').on('click',function(e){
  e.stopPropagation()
  $(this).hide()
})
$('.bomb>div').on('click',function(e){
  e.stopPropagation()
})
$('.close,.cancel').on('click',function(){
  console.log("ss")
  $('.bomb').hide()
})
