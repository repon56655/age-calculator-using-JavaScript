

var date=new Date();
var _toyear=date.getFullYear();
var _tomonth=date.getMonth()+1;
var _todate=date.getDate();
document.getElementById('toyear').value=_toyear;
document.getElementById('tomonth').value=_tomonth;
document.getElementById('todate').value=_todate;

function calculation(){
    var _byear=parseInt(document.getElementById("byear").value);
    var _bmonth=parseInt(document.getElementById("bmonth").value);
    var _bdate=parseInt(document.getElementById("bdate").value);

    var caldate=0;
    
    if(_tomonth==1){
        caldate=31;
    }
    else if(_tomonth == 2){
        if(_toyear % 4 == 0 && _toyear %100 ==0 && _toyear %400 == 0){
            caldate=29;
        }
        else{
            caldate=28;
        }
        
    }
    else if(_tomonth == 3){
        caldate=31;
    }
    else if(_tomonth == 4){
        caldate=30;
    }
    else if(_tomonth == 5){
        caldate=31;
    }
    else if(_tomonth == 6){
        caldate=30;
    }
    else if(_tomonth == 7){
        caldate=31;
    }
    else if(_tomonth == 8){
        caldate=31;
    }
    else if(_tomonth == 9){
        caldate=30;
    }
    else if(_tomonth == 10){
        caldate=31;
    }
    else if(_tomonth == 11){
        caldate=30;
    }
    else if(_tomonth == 12){
        caldate=31;
    }










    if(_todate < _bdate){

        _todate=((_todate+caldate)-_bdate);
        _tomonth = ((_tomonth-1));

        if(_tomonth < _bmonth){
            _tomonth=((_tomonth+12)-_bmonth);
            _toyear=((_toyear-1)-_byear);
        }
        else{
            _tomonth=_tomonth-_bmonth;
            _toyear=_toyear-_byear;
        }
        document.getElementById("cyear").value=_toyear;
        document.getElementById("cmonth").value=_tomonth;
        document.getElementById("cdate").value=_todate;


    }
    else if(_tomonth < _bmonth)
    {
        _todate=_todate-_bdate;
        _tomonth=((_tomonth+12)-_bmonth);
        _toyear=((_toyear-1)-_byear);

        document.getElementById("cyear").value=_toyear;
        document.getElementById("cmonth").value=_tomonth;
        document.getElementById("cdate").value=_todate;
    }
    else{
        _todate=_todate-_bdate;
        _tomonth=_tomonth-_bmonth;
        _toyear=_toyear-_byear;

        document.getElementById("cyear").value=_toyear;
        document.getElementById("cmonth").value=_tomonth;
        document.getElementById("cdate").value=_todate;
    }


}
function clear_inputs(){
    inputs=document.getElementsByClassName('inputs')
    for(input of inputs){
    	input.value=' ' 
    }
  }

