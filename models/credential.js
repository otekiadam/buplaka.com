define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
 
	'use strict';
   
	// Model that represents credential.
	var Credential = Backbone.Model.extend({
   
	  defaults: {
		password: null,
		key: null, // encryption-decryption key for photos
		securityQuestion: null,
		securityAnswer: null
	  },
   
	  // Validations. All properties are required!
	  validation: {
   
		password: {
		  required: true
		},
   
		key: {
		  required: true
		},
   
		securityQuestion: {
		  required: true
		},
   
		securityAnswer: {
		  required: true
		}
	  }
	});
   
	return Credential;
  });