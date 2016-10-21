scoutjs.Desktop = function() {
	scoutjs.Desktop.parent.call(this);
};
scout.inherits(scoutjs.Desktop, scout.Desktop);

scoutjs.Desktop.prototype._jsonModel = function() {
	return scout.models.getModel('scoutjs.Desktop');
};

scoutjs.Desktop.prototype._init = function(model) {
	scoutjs.Desktop.parent.prototype._init.call(this, model);
	this._initDesktopHeaderMenus();

};

scoutjs.Desktop.prototype._postRender = function() {
	scoutjs.Desktop.parent.prototype._postRender.call(this);

	this.showHelloWorldForm();
};

scoutjs.Desktop.prototype.showHelloWorldForm = function() {
	// // open hello world form
	var helloWorldForm = scout.create('scoutjs.HelloWorldForm', {
		parent : this
	});

	// add form to desktop
	this.bench.addView(helloWorldForm);
};

scoutjs.Desktop.prototype._initDesktopHeaderMenus = function() {

	this.getWidgetById('PresentationModeMenu').on('doAction',
			this._onPresentationModeAction.bind(this));

	this.getWidgetById('OptionsMenu').on('doAction',
			this._onOptionsAction.bind(this));
};

scoutjs.Desktop.prototype._onPresentationModeAction = function(event) {
	this.togglePresentation();
};

scoutjs.Desktop.prototype.togglePresentation = function() {
	this.presentationMode = !this.presentationMode;
	this.navigationHandleVisible = !this.presentationMode;
	this.setNavigationVisible(!this.presentationMode);
};

scoutjs.Desktop.prototype._onOptionsAction = function() {
	if (!this.optionsForm) {

		this.optionsForm = scout.create('scoutjs.OptionsForm', {
			parent : this
		});
		this.optionsForm.one('formClosing', function() {
			this.bench.removeView(this.optionsForm);
			this.optionsForm = null;
		}.bind(this));
		this.bench.addView(this.optionsForm);
	}
};