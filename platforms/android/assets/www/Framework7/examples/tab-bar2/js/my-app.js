// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add views
var view1 = myApp.addView('#view-1');
var view2 = myApp.addView('#view-2', {
    dynamicNavbar: true
});
var mainView = myApp.addView('.view-main');
mainView.hideToolbar();

var first_time = true;
var user_id =  window.localStorage.getItem('user_id');
var token = window.localStorage.getItem('token');
var project_id = "";
var household_id = "";
var pathway_id = "";
var previous_select_outcome = "";

$$(document).on('pageInit', function (e) {
    var page = e.detail.page;
    if (page.name === 'index-1') {
      // console.log('feay1234 index')

    }

    // if (page.name === 'projects'){
    //   if(first_time){
    //     getProjects(user_id);
    //     first_time = false;
    //   }
    // }
    if (page.name === 'engage-not-form'){
    	
    }


})

if(first_time){

	getProjects(user_id);
	first_time = false;
}


// $("#toolbar").hide();
	myApp.showTab('#view-2');

$("#pathway").click(function(){

	// create option
	$("#test1234").append('<li><a href="about.html" class="item-link">'+
                      '<div class="item-content">'+
                        '<div class="item-inner">'+
                          '<div class="item-title">About Us</div>'+
                        '</div>'+
                      '</div></a></li>')

	$("#toolbar").show();
	// $("#toolbar2").append('<a id="view-'+time+'" href="#view-'+time+'" class="tab-link">'+
	// 						            '<i class="icon tabbar-demo-icon-1"></i>'+
	// 						            '<span class="tabbar-label">'+time+'</span>'+
	// 						          '</a>');

	// $("#views").append('<div id="view-'+time+'" class="view tab">'+
	// 				        '<div class="navbar">'+
	// 				          '<div class="navbar-inner">'+
	// 				            '<div class="center sliding">'+time+'</div>'+
	// 				          '</div>'+
	// 				        '</div>'+
	// 				        '<div class="pages navbar-through">'+
	// 				          '<div data-page="index-'+time+'" class="page">'+
	// 				            '<div class="page-content">'+
	// 				              '<div class="content-block">'+
	// 				                '<p>This is a second view. Lets, for example, have here some internal pages with navbar navigation</p>'+
	// 				              '</div>'+
	// 				              '<div class="list-block">'+
	// 				                '<ul>'+
	// 				                  '<li><a id="btn'+time+'" href="#" class="item-link">'+
	// 				                      '<div class="item-content">'+
	// 				                        '<div class="item-inner">'+
	// 				                          '<div class="item-title">About Us</div>'+
	// 				                        '</div>'+
	// 				                      '</div></a></li>'+
	// 				                  '<li><a href="services.html" class="item-link">'+
	// 				                      '<div class="item-content">'+
	// 				                        '<div class="item-inner">'+
	// 				                          '<div class="item-title">Services</div>'+
	// 				                        '</div>'+
	// 				                      '</div></a></li>'+
	// 				                '</ul>'+
	// 				              '</div>'+
	// 				            '</div>'+
	// 				          '</div>'+
	// 				        '</div>'+
	// 				      '</div>');
	
	
	// var view5 = myApp.addView("#view-"+time, {
	// 	    // Because we use fixed-through navbar we can enable dynamic navbar
	// 	    dynamicNavbar: true
	// 	});
	// $("#btn"+time).click(function(){
		
	// 	view5.loadPage('about.html')
	// })
	$("#view-2-content").empty();
	$("#view-2-header").text("Streetlist")
	$("#view-2-tab-name").text("Streetlist")
	myApp.showTab('#view-2');

	// get street list


	// 

	// time++;
	// $("#projectsTab").removeClass("active");
	// $("#view-5").addClass("active");

})


$("#pathway2").click(function(){
	// myApp.showTab('#view-2');.
	$("#toolbar").show();
	myApp.showTab('#view-2');
	$("#span1234").text("Household")
	$("#center1234").text("Household")
	$("#test1234").empty();
	$("#test1234").append('<li><a href="about.html" class="item-link">'+
                      '<div class="item-content">'+
                        '<div class="item-inner">'+
                          '<div class="item-title">About Us</div>'+
                        '</div>'+
                      '</div></a></li>')
	
	console.log("yes")
})

$("#project").click(function(){
	$("#toolbar").hide();
})

$("#projectsTab").click(function(){
	$("#toolbar").hide();

})


// popover streetlist option
$("#popover-streetlist-engage").click(function(){
	myApp.alert(household_id)
	myApp.closeModal(".popover-streetlist-actions")
})

$("#popover-streetlist-not-engage").click(function(){
	// myApp.alert(household_id)
	myApp.closeModal(".popover-streetlist-actions")
	view2.loadPage('engage-not-form.html');

})


// engage not form event handlers
$(document).ready(function() {  

	// Display additional fields related to selected outcome.
    $('#engage-not-outcome').change(function(){
        console.log( $(this).find("option:selected").attr('value') );   

        $("#outcome-"+previous_select_outcome).fadeOut();
        previous_select_outcome = $(this).find("option:selected").attr('value');
        $("#outcome-"+previous_select_outcome).fadeIn(1000);
    });

    // Get Data input.
    $("#endage-not-form-submit-btn").click(function(){
    	if(previous_select_outcome == "" || previous_select_outcome == "none"){
    		myApp.alert("Please select outcome.")
    	}
    	else{
    		var outcome_value = $("#outcome-"+previous_select_outcome).attr("number")

    		if (outcome_value == 9){
    		console.log(outcome_value);
    			
    		}

    	}
    })
 });
