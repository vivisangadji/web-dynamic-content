$(document).ready(function() {
	// body...
	$('#about').click(function(){
		$.get('about.html', function(data, status){
			$('.content').html(data)
		})
	})
	$('#contact').click(function(){
		$.get('contact.html', function(data, status){
			$('.content').html(data)
		})
	})
	$('#portfolio').click(function(){
		$.get('portfolio.html', function(data, status){
			$('.content').html(data)
		})
	})
}) 