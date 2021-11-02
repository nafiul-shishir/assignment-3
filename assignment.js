
//Github Repo:- 

// problem-1 kilometer to meter

function kilometerToMeter(kilometer)
{
    var meter = kilometer * 1000;
    return meter;
}

console.log(kilometerToMeter(197)); 


//problem-2 budget calculator


function budgetCalculator(watch,phone,laptop)
{
    var totalprice = watch*50+phone*100+laptop*500;
    return totalprice;
}

console.log(budgetCalculator(4,2,1));

//problem-3 hotelcost

function hotelCost(day){
    var rent = 0;
    if(day<=10)
    {
         rent = day*100;
        

    }

    else if( day<=20){
        var first10Days = 10*100;
        var remainDays = day - 10;
        var discountDays = remainDays * (100-20);
        rent = first10Days + discountDays;
    }

    else{
        var fitst10Days = 10*100;
        var seconDays = 10*(100-20);
        var remain = day - 20;
        var lastDays = remain * 50;
        rent = lastDays + seconDays + fitst10Days ;
    }

    return rent;
}

console.log(hotelCost(22));

//problem-4 megafriend

function megaFriend(arra)
  {
    var boro = arra[0].length;
    var res = arra[0];
    for (var i = 1; i < arra.length; i++) {
        var element = arra[i].length;
        if (element > boro) {
            res = arra[i];
            boro = element;
        }
    }
    return res;
}
console.log(megaFriend(["Halim", "Josim", "kolimullah","Nasimuddin","Korimuddinshah","Nafiul"]));