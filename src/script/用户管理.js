$('.base tr td a.user').on('click',function(){
    var oCout=$(this).parent().parent().find('td:eq(0)').text()
    var oName=$(this).parent().parent().find('td:eq(1)').text()
    var oTel=$(this).parent().parent().find('td:eq(2)').text()
    $('.userInfo input[name="uname"]').val(oName)
    $('.userInfo input[name="uaccout"]').val(oCout)
    $('.userInfo input[name="utel"]').val(oTel)
    $('.m-subcont.list').css('display','none')
    $('.distrib').css('display','block')
})
$('.saveBtn .ret').on('click',function(){
    $('.m-subcont.list').css('display','block')
    $('.distrib').css('display','none')  
})
$('.m-subcont .modify').on('click',function(){
    var useraccout=$(this).parent().parent().find('td:eq(0)').text();
    var username=$(this).parent().parent().find('td:eq(1)').text();
    var usertel=$(this).parent().parent().find('td:eq(2)').text();
    $('.userInfo input[name="useraccount"]').val(useraccout)
    $('.userInfo input[name="username"]').val(username)
    $('.userInfo input[name="usertel"]').val(usertel)
    $('.m-subcont.mlist').hide()
    $('.m-subcont.change').show()
})

function DelChild(type){
    $('.bomb').css('display','block');
}
$('.chan .ret').on('click',function(){
    $('.m-subcont.mlist').show()
    $('.m-subcont.change').hide()
})
function check(){
    var oUsername=$('.userInfo input[name="uname"]')
    var oUseraccout=$('.userInfo input[name="uaccout"]')
    var oUsermail=$('.userInfo input[name="umail"]')
    var oUsertel=$('.userInfo input[name="utel"]')
    var phoneReg=/^0?1[3584][0-9][0-9]{8}$/;
    var emailReg=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    var isSuccess =0
    if(oUsername.val()==""){
        oUsername.addClass('nu')
        oUsername.next().addClass('nu')
        isSuccess=0

    }else{
        oUsername.removeClass('nu')
        oUsername.next().removeClass('nu')
        isSuccess=1 
    }
    if(oUseraccout.val()==""){
        oUseraccout.addClass('nu')
        oUseraccout.next().addClass('nu')
        isSuccess=0
    }else{
        oUseraccout.removeClass('nu')
        oUseraccout.next().removeClass('nu')
        isSuccess=1 
    }
    if(!emailReg.test(oUsermail.val())){
        oUsermail.addClass('nu')
        oUsermail.next().addClass('nu')
        isSuccess=0
    }else{
        oUsermail.removeClass('nu')
        oUsermail.next().removeClass('nu') 
        isSuccess=1
    }
    if(!phoneReg.test(oUsertel.val())){
        oUsertel.addClass('nu')
        oUsertel.next().addClass('nu')
        isSuccess=0
    }else{
        oUsertel.removeClass('nu')
        oUsertel.next().removeClass('nu') 
        isSuccess=1
    }
    if(isSuccess==1){
        $('.m-subcont.list').css('display','block')
        $('.distrib').css('display','none') 
    }

}

function check2(){
    var oUsername=$('.userInfo input[name="username"]')
    var oUseraccout=$('.userInfo input[name="useraccount"]')
    var ouserpsword=$('.userInfo input[name="userpassword1"]')
    var ouserpsword1=$('.userInfo input[name="userpassword2"]')
    var oUsermail=$('.userInfo input[name="usermail"]')
    var oUsertel=$('.userInfo input[name="usertel"]')
    var phoneReg=/^0?1[3584][0-9][0-9]{8}$/;
    var emailReg=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    var isSuccess =0
    if(oUsername.val()==""){
        oUsername.addClass('nu')
        oUsername.next().addClass('nu')
        isSuccess=0
    }else{
        oUsername.removeClass('nu')
        oUsername.next().removeClass('nu')
        isSuccess=1
    }
    if(oUseraccout.val()==""){
        oUseraccout.addClass('nu')
        oUseraccout.next().addClass('nu')
        isSuccess=0
    }else{
        oUseraccout.removeClass('nu')
        oUseraccout.next().removeClass('nu')
        isSuccess=1 
    }
    if(ouserpsword.val()==""){
        ouserpsword.addClass('nu')
        ouserpsword.next().addClass('nu')
        isSuccess=0
    }else{
        ouserpsword.removeClass('nu')
        ouserpsword.next().removeClass('nu')
        isSuccess=1   
    }
    if(ouserpsword1.val()==""){
        ouserpsword1.addClass('nu')
        ouserpsword1.next().addClass('nu')
        isSuccess=0
    }else{
        ouserpsword1.removeClass('nu')
        ouserpsword1.next().removeClass('nu')
        isSuccess=1   
    }
    if(!emailReg.test(oUsermail.val())){
        oUsermail.addClass('nu')
        oUsermail.next().addClass('nu')
        isSuccess=0
    }else{
        oUsermail.removeClass('nu')
        oUsermail.next().removeClass('nu') 
        isSuccess=1
    }
    if(!phoneReg.test(oUsertel.val())){
        oUsertel.addClass('nu')
        oUsertel.next().addClass('nu')
        isSuccess=0
    }else{
        oUsertel.removeClass('nu')
        oUsertel.next().removeClass('nu') 
        isSuccess=1
    }
    if(isSuccess==1){
        $('.m-subcont.list').css('display','block')
        $('.distrib').css('display','none')  
    }
}
