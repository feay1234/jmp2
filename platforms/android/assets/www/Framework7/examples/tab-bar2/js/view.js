function createProject(data){
	var id = data._id;
	var name = data.name;
	$("#project-list").append('<li id="project-'+id+'">'+
									'<label class="label-radio item-content open-panel">'+
									// '<a href="pathways.html?id='+id+'" class="item-link">'+
				                        '<input type="radio" name="my-radio" value="Books" >'+
				                          '<div class="item-inner">'+
				                            '<div class="item-title">'+name+'</div>'+
				                          '</div>'+
				                        '</div>'+
			                        // '</a>'+
		                        '</li>')

	$("#project-"+id).click(function(){
		project_id = id;
		// set project's name in panel
		$("#panel-project-name").text(name);
		// create Pathway.
		$("#pathway-list").empty();
    	getPathways(user_id,project_id);

	})

}

function createPathway(data){
	var id = data._id;
	var name = data.name;
	if(name == "Residential"){
		// 
		$("#pathway-list").append('<li id="pathway-'+id+'"style="background-color:#000; color:#FFA600; border-color:#FFA600;">'+
										'<a id="pathway" href="#" class="item-link close-panel">'+
					                        '<div class="item-content">'+
					                          '<div class="item-inner">'+
					                            '<div class="item-title">'+name+'</div>'+
					                          '</div>'+
					                        '</div>'+
				                        '</a>'+
			                        '</li>')
	}
	else{
		$("#pathway-list").append('<li style="background-color:#000; color:#FFA600; border-color:#FFA600;">'+
										'<a class="item-link">'+
					                        '<div class="item-content">'+
					                          '<div class="item-inner">'+
					                            '<div class="item-title">'+name+'</div>'+
					                          '</div>'+
					                        '</div>'+
				                        '</a>'+
			                        '</li>')
	}

	// create streetlist
	$("#pathway-"+id).click(function(){
		pathway_id = id;
		// create option
		$("#view-2-table-streetlist").empty();
		$("#view-2-table-streetlist").append('<li><a href="about.html" class="item-link">'+
	                      '<div class="item-content">'+
	                        '<div class="item-inner">'+
	                          '<div class="item-title">About Us</div>'+
	                        '</div>'+
	                      '</div></a></li>')

		$("#toolbar").show();
		
		$("#view-2-header").text("Streetlist")
		$("#view-2-tab-name").text("Streetlist")

		getStreetList(user_id, project_id);
		myApp.showTab('#view-2');
	})
	
}

function createStreetlistTable(type){
    $("#view-2-table-streetlist-"+type+"-title").show();
	$("#view-2-table-streetlist-"+type+"-content").append('<tr>'+
                                                  '<th >Address</th>'+
                                                  '<th >Postcode</th>'+
                                                  '<th >Visits</th>'+
                                                  '<th >Actions</th>'+
                                                '</tr>')
}

function createStreetlist(data, type){
	var l1 = "";
	var l2 = "";
	var town = "";
	var pcode = "";
	var visit = "";	
	var id = data._id;
	console.log(id);

	if(data.address.hasOwnProperty('l1')){
		l1 = data.address.l1;
	}
	if(data.address.hasOwnProperty('l2')){
		l2 = data.address.l2;
	}
	if(data.address.hasOwnProperty('town')){
		town = data.address.town;
	}
	if(data.address.hasOwnProperty('pcode')){
		pcode = data.address.pcode;
	}
	if(data.hasOwnProperty('visit')){
		visit = data.visit;	
	}

	// $("#streetlist").append('<li class="swipeout">'+
 //            '<div class="swipeout-content">'+
 //              '<a href="#" class="item-link item-content ">'+
 //                '<div class="item-inner ">'+
 //                  '<div class="item-title-row">'+
 //                    '<div class="item-title">'+l1+' '+l2+' '+town+'</div>'+
 //                    '<div class="item-after">Visit: '+visit+'</div>'+
 //                  '</div>'+
 //                  '<div class="item-text">'+pcode+'</div>'+
 //                '</div>'+
 //              '</a>'+
 //            '</div>'+
 //            '<div class="swipeout-actions">'+
 //              '<div class="swipeout-actions-inner">'+
 //                '<a href="engage-form.html" style="background-color:#FFA600">Engaged</a>'+
 //                '<a href="engage-not-form.html" style="background-color:#3c424d">Not Engaged</a>'+
 //              '</div>'+
 //            '</div>'+
 //          '</li>');

	$("#view-2-table-streetlist-"+type+"-content").append('<tr>'+
                    '<td>'+l1+' '+l2+' '+town+'</td>'+
                    '<td>'+pcode+'</td>'+
                    '<td>'+visit+'</td>'+
                    '<td><a id="streetlist-'+id+'" href="#" data-popover=".popover-streetlist-actions" class="open-popover">Open Links Popover</a></td>'+
                  '</tr>');

	$("#streetlist-"+id).click(function(){
		household_id = id;
	})
}

