const { DateTime } = require("luxon");

function getBeatTime(iso_time_string, useAtSymbol = true, showDecimals= true, addDate = false){
    time = DateTime.fromISO(iso_time_string);
/* so the way swatch time works is that it's beholden to the timezone in Biel, Switzerland
this is because Swatch is a swiss company
sadly, we cannot expect the user to pass in an iso string that is in CET already
because also it Isnt Actually Fucking CET
CET observes daylight savings because (incoherent rambling)
so we must ensure that the string is ACTUALLY in UTC+1
thank you Luxon for making this easy
*/
    time = time.setZone("UTC+1");
/* 
lets do this for realsies now
the way this works is we take in the seperate time values.
*/
    hour = time.hour;
    min = time.minute;
    sec = time.second;
    ms = time.millisecond;
/*
found some code online from a webforum from 2023 that is styled like the 90s
thank you melonland.net user Melooon
im basically stealing it
~anyways~
we convert the time entirely to milliseconds
*/
    timeInMS = ((hour * 60 + min) * 60 + sec) * 1000 + ms;
/*
then we divide by 86400
why? because thats how many ms are in a beat
this system allows us to do centibeats which i wanted
*/
    if(showDecimals){
        beat_time = Math.abs(timeInMS/86400).toFixed(2);
    } else {
        beat_time = Math.floor(Math.abs(timeInMS/86400));
    }
/*
badda bing badda boom there's ya time
but uhh this isn't technically the right output
theres an @ at the beginning of any time in BIT
and uh yeah theres no real standard name for this. sorry
so this is the code to check for that
is it nessecary? nah
do i want it? yea
*/
    if(useAtSymbol){
        output = "@" + beat_time;
    } else {
        output = beat_time
    }

// crap i forgor people might want a date from this. uhhh
    if(addDate){
        output = time.toISODate() + "@" + output;
    }

    return output;
}
