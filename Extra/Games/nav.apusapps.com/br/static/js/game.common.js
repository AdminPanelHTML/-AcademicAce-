window.gameAs={
	show:function(){
		$('#botBox').show();
	}
}
$(function(){
	$('#botBoxClose').on('tap',function(){
	    $('#botBox').hide();
	})
	var button = document.createElement('a');
	button.setAttribute('href','../../gamebox/index.html?f=button');
	button.setAttribute('id','game-home-button');
	button.setAttribute('onclick','javascript:location.href=../../gamebox/index.html?f=button');
	$('body').get(0).appendChild(button);
})
