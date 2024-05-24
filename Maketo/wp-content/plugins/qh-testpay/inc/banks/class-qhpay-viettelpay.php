<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * 
 *
 * @author   qhpay Team
 * @since    
 *
 */

require_once('class-qhpay-base.php');
class WC_Gateway_QHPay_Viettelpay extends WC_Base_QHPay {
	public function __construct() {
		$this->bank_id 			  = 'viettelpay';
		$this->bank_name		  = "ViettelPay";

		// $this->icon               = apply_filters( 'woocommerce_payleo_icon', plugins_url('../assets/agribank.png', __FILE__ ) );
		$this->has_fields         = false;
		$this->method_title       = sprintf(__('Payment via %s', 'qh-testpay'), $this->bank_name);
		$this->method_description = __('Payment by bank transfer', 'qh-testpay');
		$this->title        = sprintf(__('Payment via %s', 'qh-testpay'), $this->bank_name);
		parent::__construct();
	}
	public function configure_payment()
	{
		$this->method_title       = sprintf(__('Payment via %s', 'qh-testpay'), $this->bank_name);
		$this->method_description = __('Make payment by bank transfer.', 'qh-testpay');
	}
}