function createHousehold(data){
	var l1 = "";
	var l2 = "";
	var town = "";
	var pcode = "";
	var visit = "";	
	if(data.address.hasOwnProperty('l1')){
		l1 = data.address.l1;
	}
	if(data.address.hasOwnProperty('l2')){
		l2 = data.address.l2;
	}
	if(data.address.hasOwnProperty('town')){
		town = data.address.town;
	}
	if(data.address.hasOwnProperty('pcode')){
		pcode = data.address.pcode;
	}
	if(data.hasOwnProperty('visit')){
		visit = data.visit;	
	}
	

	$("#households").append('<li class="swipeout">'+
            '<div class="swipeout-content">'+
              '<a href="#" class="item-link item-content ">'+
                '<div class="item-inner ">'+
                  '<div class="item-title-row">'+
                    '<div class="item-title">'+l1+' '+l2+' '+town+'</div>'+
                    '<div class="item-after">Visit: '+visit+'</div>'+
                  '</div>'+
                  '<div class="item-text">'+pcode+'</div>'+
                '</div>'+
              '</a>'+
            '</div>'+
            '<div class="swipeout-actions">'+
              '<div class="swipeout-actions-inner">'+
                '<a href="engage-form.html" style="background-color:#FFA600">Engaged</a>'+
                '<a href="engage-not-form.html" style="background-color:#3c424d">Not Engaged</a>'+
              '</div>'+
            '</div>'+
          '</li>');



}

function createChallenge(){
	$('<div class="list-block inset">'+
	              '<form id="my-form2">'+
	                '<ul>'+
	                  '<li>'+
	                    '<div class="item-content">'+
	                      '<div class="item-inner">'+
	                        '<div class="item-title label">Challenge</div>'+
	                        '<div class="item-input">'+
	                          '<select>'+
	                            '<option>Challenge 1</option>'+
	                            '<option>Challenge 2</option>'+
	                          '</select>'+
	                        '</div>'+
	                      '</div>'+
	                    '</div>'+
	                  '</li>'+
	                  '<li class="align-top">'+
	                    '<div class="item-content">'+
	                      '<div class="item-inner">'+
	                        '<div class="item-title label">Will</div>'+
	                        '<div class="item-input">'+
	                          '<textarea></textarea>'+
	                        '</div>'+
	                      '</div>'+
	                    '</div>'+
	                  '</li>'+
	                  '<li>'+
	                    '<div class="item-content">'+
	                      '<div class="item-inner">'+
	                        '<div class="item-title label">Incentive</div>'+
	                        '<div class="item-input">'+
	                          '<select>'+
	                            '<option>Incentive 1</option>'+
	                            '<option>Incentive 2</option>'+
	                            '<option>Incentive 3</option>'+
	                            '<option>Incentive 4</option>'+
	                          '</select>'+
	                        '</div>'+
	                      '</div>'+
	                    '</div>'+
	                  '</li>'+
	                  '<li>'+
	                    '<div class="item-content">'+
	                      '<div class="item-inner">'+
	                        '<div class="item-title label">Qty</div>'+
	                        '<div class="item-input">'+
	                          '<input type="number" placeholder="number">'+
	                        '</div>'+
	                      '</div>'+
	                    '</div>'+
	                  '</li>'+
	                '</ul>'+
	              '</form>'+
	            '</div>').insertAfter("#challenge-block").hide().slideDown(1000);
}