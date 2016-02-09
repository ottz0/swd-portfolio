<section id="contact" data-uk-scrollspy="{cls:'uk-animation-shake', target:'#contact-form', delay:600, repeat: true}">
    <div id="contact-wrap" class="uk-container-center">
	    <div class="header-group uk-text-center">
	       <header>
	            <h1>Contact</h1>
	            <p class="swd-white">Just fill out the form below and I'll get back <br />to you as soon as possible</p>
	            <div id="contact-strip"></div>
	       </header>        
	    <div>
	       <div id="work-form-group" class="uk-grid">
		       <div class="uk-container-center uk-width-small-7-10 uk-width-medium-1-2">
			        <form id="contact-form" action="#contact" method="POST" class="uk-form">
					    <fieldset>
					        <div class="uk-form-row">
					        	<input type="text" placeholder="Your name" for="Name" name="name" class="uk-form-large uk-width-1-1" required value="<?php echo !empty($name)?$name:''; ?>">
					        </div>
					        <div class="uk-form-row">
					        	<input type="email" placeholder="Your email" for="Email" name="email" class="uk-form-large uk-width-1-1" required placeholder="Email">
					        </div>
					        <div class="uk-form-row">
					        	<textarea for="Message" placeholder="Comments" rows="5" name="message" cols="50" class="uk-form-large uk-width-1-1"><?php echo !empty($message)?$message:''; ?></textarea>
					        </div>
					        <div class="uk-form-row">
					        	<?php if(!empty($errMsg)): ?>
                            		<div class="uk-alert uk-alert-danger uk-text-center">
                                <?php echo $errMsg; ?>
                            		</div>
                        		<?php endif; ?>
					        	<div class="g-recaptcha" data-sitekey="6LfuAxcTAAAAAAXz2In07he-2Rf4GXuwMROXe5za
"></div>
					        </div>
					        <div class="uk-form-row">
					        	<button type="submit" name="submit" class="uk-button uk-button-primary uk-button-large uk-width-1-1">Send</button>
					        </div>
					    </fieldset>
					</form>
				</div>
			</div>
	    </div>


	    </div>
	</div>
</section> 
