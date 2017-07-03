$('.datetime').flatpickr({
  enableTime: true,
  locale: 'zh',
  time_24hr: true,
  plugins: [new confirmDatePlugin({})]
})

$('.selallcb').on('change', e => {
  $('.listitemcb').prop('checked', e.currentTarget.checked)
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