var variables = {
    "body-background": {
        "day": "#E5DFD3",
        "night": "#1A202C"
    },
    "text-darkest": {
        "day": "#555",
        "night": "#EEE"
    },
    "text-darker": {
        "day": "#555",
        "night": "#AAA"
    },
    "link-visited": {
        "day": "#6191c1",
        "night": "#466B6C"
    }
};
/*
* false == Night Theme
* true == Day Theme
*/
var THEME_STATUS = false;

function changeTheme () {
    for (const key in Object.keys(variables)) {
        let obj = variables[key];
        console.log("Changing variable \"--" + key + "\".");
        document.style.setProperty("--" + key, obj[ THEME_STATUS ? "day" : "night" ]);
    };
};

function toggleTheme () {
    THEME_STATUS = !THEME_STATUS;

    changeTheme();    
}