(function(){ 
  function Person(_ordinal, _name, _address, _age) {    
    this._ordinal = null;
    this._name = null;
    this._address = null;
    this._age = 0;
    this._selected = false;
    this._listeners = new Object();
    this._ordinal = _ordinal;
    this._name = _name;
    this._address = _address;
    this._age = _age;
  }
  Person.prototype.__proto__ = Object.prototype;
  __cache["table.Person"] = Person;
  Object.defineProperty(Person.prototype, "ordinal", {
    get : function() {
      return this._ordinal;
    }, 
    set : function(value) {
      if(this._ordinal === value)
      {
        return;
      }
      this._ordinal = value;
      this.propertyChanged("ordinal");
    }
  });
  Object.defineProperty(Person.prototype, "name", {
    get : function() {
      return this._name;
    }, 
    set : function(value) {
      if(this._name === value)
      {
        return;
      }
      this._name = value;
      this.propertyChanged("name");
    }
  });
  Object.defineProperty(Person.prototype, "address", {
    get : function() {
      return this._address;
    }, 
    set : function(value) {
      if(this._address === value)
      {
        return;
      }
      this._address = value;
      this.propertyChanged("address");
    }
  });
  Object.defineProperty(Person.prototype, "age", {
    get : function() {
      return this._age;
    }, 
    set : function(value) {
      if(this._age === value)
      {
        return;
      }
      this._age = value;
      this.propertyChanged("age");
    }
  });
  Object.defineProperty(Person.prototype, "selected", {
    get : function() {
      return this._selected;
    }, 
    set : function(value) {
      if(this._selected === value)
      {
        return;
      }
      this._selected = value;
      this.propertyChanged("selected");
    }
  });
  Person.prototype.propertyChanged = function(propName){
    var event = new (__lc('java.lang.PropertyChangeEvent'))(propName);
    var listeners = this._listeners[propName];
    if(listeners == null)
    {
      return;
    }
    listeners.forEach((function(h, index, array){
      h(this, event);
    }).bind(this));
  };
  Person.prototype.addPropertyChangeListener = function(propName, handler){
    var listeners = this._listeners[propName];
    if(listeners == null)
    {
      listeners = new Array();
      this._listeners[propName] = listeners;
    }
    listeners.push(handler);
  };
  Person.prototype.removePropertyChangeListener = function(propName, handler){
    var listeners = this._listeners[propName];
    if(listeners == null)
    {
      return;
    }
    listeners.forEach((function(h, index, array){
      if(handler === h)
      {
        listeners.splice(index, 1);
      }
    }).bind(this));
  };
  Person.prototype.__class = new (__lc('java.lang.Class'))("table.Person", Person, Object.prototype.__class, [__lc("java.lang.INotifyPropertyChanged").prototype.__class], 1);
  return  Person;
})();