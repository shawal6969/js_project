//converting feet to mile
function feetToMile(input) {

    if (input > 0) {
        var mile = 0.000189394;
        var result = input * mile;
        result = result.toFixed(2);
        return result;
    } else {
        return "sorry input is wrong";
    } 
}

//console.log(feetToMile(10000) + " mile");




//wood calculator
function woodCalculator(chair, table, bed) {

    if (chair > 0 && table > 0 && bed > 0) {
        var woodForChair = 1;
        var woodForTable = 3;
        var woodForBed = 5;
    
        var resultOfChair = chair * woodForChair;
        var resultOfTable = table * woodForTable;
        var resultOfBed = bed * woodForBed;
    
        var result = resultOfChair + resultOfTable + resultOfBed + " cubic foot wood total";
        // return 
        return result;
    } else {
        return "sorry wrong input"
    } 
}
//console.log(woodCalculator(10,2,1) );




//brick calculator
function brickCalculator(num) {
    var startingValue = 1000 * 15 * 10 
    // first 10 floor 15 feet high. each floor needs 1000 brick
       
    var secondStartingValue = 1000 * 12 * 10 
    //next 11 to 20th floor 12 feet high. each floor needs 1000 bricks

    if (num > 0 && num <= 10){
      var result = 1000 * 15 * num;
      return result
    }
    else if (num > 10 && num <= 20){
      var extraFloorBeyondTen = num - 10;
      extraFloorBeyondTen = extraFloorBeyondTen * 12 * 1000;
      var result =  startingValue + extraFloorBeyondTen; 
      return result;
    }
    else if(num > 20){
      var extraFloorBeyondTwenty = num - 20;
      extraFloorBeyondTwenty = extraFloorBeyondTwenty * 10 * 1000 
      // floor more than 20 = height = 10, each feet contains 1000 bricks
      var result = startingValue + secondStartingValue + extraFloorBeyondTwenty;
      return result;
    } else {
      return "sorry wrong input"
    }
}
//console.log(brickCalculator(30));




//tiny friend
function tinyFriend(friendsName) {

    if (friendsName.length !== 0) {
        var short = friendsName[0];

        for (var i = 0; i < friendsName.length; i++){
        var element = friendsName[i];
        if (element.length < short.length){
                short = element
            }
        }
        return short + " is our tiny friend."; 
    } else {
        return "empty array sorry!!";
    }


}
//var friendsName = tinyFriend(["shawal", "nusrat", "rajin", "fariha", "nusu", "zahran", "toha", "mim"]);
//var friendsName = tinyFriend([]);
//console.log(friendsName);

