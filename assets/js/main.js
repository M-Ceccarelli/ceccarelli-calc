jQuery(document).ready(function() { 
  
  jQuery("#fat-full").on('keyup change',function(){
    let fase1 = jQuery("#fat-full").val()*0.1;
    let fase2 = jQuery("#fat-full").val()*0.9;
    fase1 = fase1.toFixed(1);
    fase2 = fase2.toFixed(1);
    jQuery("#fat-fase-1").val(fase1);
    jQuery("#fat-fase-2").val(fase2);
  })
	
  jQuery("#stamin-full").on('keyup change',function(){
    let fase1 = jQuery("#stamin-full").val()*0.2;
    let fase2 = jQuery("#stamin-full").val()*0.8;
    fase1 = fase1.toFixed(1);
    fase2 = fase2.toFixed(1);
    jQuery("#stamin-fase-1").val(fase1);
    jQuery("#stamin-fase-2").val(fase2);
  })
  
  })
