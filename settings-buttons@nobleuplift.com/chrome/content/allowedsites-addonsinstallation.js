AllowedSitesAddonsInstallation = {
1: function() {
    var params = { blockVisible   : false, 
                   sessionVisible : false, 
                   allowVisible   : true, 
                   prefilledHost  : "", 
                   permissionType : "install",
                   windowTitle    : "Allowed Sites - Add-ons Installation",
                   introText      : "You can specify which websites are allowed to install add-ons. Type the exact address of the site you want to allow and then click Allow." };
    var addonsInstallation = window.openDialog("chrome://browser/content/preferences/permissions.xul", "addons-installation", "chrome,centerscreen,width=450,height=450,resizable", params);
    addonsInstallation.focus();
  },
}
