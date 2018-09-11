// IE Array.include polyfill
if (!Array.prototype.includes) {
	Array.prototype.includes = function(cmp)  {
		for (let i=0; i<this.length; i++) {
      if (this[i] === cmp) {
        return true;
      }
    }
    return false;
	};
}
