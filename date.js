module.exports(__dirname+"")
function getdate()
{
    var today=new Date();
    var option={
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    return today.toLocaleDateString("en-us",option);
}