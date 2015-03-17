(function(){ 
  function ChildTemplate() {    
  __lc('java.lang.ItemTemplate').call(this);
    this.item = null;
    this.children = null;
    this.nodeClick = (function(event){
      if(this.children.style.display == "none")
      {
        this.children.style.display = "block";
      }
      else
      {
        this.children.style.display = "none";
      }
    }).bind(this);
    this.itemClick = (function(event){
      var person = this.item.dataContext.dataItem;
      person.selected = ! person.selected;
      if(event.target.className == "treeItemTitle" && event.target.style.backgroundColor == "blue")
      {
        event.target.style.removeProperty("background-color");
      }
      else
      {
        event.target.style.backgroundColor = "blue";
      }
    }).bind(this);
  }
  ChildTemplate.prototype.__proto__ = __lc("java.lang.ItemTemplate").prototype;
  __cache["ChildTemplate"] = ChildTemplate;
  ChildTemplate.prototype.createRoot = function(parent) {
    var _n = _c("div");
    parent.appendChild(_n);
    _n.className = "child";
    return _n;
  };
  ChildTemplate.prototype.createChild = function(parent) {
    (function(_p){
      var _n = _c("span");
      _p.appendChild(_n);
      _n["name"] = "item";
      this.item = _n;
      _n.className = "hvr-fade";
      (function(_p){
        var _n = _c("img");
        _p.appendChild(_n);
        _n.src = "img/expanded.gif";
        _n.className = "trrItemNode";
        _n.addEventListener('click', this.nodeClick, false);
        var _n = _c("span");
        _p.appendChild(_n);
        _n.addEventListener('click', this.itemClick, false);
        _n.className = "treeItemTitle";
        (function(_p){
          var _n = document.createTextNode('');
          _p.appendChild(_n);
          _n.data = new (__lc("java.lang.Binding"))({property : "name", mode : __lc("java.lang.BindingMode").OneWay}).provideValue(_n, "data", null);
        }).call(this, _n);
      }).call(this, _n);
      var _n = _c("div");
      _p.appendChild(_n);
      _n["name"] = "children";
      this.children = _n;
      _n.className = "children";
      _n.itemsConfig = new (__lc("java.lang.ItemsConfig"))({path : "children", itemTemplate : __lc("ChildTemplate").prototype.__class}).provideValue(_n, "itemsConfig", null);
    }).call(this, parent);
  };
  ChildTemplate.prototype.__class = new (__lc('java.lang.Class'))("ChildTemplate", ChildTemplate, __lc("java.lang.ItemTemplate").prototype.__class, [], 1);
  return  ChildTemplate;
})();