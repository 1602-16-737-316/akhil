function duplicate()
{
    var outputarr=[];
    var index;
    var i;
    var arr=[];
    var length=prompt("give length of array:");
    for(i=0;i<length;i++)
        arr[i]=prompt("enter input:");
    for(i=0;i<length;i++)
        document.writeln("\t"+arr[i]);
    document.write("<br>");
    for(i=0;i<length;i++)
        {
            for(var j=i+1;j<length;j++)
                {
                    if(arr[i]==arr[j])
                        {
                            for(var k=j;k<length;k++)
                                {
                                    arr[k]=arr[k+1];
                                }
                            length--;
                            j--;
                        }
                }
        }
    for(i=0;i<length;i++)
        document.writeln("\t"+arr[i]);
    
}