scoutjs.App = function() {
	this.presentation;
	this.optionsForm;
};
scout.inherits(scoutjs.App, scout.App);

scoutjs.App.prototype._createDesktop = function(parent) {
	return scout.create('Desktop', scout.models.getModel('scoutjsDesktop',
			parent));
};

scoutjs.App.prototype.onDesktopReady = function(desktop) {
	scoutjs.App.parent.prototype.onDesktopReady.call(this, desktop);
	this.desktop = desktop;
	// create Hellow world form
	var helloWorldForm = scout.create('scoutjs.HelloWorldForm', {
		parent : desktop
	});

	// add form to desktop
	desktop.bench.addView(helloWorldForm);

	// bind desktop menu actions
	desktop.getWidgetById('PresentationModeMenu').on('doAction',
			this._onPresentationModeAction.bind(this));

	desktop.getWidgetById('OptionsMenu').on('doAction',
			this._onOptionsAction.bind(this));
};

scoutjs.App.prototype._onPresentationModeAction = function(event) {
	this.showHidePresentation();
};

scoutjs.App.prototype.showHidePresentation = function() {
	var desktop = this.desktop;
	this.presentationMode = !this.presentationMode;
	desktop.navigationHandleVisible = !this.presentationMode;
	desktop.setNavigationVisible(!this.presentationMode);
};

scoutjs.App.prototype._onOptionsAction = function() {
	if (!this.optionsForm) {
		
		this.optionsForm = scout.create('scoutjs.OptionsForm', {
			parent : this.desktop,
			closeCallback : this.closeOptionsForm.bind(this)
		});
		this.desktop.bench.addView(this.optionsForm);
	}
};

scoutjs.App.prototype.closeOptionsForm = function(){
	if (this.optionsForm) {
		this.desktop.bench.removeView(this.optionsForm);
		this.optionsForm = null;
	} 
};