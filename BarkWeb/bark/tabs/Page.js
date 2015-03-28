(function(){ 
  function Page(header, content, selected) {    
    this._header = null;
    this._content = null;
    this._selected1 = false;
    this._poem = null;
    this._listeners = new Object();
    this._header = header;
    this._content = content;
    this._selected1 = selected;
  }
  Page.prototype.__proto__ = Object.prototype;
  __cache["tabs.Page"] = Page;
  Object.defineProperty(Page.prototype, "header", {
    get : function() {
      return this._header;
    }, 
    set : function(value) {
      if(this._header === value)
      {
        return;
      }
      this._header = value;
      this.propertyChanged("header");
    }
  });
  Object.defineProperty(Page.prototype, "content", {
    get : function() {
      return this._content;
    }, 
    set : function(value) {
      if(this._content === value)
      {
        return;
      }
      this._content = value;
      this.propertyChanged("content");
    }
  });
  Object.defineProperty(Page.prototype, "selected1", {
    get : function() {
      return this._selected1;
    }, 
    set : function(value) {
      if(this._selected1 === value)
      {
        return;
      }
      this._selected1 = value;
      this.propertyChanged("selected1");
    }
  });
  Object.defineProperty(Page.prototype, "poem", {
    get : function() {
      return this._poem;
    }, 
    set : function(value) {
      if(this._poem === value)
      {
        return;
      }
      this._poem = value;
      this.propertyChanged("poem");
    }
  });
  Page.prototype.propertyChanged = function(propName){
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
  Page.prototype.addPropertyChangeListener = function(propName, handler){
    var listeners = this._listeners[propName];
    if(listeners == null)
    {
      listeners = new Array();
      this._listeners[propName] = listeners;
    }
    listeners.push(handler);
  };
  Page.prototype.removePropertyChangeListener = function(propName, handler){
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
  Page.prototype.__class = new (__lc('java.lang.Class'))("tabs.Page", Page, Object.prototype.__class, [__lc("java.lang.INotifyPropertyChanged").prototype.__class], 1);
  return  Page;
})();