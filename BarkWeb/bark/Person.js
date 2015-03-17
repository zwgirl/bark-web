(function(){ 
  function Person(name, age) {    
    this._name = null;
    this._age = 0;
    this._children = new (__lc('java.util.ObservableCollection'))("1");
    this._selected = false;
    this.listeners = new Object();
    this._name = name;
    this._age = age;
  }
  Person.prototype.__proto__ = Object.prototype;
  __cache["Person"] = Person;
  Object.defineProperty(Person.prototype, "name", {
    get : function() {
      return this._name;
    }, 
    set : function(value) {
      var oldValue = this._name;
      this._name = value;
      if(oldValue != value)
      {
        this.notify(this, new (__lc('java.lang.PropertyChangeEvent'))("name"));
      }
    }
  });
  Object.defineProperty(Person.prototype, "age", {
    get : function() {
      return this._age;
    }, 
    set : function(value) {
      var oldValue = this._age;
      this._age = value;
      if(oldValue != value)
      {
        this.notify(this, new (__lc('java.lang.PropertyChangeEvent'))("age"));
      }
    }
  });
  Object.defineProperty(Person.prototype, "children", {
    get : function() {
      return this._children;
    }, 
    set : function(value) {
      var oldValue = this._children;
      this._children = value;
      if(oldValue != value)
      {
        this.notify(this, new (__lc('java.lang.PropertyChangeEvent'))("children"));
      }
    }
  });
  Object.defineProperty(Person.prototype, "selected", {
    get : function() {
      return this._selected;
    }, 
    set : function(value) {
      var oldValue = this._selected;
      this._selected = value;
      if(oldValue != value)
      {
        this.notify(this, new (__lc('java.lang.PropertyChangeEvent'))("selected"));
      }
    }
  });
  Person.prototype.notify = function(source, event){
    var handlers = this.listeners[event.propertyName];
    if(handlers != undefined)
    {
      handlers.forEach((function(value, index, array){
        value(source, event);
      }).bind(this));
    }
  };
  Person.prototype.addPropertyChangeListener = function(propName, handler){
    var handlers = this.listeners[propName];
    if(handlers == undefined)
    {
      handlers = new Array();
      this.listeners[propName] = handlers;
    }
    handlers.push(handler);
  };
  Person.prototype.removePropertyChangeListener = function(propName, handler){
    var handlers = this.listeners[propName];
    if(handlers != undefined)
    {
      handlers.forEach((function(value, index, array){
        if(value === handler)
        {
          handlers.splice(index, 1);
        }
      }).bind(this));
    }
  };
  Person.prototype.__class = new (__lc('java.lang.Class'))("Person", Person, Object.prototype.__class, [__lc("java.lang.INotifyPropertyChanged").prototype.__class], 1);
  return  Person;
})();