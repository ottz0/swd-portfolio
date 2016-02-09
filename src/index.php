<?php include_once('sendmail/mail.php') ?>
<!DOCTYPE html>
<html>
    <head>
        <title>Steven Watson Designs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="assets/img/favicon.ico" type="image/x-icon">
        <!-- build:css assets/css/swd-main.min.css -->
        <link rel="stylesheet" href="assets/css/swd-main.css" />
        <!-- /build -->
        <link href='https://fonts.googleapis.com/css?family=Lato:400,700,400italic,900,900italic,700italic' rel='stylesheet' type='text/css'>
    </head>
    <body>
    <!-- Preloader -->
    <div id="preloader">
        <div id="status">&nbsp;</div>
    </div>
 
    <!-- Nav -->
    <?php include 'includes/nav.php';?> 

    <!-- Main -->
    <?php include 'includes/main.php';?>

    <!-- Work -->
    <?php include 'includes/work.php';?>

    <!-- Skills-tools -->
    <?php include 'includes/skills-tools.php';?>

    <!-- Contact -->
    <?php include 'includes/contact.php';?>

    <!-- Footer -->
    <?php include 'includes/footer.php';?>
   
    </body>
    <!-- build:js assets/js/swd-main.min.js -->
       <script src="assets/libs/jquery/dist/jquery.min.js"></script>
        <script src="assets/libs/uikit/js/uikit.js"></script>
        <script src="assets/js/swd-main.min.js"></script>
        <script src="assets/libs/uikit/js/components/sticky.min.js"></script>
        <script src="assets/libs/uikit/js/components/tooltip.min.js"></script>
        <script src="assets/libs/Chart.js/Chart.js"></script>
    <!-- /build -->
    
    <!-- Preloader -->
    <script type="text/javascript">
        //<![CDATA[
            $(window).load(function() { // makes sure the whole site is loaded
                $('#status').fadeOut(); // will first fade out the loading animation
                $('#preloader').delay(1350).fadeOut('slow'); // will fade out the white DIV that covers the website.
                $('body').delay(1350).css({'overflow':'visible'});
            })
        //]]>
    </script>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-73358799-1', 'auto');
      ga('send', 'pageview');

    </script>
</html>