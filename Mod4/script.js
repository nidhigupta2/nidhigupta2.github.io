var names=new Array();
names[0]="Rahil";
names[1]="Jinay";
names[2]="Nehal";
names[3]="Jemmy";
names[4]="Jack";
names[5]="Niran";
names[6]="Sneha";
names[7]="Atul";
names[8]="John";
names[9]="Joseph";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}