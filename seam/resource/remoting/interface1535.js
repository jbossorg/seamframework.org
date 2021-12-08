Seam.Remoting.type.httpSessionChecker = function() {
  this.__callback = new Object();
  Seam.Remoting.type.httpSessionChecker.prototype.isNewSession = function(callback, exceptionHandler) {
    return Seam.Remoting.execute(this, "isNewSession", [], callback, exceptionHandler);
  }
}
Seam.Remoting.type.httpSessionChecker.__name = "httpSessionChecker";

Seam.Component.register(Seam.Remoting.type.httpSessionChecker);

