ExceptionsCookies = {
1: function() {
    var params = { blockVisible   : true, 
                   sessionVisible : true, 
                   allowVisible   : true, 
                   prefilledHost  : "", 
                   permissionType : "cookie",
                   windowTitle    : "Exceptions - Cookies",
                   introText      : "You can specify which websites are always or never allowed to use cookies. Type the exact address of the site you want to manage and then click Block, Allow for Session, or Allow." };
    var exceptionsCookies = window.openDialog("chrome://browser/content/preferences/permissions.xul", "exceptions-cookies", "chrome,centerscreen,width=450,height=450,resizable", params);
    exceptionsCookies.focus();
  },
}
