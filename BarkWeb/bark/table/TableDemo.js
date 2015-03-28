(function(){ 
  function TableDemo() {    
    this.select = null;
    this._persons = new (__lc('java.util.ObservableCollection'))("1");
    this.addChild = (function(event){
      this.persons.add(new (__lc('table.Person'))("child1", "新增张三", "山东高密新增", 35));
    }).bind(this);
    this.deleteChild = (function(event){
      if(this.persons.size > 0)
      {
        this.persons.removeAt(0);
      }
    }).bind(this);
    this.selectAll = (function(event){
      if(this.persons != null)
      {
        var flag = this.select.checked;
        var __coll = this.persons, __i = __coll.iterator();
        while(__i.hasNext()) {
          var person = __i.next();
          person.selected = flag;
        }
      }
    }).bind(this);
    this._allSelected = false;
    this._listeners = new Object();
    this._persons.add(new (__lc('table.Person'))("1", "张三", "山东高密", 65));
    this._persons.add(new (__lc('table.Person'))("2", "张三1", "山东高密1", 65));
    this._persons.add(new (__lc('table.Person'))("3", "张三2", "山东高密2", 65));
    this._persons.add(new (__lc('table.Person'))("4", "张三3", "山东高密2", 65));
    this.addPropertyChangeListener("allSelected", this.onSelectedAll.bind(this));
  }
  TableDemo.prototype.__proto__ = Object.prototype;
  __cache["table.TableDemo"] = TableDemo;
  Object.defineProperty(TableDemo.prototype, "persons", {
    get : function() {
      return this._persons;
    }, 
    set : function(value) {
      this._persons = value;
    }
  });
  Object.defineProperty(TableDemo.prototype, "allSelected", {
    get : function() {
      return this._allSelected;
    }, 
    set : function(value) {
      if(this._allSelected === value)
      {
        return;
      }
      this._allSelected = value;
      this.propertyChanged("allSelected");
    }
  });
  TableDemo.prototype.propertyChanged = function(propName){
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
  TableDemo.prototype.addPropertyChangeListener = function(propName, handler){
    var listeners = this._listeners[propName];
    if(listeners == null)
    {
      listeners = new Array();
      this._listeners[propName] = listeners;
    }
    listeners.push(handler);
  };
  TableDemo.prototype.removePropertyChangeListener = function(propName, handler){
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
  TableDemo.prototype.onSelectedAll = function(source, evt){
    if(this.persons != null)
    {
      var flag = source[evt.propertyName];
      var __coll = this.persons, __i = __coll.iterator();
      while(__i.hasNext()) {
        var person = __i.next();
        person.selected = flag;
      }
    }
  };
  TableDemo.prototype.__class = new (__lc('java.lang.Class'))("table.TableDemo", TableDemo, Object.prototype.__class, [__lc("java.lang.INotifyPropertyChanged").prototype.__class], 1);
  return  TableDemo;
})();