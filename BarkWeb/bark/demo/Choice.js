(function(){ 
  function Choice(_className, _h4ClassName, _ulClassName, _activeClient, _invocePerMonth, _staffLogins, _upgrades, _cert, _support, _eval1) {    
    this._className = null;
    this._h4ClassName = null;
    this._ulClassName = null;
    this._activeClient = null;
    this._invocePerMonth = null;
    this._staffLogins = null;
    this._upgrades = null;
    this._cert = null;
    this._support = null;
    this._eval1 = null;
    this._className = _className;
    this._h4ClassName = _h4ClassName;
    this._ulClassName = _ulClassName;
    this._activeClient = _activeClient;
    this._invocePerMonth = _invocePerMonth;
    this._staffLogins = _staffLogins;
    this._upgrades = _upgrades;
    this._cert = _cert;
    this._support = _support;
    this._eval1 = _eval1;
  }
  Choice.prototype.__proto__ = Object.prototype;
  __cache["demo.Choice"] = Choice;
  Object.defineProperty(Choice.prototype, "className", {
    get : function() {
      return this._className;
    }, 
    set : function(value) {
      this._className = value;
    }
  });
  Object.defineProperty(Choice.prototype, "h4ClassName", {
    get : function() {
      return this._h4ClassName;
    }, 
    set : function(value) {
      this._h4ClassName = value;
    }
  });
  Object.defineProperty(Choice.prototype, "ulClassName", {
    get : function() {
      return this._ulClassName;
    }, 
    set : function(value) {
      this._ulClassName = value;
    }
  });
  Object.defineProperty(Choice.prototype, "activeClient", {
    get : function() {
      return this._activeClient;
    }, 
    set : function(value) {
      this._activeClient = value;
    }
  });
  Object.defineProperty(Choice.prototype, "invocePerMonth", {
    get : function() {
      return this._invocePerMonth;
    }, 
    set : function(value) {
      this._invocePerMonth = value;
    }
  });
  Object.defineProperty(Choice.prototype, "staffLogins", {
    get : function() {
      return this._staffLogins;
    }, 
    set : function(value) {
      this._staffLogins = value;
    }
  });
  Object.defineProperty(Choice.prototype, "upgrades", {
    get : function() {
      return this._upgrades;
    }, 
    set : function(value) {
      this._upgrades = value;
    }
  });
  Object.defineProperty(Choice.prototype, "cert", {
    get : function() {
      return this._cert;
    }, 
    set : function(value) {
      this._cert = value;
    }
  });
  Object.defineProperty(Choice.prototype, "support", {
    get : function() {
      return this._support;
    }, 
    set : function(value) {
      this._support = value;
    }
  });
  Object.defineProperty(Choice.prototype, "eval1", {
    get : function() {
      return this._eval1;
    }, 
    set : function(value) {
      this._eval1 = value;
    }
  });
  Choice.prototype.__class = new (__lc('java.lang.Class'))("demo.Choice", Choice, Object.prototype.__class, [], 1);
  return  Choice;
})();