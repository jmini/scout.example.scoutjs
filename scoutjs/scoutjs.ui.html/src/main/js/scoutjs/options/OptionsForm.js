scoutjs.OptionsForm = function() {
	scoutjs.OptionsForm.parent.call(this);
};
scout.inherits(scoutjs.OptionsForm, scout.Form);

scoutjs.OptionsForm.prototype._init = function(model) {
	scoutjs.OptionsForm.parent.prototype._init.call(this, model);

	var bodyGrid = new scout.HorizontalGroupBoxBodyGrid();
	bodyGrid.validate(this.rootGroupBox.fields[0]);

	// menu listeners
	this.saveMenu = this.getWidgetById('SaveMenu');
	this.cancelMenu = this.getWidgetById('CancelMenu');

	this.saveMenu.on('doAction', this._onSaveAction.bind(this));
	this.cancelMenu.on('doAction', this._onCancelAction.bind(this));

	this.getWidgetById('options.label').setValue('some options here');
};

scoutjs.OptionsForm.prototype._jsonModel = function() {
	return scout.models.getModel('scoutjs.OptionsForm');
};

scoutjs.OptionsForm.prototype._onSaveAction = function() {
	// some save code
	this.close();
};

scoutjs.OptionsForm.prototype._onCancelAction = function() {
	this.close();
};
