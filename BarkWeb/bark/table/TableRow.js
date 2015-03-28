(function(){ 
  function TableRow() {    
  __lc('java.lang.ItemTemplate').call(this);
    this.callback = (function(target, tagProperty1, tagProperty2, value){
      if(value)
      {
        target[tagProperty1][tagProperty2] = "cyan";
      }
      else
      {
        target[tagProperty1].removeProperty("background-color");
      }
    }).bind(this);
  }
  TableRow.prototype.__proto__ = __lc("java.lang.ItemTemplate").prototype;
  __cache["table.TableRow"] = TableRow;
  TableRow.prototype.createRoot = function(parent, item) {
    var _n = _c("tr");
    parent.appendChild(_n);
    _n.dataContext = new (__lc('java.lang.DataContext'))(item, '12');
    _n.style.backgroundColor = new (__lc("java.lang.Binding"))({property : "selected", mode : __lc("java.lang.BindingMode").TwoWay, callback : this.callback}).provideValue(_n, "style", "backgroundColor");
    return _n;
  };
  TableRow.prototype.createChild = function(parent) {
    (function(_p){
      var _n = _c("td");
      _p.appendChild(_n);
      (function(_p){
        var _n = _c("input");
        _p.appendChild(_n);
        _n.type = "checkbox";
        _n.checked = new (__lc("java.lang.Binding"))({property : "selected", mode : __lc("java.lang.BindingMode").TwoWay, updateSourceTrigger : __lc("java.lang.UpdateSourceTrigger").PropertyChanged}).provideValue(_n, "checked", null);
      }).call(this, _n);
      var _n = _c("td");
      _p.appendChild(_n);
      _n.textContent = new (__lc("java.lang.Binding"))({property : "ordinal"}).provideValue(_n, "textContent", null);
      var _n = _c("td");
      _p.appendChild(_n);
      (function(_p){
        var _n = _c("a");
        _p.appendChild(_n);
        _n.href = "#";
        _n.textContent = new (__lc("java.lang.Binding"))({property : "name"}).provideValue(_n, "textContent", null);
      }).call(this, _n);
      var _n = _c("td");
      _p.appendChild(_n);
      _n.textContent = new (__lc("java.lang.Binding"))({property : "address"}).provideValue(_n, "textContent", null);
      var _n = _c("td");
      _p.appendChild(_n);
      _n.textContent = new (__lc("java.lang.Binding"))({property : "age"}).provideValue(_n, "textContent", null);
    }).call(this, parent);
  };
  TableRow.prototype.__class = new (__lc('java.lang.Class'))("table.TableRow", TableRow, __lc("java.lang.ItemTemplate").prototype.__class, [], 1);
  return  TableRow;
})();