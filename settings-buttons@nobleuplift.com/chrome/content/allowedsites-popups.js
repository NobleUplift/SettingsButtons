AllowedSitesPopups = {
1: function() {
    var params = { blockVisible   : false, 
                   sessionVisible : false, 
                   allowVisible   : true, 
                   prefilledHost  : "", 
                   permissionType : "popup",
                   windowTitle    : "Allowed Sites - Pop-ups",
                   introText      : "You can specify which websites are allowed to open pop-up windows. Type the exact address of the site you want to allow and click Allow." };
    var popups = window.openDialog("chrome://browser/content/preferences/permissions.xul", "allowedsites-popups", "chrome,centerscreen,width=450,height=450,resizable", params);
    popups.focus();
  },
}
