var sr = false;
var city;
function tree(lit)
	{
		var el;
		var i = 1;
			while (el = document.getElementById(lit + i))
				{
					if (el.style.display == 'block') el.style.display = 'none';
					else el.style.display = 'block';
					i++;
				}
			
			//if (sr == false && city != lit || sr == true && city != lit)
			//{
			//	sortUnorderedList(lit);
			//	sr = true;
			//	city = lit;
			//}
			
}

		
function rdp(ip)	
	{
		var WshShell = new ActiveXObject("WScript.Shell");
		var rdpexe = "C:\\Windows\\system32\\mstsc.exe";
		var oExec = WshShell.Exec(rdpexe + " /v:" + ip);
	} 

	
function sortUnorderedList(ul, sortDescending) {
    if(typeof ul == "string")
        ul = document.getElementById(ul);
    // Получаем ячейки списка в массив
    var lis = ul.getElementsByTagName("a");
    var vals = [];
    for(var i = 0, l = lis.length; i < l; i++)
	{
        vals.push(lis[i].innerHTML);
	}
	// Сортируем их
	vals.sort(sortByTextFn);
    //vals.sort(function (a, b){return a-b});
	//vals.sort(sortText);
    // Если в обрятном порядке, то оборачиваем
    if(sortDescending)
	{
        vals.reverse();
    }
	// Меняем содержимое элементов списка
    for(i = 0, l = lis.length; i < l; i++)
	{
        lis[i].innerHTML = vals[i];
	}	
}


function sortByTextFn(a, b) {
    var textA = getText(a),
        textB = getText(b);

    if (textA === textB) {
        return 0;
    }

    if (textA < textB) {
        return -1;
    }

    return 1;
}
	
	
function funcSort(lit)
{
    var ul  = document.getElementById(lit);
    var num = ul.childNodes.length;

    for(var i = num-1; i > 0; i--)
    {
       for(var j = 0 ; j < i ; j++)
        {
            if( ul.childNodes[j].innerHTML > ul.childNodes[j+1].innerHTML ) 
			{
                ul.childNodes[j].swapNode(ul.childNodes[j+1]);
            }
        }
    }
}

function mySort (lit)
{
	var list = document.getElementById(lit);
	var myList = list.getElementsByTagName("a");
	var a = [];
	for (var i = 0; i < myList.length; i++) 
	{
		a[i] = myList[i].innerHTML;
	}
a.sort();

for (var i = 0; i < myList.length; i++) 
	{
		myList[i].innerHTML = a[i];
	}
}	
