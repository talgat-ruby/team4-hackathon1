<script>
	import IconThankYou from './img/icon-thank-you.svg';
	
	let showComponent = false;
	window.setTimeout(() => {
		showComponent = true;
	}, 0);
</script>
	<div>
		<article class:show={showComponent}>
			<img src={IconThankYou} alt="Thank You" />
			<h3>Thank you!</h3>
			<p>
				Thanks for confirming your subscription! We hope you have fun using our platform. If you
				ever need support, please feel free to email us at support@loremgaming.com.
			</p>
		</article>
	</div>

<style>
	

	article {
		display: flex;
		flex-direction: column;
		align-items: center;
		transition: 0.3s;
		position: relative;
		right: -10rem;
		opacity: 0;
	}

	.show {
		opacity: 1;
		right: 0;
	}

	img {
		width: 56px;
		height: 56px;
		margin-top: 47px;
		margin-bottom: 24px;
	}

	h3 {
		font-family: 'Ubuntu';
		font-weight: 700;
		font-size: 24px;
		line-height: 28px;
		text-align: center;
		color: #022959;
		margin-bottom: 9px;
	}

	p {
        max-width: 450px;
		font-family: 'Ubuntu';
		font-weight: 400;
		font-size: 16px;
		line-height: 25px;
		text-align: center;
		color: #9699aa;
		margin-bottom: 47px;
	}

	@media screen and (min-width: 1440px) {
		

		img {
			width: 80px;
			height: 80px;
			margin-bottom: 32px;
			margin-top: 125px;
		}

		h3 {
			font-size: 32px;
			line-height: 37px;
			margin-bottom: 14px;
		}
	}
</style>
