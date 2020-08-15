'use strict';
'require view';
'require form';

return view.extend({
	render: function() {
		var m, s, o;

		m = new form.Map('yggdrasil', 'Yggdrasil');

		s = m.section(form.TypedSection, 'yggdrasil', _('Meshname settings'));
		s.anonymous = true;

		s.option(form.Flag, "Meshname_Enable", _("Enable or disable the DNS server"));
		s.option(form.Value, "Meshname_Listen", _("Listen address for the DNS server"));

		o = m.section(form.TableSection, "meshname_config", _("Meshname Config"), _("DNS zone configuration"));
		o.option(form.Value, "subdomain", _("Subdomain"));
		o.option(form.Value, "record", _("DNS record"));
		o.anonymous = true;
		o.addremove = true;

		return m.render();
	}
});

