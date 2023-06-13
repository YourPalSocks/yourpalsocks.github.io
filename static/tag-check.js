// COLOR VARS
dnd = "#d60000";
tech = "#0d00ff";
games = "#107C10";
coc = "#338855";
new_t = "#636363";
art = "#C06C84";

tags = document.getElementsByClassName("badge");
for(var i = 0; i < tags.length; i++)
    {
    switch(tags[i].id)
    {
        case "dnd":
            tags[i].textContent = "D&D";
            tags[i].style.backgroundColor = dnd;
            break;

        case "tech":
            tags[i].textContent = "Tech";
            tags[i].style.backgroundColor = tech;
            break;

        case "games":
            tags[i].textContent = "Games"
            tags[i].style.backgroundColor = games;
            break;
            
        case "coc":
            tags[i].textContent = "C.o.C.";
            tags[i].style.backgroundColor = coc;
            break;

        case "art":
            tags[i].textContent = "Art";
            tags[i].style.backgroundColor = art;
            break;

        case "new":
            tags[i].textContent = "NEW";
            tags[i].style.backgroundColor = new_t;
            break;
    }
}
