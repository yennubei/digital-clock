document.addEventListener('DOMContentLoaded', function(){

    function digitalClock(){
        var date = new Date();
        var hours = date.getHours() + '';
        var minutes = date.getMinutes() + '';
        var seconds = date.getSeconds();
        var day = date.getDay();
        var my_Days = [
                       'Sunday',
                       'Monday',
                       'Tuesday', 
                       'Wednesday',
                       'Thursday',
                       'Friday',
                       'Saturday',
                    ];
        
        if (hours.length < 2) {
            hours_+= '0';
        }
        if (minutes.length < 2) {
            minutes += '0';
        }
        if (seconds < 2) {
            seconds += '0';
        }

        var clock = /*my_Days[day] +':'+*/ hours +':'+ minutes +':'+ seconds;
        var my_day = my_Days[day];
        document.getElementById('today').innerHTML = my_day;
        document.getElementById('my_time').innerHTML = clock;
    }
    digitalClock();
    setInterval(digitalClock, 1000);

});