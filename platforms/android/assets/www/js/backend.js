function getProjects(user_id){
  console.log(user_id);
	$.ajax({ type: "GET",   
       url: "http://api.ptp.jmpextra.net/user/"+user_id,
       data:  {with: "projects"},
       headers: {
            'X-Auth-Token' : token
       },
       dataType: "json",
       success : function(data)
       {
          var projects = data.user.projects
        // var resultContent = template({
        //     people: data
        // })
        // next(resultContent);
          window.localStorage.setItem('projects', JSON.stringify(projects));
          for(var i = 0; i < projects.length; i++){
              createProject(projects[i].project);
          }

       },
       error: function(XMLHttpRequest, textStatus, errorThrown) { 
            console.log(XMLHttpRequest+" "+textStatus+" "+errorThrown);

            var projects = jQuery.parseJSON(window.localStorage.getItem("projects"));
            for(var i = 0; i < projects.length; i++){
                createProject(projects[i].project);
            }

       } 
    });
}

function getPathways(user_id, id){
  // getStreetList(user_id, id);
	$.ajax({ type: "GET",   
       url: "http://api.ptp.jmpextra.net/pathway?project_id="+id, 
       dataType: "json",
       headers: {
            'X-Auth-Token' : token
       },
       success : function(data)
       {
          var pathways = data.data;
          window.localStorage.setItem('pathways', JSON.stringify(pathways));
          for(var i = 0; i < pathways.length; i++){
              createPathway(pathways[i]);
          }
       },
       error: function(XMLHttpRequest, textStatus, errorThrown) { 
             console.log(XMLHttpRequest+" "+textStatus+" "+errorThrown);
             var pathways = jQuery.parseJSON(window.localStorage.getItem("pathways"));
             for(var i = 0; i < pathways.length; i++){
                  createPathway(pathways[i]);
              }

       } 
    });
}

function getHouseholds(p_id, page_num){
  $.ajax({ type: "GET",   
     url: "http://api.ptp.jmpextra.net/household",
     data:  {project_id: p_id, page: page_num},
     dataType: "json",
     headers: {
            'X-Auth-Token' : token
     },
     success : function(data)
     {
        var households = data.data;
        window.localStorage.setItem(p_id+page_num, JSON.stringify(households));
        for(var i = 0; i < households.length; i++){
            createHousehold(households[i]);
        }
     },
     error: function(XMLHttpRequest, textStatus, errorThrown) { 
      // no streetlist
          console.log(XMLHttpRequest+" "+textStatus+" "+errorThrown);
          var households = jQuery.parseJSON(window.localStorage.getItem(p_id+page_num));
          for(var i = 0; i < households.length; i++){
               createHousehold(households[i]);
           }
     } 
  });
}

function getStreetList(user_id,p_id){
  $.ajax({ type: "GET",   
       url: "http://api.ptp.jmpextra.net/user/"+user_id+"/streetlist",
       data:  {project_id: p_id},
       dataType: "json",
       headers: {
            'X-Auth-Token' : token
       },
       success : function(data)
       {
          var streetlist = data;
          window.localStorage.setItem(user_id+p_id, JSON.stringify(streetlist));
          if(data.day.length > 0){
            var day = data.day;
            createStreetlistTable("day");
            for(var i = 0; i < day.length; i++){
                createStreetlist(day[i], "day");
            }
          }
          if(data.evening.length > 0){
            var evening = data.evening;
            createStreetlistTable("evening");
            for(var i = 0; i < evening.length; i++){
                createStreetlist(evening[i], "evening");
            }
            
          }
          if(data.weekend.length > 0){
            var weekend = data.weekend
            createStreetlistTable("weekend");

            for(var i = 0; i < weekend.length; i++){
                createStreetlist(weekend[i], "weekend");
            }
            
          }
          if(data.complete.length > 0){
            var complete = data.complete
            createStreetlistTable("complete");
            for(var i = 0; i < complete.length; i++){
                createStreetlist(complete[i], "complete");
            }
          }
          if(data.other.length > 0){
            var other = data.other
            createStreetlistTable("other");
            for(var i = 0; i < other.length; i++){
                createStreetlist(other[i], "other");
            }
          }
       },
       error: function(XMLHttpRequest, textStatus, errorThrown) { 
        // no streetlist
             console.log(XMLHttpRequest+" "+textStatus+" "+errorThrown);
            var data = jQuery.parseJSON(window.localStorage.getItem(user_id+p_id));
            if(data.day.length > 0){
              var day = data.day;
              $("#dayTitle").show();
              for(var i = 0; i < day.length; i++){
                  createStreetlist(day[i]);
              }
            }
            if(data.evening.length > 0){
              var evening = data.evening;
              $("#eveningTitle").show();
              for(var i = 0; i < evening.length; i++){
                  createStreetlist(evening[i]);
              }
              
            }
            if(data.weekend.length > 0){
              var weekend = data.weekend
              $("#weekendTitle").show();
              for(var i = 0; i < weekend.length; i++){
                  createStreetlist(weekend[i]);
              }
              
            }
            if(data.complete.length > 0){
              var complete = data.complete
              $("#completeTitle").show();
              for(var i = 0; i < complete.length; i++){
                  createStreetlist(complete[i]);
              }
            }
            if(data.other.length > 0){
              var other = data.other
              $("#otherTitle").show();
              for(var i = 0; i < other.length; i++){
                  createStreetlist(other[i]);
              }
            }

       } 
    });

  // $.ajax({ type: "GET",   
  //      url: "http://api.ptp.jmpextra.net/user/"+user_id+"/streetlist", 
  //      // data: {"project_id": p_id},
  //      dataType: "json",
  //      success : function(data)
  //      {
  //         console.log(JSON.stringify(data));
  //         // data = data.data;
  //         // for(var i = 0; i < data.length; i++){
  //         //     createPathway(data[i]);
  //         // }
  //      },
  //      error: function(XMLHttpRequest, textStatus, errorThrown) { 
  //            console.log(XMLHttpRequest+" "+textStatus+" "+errorThrown);
  //            console.log(JSON.stringify(XMLHttpRequest));

  //      } 
  //   });
}