$('.datetime').flatpickr({
  enableTime: true,
  locale: 'zh',
  time_24hr: true,
  plugins: [new confirmDatePlugin({})]
})

$('.selallcb').on('change', e => {
  $('.listitemcb').prop('checked', e.currentTarget.checked)
})