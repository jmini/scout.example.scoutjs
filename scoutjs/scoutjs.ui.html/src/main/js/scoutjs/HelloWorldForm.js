scoutjs.HelloWorldForm = function() {
	scoutjs.HelloWorldForm.parent.call(this);
};
scout.inherits(scoutjs.HelloWorldForm, scout.Form);

scoutjs.HelloWorldForm.prototype._init = function(model) {
	scoutjs.HelloWorldForm.parent.prototype._init.call(this,  model);

	var bodyGrid = new scout.HorizontalGroupBoxBodyGrid();
	bodyGrid.validate(this.rootGroupBox.fields[0]);
};

scoutjs.HelloWorldForm.prototype._jsonModel = function() {
	return scout.models.getModel('scoutjs.HelloWorldForm');
};
