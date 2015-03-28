(function(){ 
  function Poem(author, img, first, second, three, four) {    
    this._img = null;
    this._author = null;
    this._first = null;
    this._second = null;
    this._three = null;
    this._four = null;
    this._author = author;
    this._img = img;
    this._first = first;
    this._second = second;
    this._three = three;
    this._four = four;
  }
  Poem.prototype.__proto__ = Object.prototype;
  __cache["tabs.Poem"] = Poem;
  Object.defineProperty(Poem.prototype, "img", {
    get : function() {
      return this._img;
    }, 
    set : function(value) {
      this._img = value;
    }
  });
  Object.defineProperty(Poem.prototype, "author", {
    get : function() {
      return this._author;
    }, 
    set : function(value) {
      if(this._author === value)
      {
        return;
      }
      this._author = value;
    }
  });
  Object.defineProperty(Poem.prototype, "first", {
    get : function() {
      return this._first;
    }, 
    set : function(value) {
      if(this._first === value)
      {
        return;
      }
      this._first = value;
    }
  });
  Object.defineProperty(Poem.prototype, "second", {
    get : function() {
      return this._second;
    }, 
    set : function(value) {
      if(this._second === value)
      {
        return;
      }
      this._second = value;
    }
  });
  Object.defineProperty(Poem.prototype, "three", {
    get : function() {
      return this._three;
    }, 
    set : function(value) {
      if(this._three === value)
      {
        return;
      }
      this._three = value;
    }
  });
  Object.defineProperty(Poem.prototype, "four", {
    get : function() {
      return this._four;
    }, 
    set : function(value) {
      if(this._four === value)
      {
        return;
      }
      this._four = value;
    }
  });
  Poem.prototype.__class = new (__lc('java.lang.Class'))("tabs.Poem", Poem, Object.prototype.__class, [], 1);
  return  Poem;
})();