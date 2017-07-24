$('.datetime').flatpickr({
  enableTime: true,
  locale: 'zh',
  time_24hr: true,
  allowInput:true,
  plugins: [new confirmDatePlugin({})]
})
var um = UM.getEditor('myEditor');
um.addListener('blur',function(){
    $('#focush2').html('编辑器失去焦点了')
});
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
  var  t = e.currentTarget.innerText
  var  p = $(e.delegateTarget)
  p.find('button>.text').text(t)
})
$('.bomb,.bomp-password,.dh-panel').on('click',function(e){
  e.stopPropagation()
  $(this).hide()
})
$('.bomb>div,.bomp-password>div.info,.dh-panel>.contain').on('click',function(e){
  e.stopPropagation()
})

$('.close,.cancel').on('click',function(){
  $('.bomb').hide()
  $('.bomp-password').hide()
  $('.dh-panel').hide()
})
$('.success').on('click',function(){
  $('.bomb').hide()
})
$('a.delete').on('click', function(){
  $('.bomb').show()
})
$('.admin-info .btn').on('click',function(){
  $('.bomp-password').show()
})
$('.right .btn').on('click',function(){
  $('.dh-panel').show()
})
$('.zt-info a').on('click',function(){
  $('.zt-info p').toggleClass('active')
  $('.zt-info').toggleClass('active')
  if($('.zt-info').hasClass('active')){
    $('.zt-info a').text('点击收缩')
  }
  else  {
    $('.zt-info a').text('点击查看更多')
  }
})
function getByteLen(val) {
  var len = 0;
  for (var i = 0; i < val.length; i++) {
    var a = val.charAt(i);
    if (a.match(/[^\x00-\xff]/ig) != null) {
      len += 2;
    }
    else {
      len += 1;
    }
  }
  return len;
}
function fn(){
  var oLen=getByteLen($('.zt').html())
  if(oLen>110){
    $('.zt-info a').show()
  }else{
    $('.zt-info a').hide()
  }
}
//fn()
function getNowFormatDate(off) {
    var currentdate;
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var hour=date.getHours();
    var minutes=date.getMinutes();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if(minutes<10){
        minutes = "0" + minutes
    }
    if(hour<10){
      hour = "0" + hour
    }
    if(off){
      currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + hour + seperator2 + minutes;
    }else{
      currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + '00' +seperator2+ '00';    
    }

    return currentdate;
}

function dateSet(){
  var oDate=getNowFormatDate(true)
  var oDate1=getNowFormatDate(false)
  $('.datetime[name="stime"]').attr('value',oDate1)
  $('.datetime[name="etime"]').attr('value',oDate)
}
dateSet()
$('.select.cout').on('click',function(e){
  e.stopPropagation();
  $('.select.cout').find('.list').css('display','block');
})
$('.select.cout').on('mousedown','.list>.con>.item',function(e){
  e.stopPropagation()
  var t=$(e.delegateTarget);
  var p = e.currentTarget.innerText
  $('.select.cout').find('.list').css('display','none')
  t.find('.cout-sel>.text').text(p)
})
var oHtml=$('.con').html()
$('.coutype').on('input',function(){
  var flag;
  clearTimeout(flag);
  var arr=['美国','中国']
  flag=setTimeout(function(){
    var oVal=$('.coutype').val();
    var oIndex=arr.indexOf(oVal);
    if(oIndex!=-1){
        $('.con').html('<div class="item">'+oVal+'</div>')
    }else{
      $('.con').html(oHtml)
    }
  },1000)

})

$(document).on('click',function(){
  $('.select.cout .list').hide()
})
$(document).ready(function() {
  $(".js-example-basic-single").select2();
});

