massachusetts.validator = massachusetts.validator || function () {

	function init() {

		variantValidator();

	}

	function variantValidator(){

		if ($('.product-variant-selecter').length > 0) {

			$('.putinbasket').click(function() {

          		if( $('.product-variant-selecter option:selected').is(':disabled')){

          			alert('Du skal lige vælge variant ;-)');

          			return false;

          		}			});

		}

		if ($('#single-stock-amount').length > 0) {

			$('.putinbasket').click(function() {

				if( $('#amount-input').val() > $('#single-stock-amount').val()){

					alert('Vi har desværre ikke så mange på lager af denne vare');

					return false;

          		}

			});

		}

	}


	return {
		init:init
	};

}();