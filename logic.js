function validation()
{
    //Day
    var day=document.getElementById("value_day");
    var str_day=day.value;
    var int_day=parseInt(str_day);
    //Current Day
    var currect_day=new Date().getDate();
    var this_day=parseInt(currect_day);
    //Month
    var month=document.getElementById("value_month");
    var str_month=month.value;
    var int_month=parseInt(str_month);
    //Current Month
    var currect_month=new Date().getMonth()+1;
    var this_month=parseInt(currect_month);
    //Year
    var year=document.getElementById("value_year");
    var str_year=year.value;
    var int_year=parseInt(str_year);
    //Current Year
    var currect_year=new Date().getFullYear();
    var this_year=parseInt(currect_year);

   //Validation
   //Day
    if(int_day >=1 && int_day <=31 && int_day !==29)
    {
        document.getElementById("day_error").textContent=" ";
    }
    else
    {
        document.getElementById("day_error").textContent="Wrong Input";

    }
    //Month
    if(int_month >=1 && int_month<=12)
    {
        document.getElementById("month_error").textContent=" ";

    }
    else
    {
        document.getElementById("month_error").textContent="Wrong Input";
   
    }
    //Year
    if(int_year>=1000 && int_year<=this_year)
    {
        document.getElementById("year_error").textContent=" ";

    }
    else
    {
        document.getElementById("year_error").textContent="Wrong Input";

    }

    //Output
    const my_day=parseInt(document.getElementById('value_day').value,10);
    const my_month=parseInt(document.getElementById('value_month').value,10)-1;
    const my_year=parseInt(document.getElementById('value_year').value,10);

    const birth_date=new Date(my_year,my_month,my_day);
    const current_date=new Date();

    const diff_msecods=current_date-birth_date;
    const diff_seconds=diff_msecods/1000;
    const diff_minutes=diff_seconds/60;
    const diff_hours=diff_minutes/60;
    const diff_days=diff_hours/24;

    const years=Math.floor(diff_days/365);
    const months=Math.floor((diff_days%365)/30);
    const days=Math.floor((diff_days%365)%30);

    document.getElementById("output_year").textContent=years;
    document.getElementById("output_month").textContent=months;
    document.getElementById("output_day").textContent=days;
    
    if((document.getElementById("year_error").textContent=="Wrong Input")|| (document.getElementById("month_error").textContent=="Wrong Input") || (document.getElementById("day_error").textContent=="Wrong Input"))
    {
        document.getElementById("output_year").textContent="--";
        document.getElementById("output_month").textContent="--";
        document.getElementById("output_day").textContent="--";
    }


}
