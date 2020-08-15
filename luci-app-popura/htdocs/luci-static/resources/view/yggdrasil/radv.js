'use strict';
'require view';
'require form';

return view.extend({
	render: function() {
		var m, s, o;

		m = new form.Map('yggdrasil', 'Yggdrasil');

		s = m.section(form.TypedSection, 'yggdrasil', _('Router advertisement settings'));
		s.anonymous = true;

		s.option(form.Flag, "RAdv_Enable", _("Enable or disable Router Advertisement"));
		s.option(form.Value, "RAdv_Interface", _("Send router advertisement for this network interface"));
		s.option(form.Flag, "RAdv_SetGatewayIP", _("Set IP address on the Interface automatically"));
		s.option(form.Flag, "RAdv_DefaultRouter", _("Advertise a default router (a fix for Android)"));

		return m.render();
	}
});
