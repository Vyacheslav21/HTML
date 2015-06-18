function init() {
	try {
		checkState();
		System.Gadget.onUndock = checkState; 
		System.Gadget.onDock = checkState; 	
	
	} catch (err){}
}	


function checkState() 
{
    if (System.Gadget.docked) 
    { 
       dockedState();
    } 
    else
    {
       undockedState();
    }
}


function undockedState()
{
	var w = "220px";
	var h = "400px";
    with (document.body.style) {
        width = w;
        height = h;
    }
	
//	GetSize ("8pt"); 

    //imgBackground.style.width = w;
   // imgBackground.style.height = h;
   // imgBackground.src = "url(image/background_dock.png)";   
    //imgBackground.src = "image/background.png";  
}

function dockedState()
{
	var w = "155px";
	var h = "145px";
    with (document.body.style){
        width = w;
        height = h;
    }

	//GetSize ("6pt"); 
	
//	var p = document.getElementsByTagName('a');
//	p.style.fontSize = "4pt"
	
//	with(document.getElementsByName('a'))
//	{
//		fontSize  = '4pt';
//	}
//	 
   // imgBackground.style.width = w;
   // imgBackground.style.height = h;
   // imgBackground.src = "url(image/background_dock.png)";   
   // imgBackground.src = "image/background_dock.png";  
   
}

 function GetSize (s) {
            var fonts = document.getElementsByTagName ("a");

            for (var i = 0; i < fonts.length; i++) {
                fonts[i].style.fontSize=s;
            }

		
		}
	
	