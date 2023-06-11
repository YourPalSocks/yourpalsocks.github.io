// COLOR VARS
dnd = "#d60000";
tech = "#0d00ff";
games = "#107C10";
coc = "#338855";

tags = document.getElementsByClassName("badge");
for(var i = 0; i < tags.length; i++)
{
    if(tags[i].id == "dnd")
    {
        tags[i].textContent = "D&D";
        tags[i].style.backgroundColor = dnd;
    }
    else if(tags[i].id == "tech")
    {
        tags[i].textContent = "TECH";
        tags[i].style.backgroundColor = tech;
    }
    else if(tags[i].id == "games")
    {
        tags[i].textContent = "GAMES"
        tags[i].style.backgroundColor = games;
    }
    else if(tags[i].id == "coc")
    {
        tags[i].textContent = "C.o.C.";
        tags[i].style.backgroundColor = coc;
    }
}