
let cardValidator = (function(e) {
	function r(t) {
		if (a[t]) return a[t].exports;
		let n = (a[t] = { i: t, l: !1, exports: {} });
		return e[t].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
	}
	let a = {};
	return (
		(r.m = e),
		(r.c = a),
		(r.d = function(e, a, t) {
			r.o(e, a) || Object.defineProperty(e, a, { configurable: !1, enumerable: !0, get: t });
		}),
		(r.n = function(e) {
			let a =
				e && e.__esModule
					? function() {
							return e.default;
						}
					: function() {
							return e;
						};
			return r.d(a, 'a', a), a;
		}),
		(r.o = function(e, r) {
			return Object.prototype.hasOwnProperty.call(e, r);
		}),
		(r.p = '/assets'),
		r((r.s = 4))
	);
})([
	function(e, r, a) {
		'use strict';
		function t(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function n(e) {
			let r = e.split('').reverse(),
				a = [],
				t = [];
			r.forEach(function(e, r) {
				(r + 1) % 2 != 0 ? a.push(e) : t.push(e);
			});
			let n = a.reduce(function(e, r) {
					return parseInt(e) + parseInt(r);
				}),
				i = t
					.map(function(e) {
						let r = 2 * e;
						if (r > 9) {
							let a = r.toString().split('');
							return parseInt(a[0]) + parseInt(a[1]);
						}
						return r;
					})
					.reduce(function(e, r) {
						return parseInt(e) + parseInt(r);
					}),
				d = (n + i).toString();
			if ('0' === d.charAt(d.length - 1)) return !0;
		}
		Object.defineProperty(r, '__esModule', { value: !0 }),
			(r.validateCard = r.predictCard = r.defaults = r.init = void 0);
		let i = a(1),
			d = t(i),
			s = a(2),
			u = t(s),
			o = a(3),
			c = {
				querySelectors: { logo: '#card-logo', label: '#card-label', cardNumber: '#card_number' },
				errorMessage: 'Tarjeta invalida'
			},
			m = function() {
				let e = document.querySelector(c.querySelectors.logo),
					r = document.querySelector(c.querySelectors.cardNumber);
				r &&
					e &&
					r.addEventListener('input', function() {
						let a = this.getAttribute('mask-pattern');
						a && (this.value = (0, o.mask)(this.value, a));
						let t = l(this);
						t ? g(e, t) : g(e, 'unknown'), p(r) ? f(r, !0) : f(r, !1);
					});
			},
			l = function(e) {
				let r = '',
					a = (0, o.trimAllSpaces)(e.value);
				if (!a) return !1;
				for (let t in d.default)
					if (d.default.hasOwnProperty(t) && d.default[t].predict.test(a)) {
						e.setAttribute('mask-pattern', d.default[t].maskPattern);
						let n = d.default[t].maskPattern.length;
						(0, o.setMaxlength)(e, n), (r = t);
						break;
					}
				return r;
			},
			g = function(e) {
				let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'unknown';
				(e.classList = ''), 'unknown' === r ? e.classList.add('unkown') : e.classList.add(r);
			},
			p = function(e) {
				let r = (0, o.trimAllSpaces)(e.value);
				if (!u.default.CardNumber.test(r)) return !1;
				for (let a in d.default) if (d.default[a].regex.test(r)) return !!n(r) && a;
			},
			f = function(e, r) {
				e &&
					(r
						? (e.classList.remove('error'), e.classList.add('validcard'))
						: (e.classList.add('error'), e.classList.remove('validcard')));
			};
		(r.init = m), (r.defaults = c), (r.predictCard = l), (r.validateCard = p);
	},
	function(e, r, a) {
		'use strict';
		function t(e, r, a) {
			return (
				r in e
					? Object.defineProperty(e, r, { value: a, enumerable: !0, configurable: !0, writable: !0 })
					: (e[r] = a),
				e
			);
		}
		Object.defineProperty(r, '__esModule', { value: !0 });
		let n,
			i = ((n = {
				visa: {
					id: 1,
					name: 'Visa',
					regex: /^4(?:[0-9]{11}|[0-9]{14})[0-9]$/,
					predict: /^4[0-9]*$/,
					maxLength: 16,
					maskPattern: '9999 9999 9999 9999'
				},
				visadebito: {
					id: 31,
					name: 'Visa Debito',
					regex: /^4(?:[0-9]{11}|[0-9]{14})[0-9]$/,
					predict: /^4[0-9]*$/,
					maxLength: 16,
					maskPattern: '9999 9999 9999 9999'
				},
				mastercard: {
					id: 15,
					name: 'Mastercard',
					regex: /^5[1-5][0-9]{14}$/,
					predict: /^5[1-5][0-9]*$/,
					maxLength: 16,
					maskPattern: '9999 9999 9999 9999'
				},
				masterdebit: {
					id: 66,
					name: 'Master Debit',
					regex: /^5[1-5][0-9]{14}$/,
					predict: /^5[1-5][0-9]*$/,
					maxLength: 16,
					maskPattern: '9999 9999 9999 9999'
				},
				amex: {
					id: 6,
					name: 'American Express',
					regex: /^3[47][0-9]{13}$/,
					predict: /^3[47][0-9]*$/,
					maxLength: 15,
					maskPattern: '9999 999999 99999'
				},
				amexmt: {
					id: 65,
					name: 'American Express',
					regex: /^3[47][0-9]{13}$/,
					predict: /^3[47][0-9]*$/,
					maxLength: 15,
					maskPattern: '9999 999999 99999'
				},
				diners: {
					id: 8,
					name: 'Diners Club',
					regex: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
					predict: /^3(?:0[0-5]|[68][0-9])[0-9]*/,
					maxLength: 14,
					maskPattern: '9999 9999 9999 9999'
				},
				discover: {
					id: 82,
					name: 'Discover',
					regex: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
					predict: /^6(?:011|5[0-9]{2})[0-9]*/,
					maxLength: 16,
					maskPattern: '9999 9999 9999 9999'
				},
			
			}),
			
			n);
		r.default = i;
	},
	function(e, r, a) {
		'use strict';
		Object.defineProperty(r, '__esModule', { value: !0 });
		let t = {
			CardHolderName: /^[\u00f1a-z\xD1A-Z ]+$/,
			CardHolderMail: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
			CardNumber: /^([0-9]{8,19})$/,
			CardExpirationDate: /^(0[1-9]|1[012])\d{2}$/,
			CardSecurityCode: /^([0-9]{3,4})$/,
			CardHolderIdentification: /^([0-9]{1,})$/,
			CardHolderIdentificationType: /^[1-9]$/,
			CardHolderAddressNumber: /^([0-9]{1,})$/,
			CardHolderDateOfBirth: /^(0[1-9]|[1-2][0-9]|31(?!(?:0[2469]|11))|30(?!02))(0[1-9]|1[0-2])([12]\d{3})$/,
			CardExpirationMonth: /^(0?[1-9]|1[012])$/,
			CardExpirationYear: /^([0-9]{2,4})$/,
			CardHolderBirthDay: /^(0?[1-9]|[12]\d|3[01])$/,
			CardHolderBirthMonth: /^(0?[1-9]|1[012])$/,
			CardHolderBirthYear: /^\d{4}$/,
			CardHolderAddressStreet: /.+/
		};
		r.default = t;
	},
	function(e, r, a) {
		'use strict';
		function t(e) {
			if (Array.isArray(e)) {
				for (let r = 0, a = Array(e.length); r < e.length; r++) a[r] = e[r];
				return a;
			}
			return Array.from(e);
		}
		Object.defineProperty(r, '__esModule', { value: !0 });
		let n = function(e) {
				return e.replace(/\s/g, '').trim();
			},
			i = function(e, r) {
				e.setAttribute('maxlength', r);
			},
			d = function(e, r) {
				let a = [].concat(t(r)),
					n = [].concat(t(e.replace(/\s/g, ''))),
					i = [];
				return (
					a.forEach(function(e, r) {
						0 !== n.length && (' ' !== e && i.push(n.shift()), ' ' === e && i.push(' '));
					}),
					i.join('')
				);
			};
		(r.trimAllSpaces = n), (r.mask = d), (r.setMaxlength = i);
	},
	function(e, r, a) {
		'use strict';
		let t = a(0),
			n = (function(e) {
				if (e && e.__esModule) return e;
				let r = {};
				if (null != e) for (let a in e) Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
				return (r.default = e), r;
			})(t);
		(n.defaults.querySelectors.cardNumber = '#card'), (n.defaults.querySelectors.logo = '#logo'), n.init();
	}
]);
