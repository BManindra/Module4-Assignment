var names=new Array();

names[0]="Manindra";
names[1]="Siva";
names[2]="Pavan";
names[3]="Naveen";
names[4]="Jayendra";
names[5]="Rajesh";
names[6]="Naresh";
names[7]="Rehman";
names[8]="jaya Prakash";
names[9]="Teja";

for(var i=0;i<names.length;i++)
{
    if(names[i].charAt(0)==="J"||names[i].charAt(0)==="j")
    {
        console.log("GoodBye "+names[i]);
    }
    else
    {
        console.log("Hello "+names[i]);
    }
}
