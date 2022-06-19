const fs = require('fs');
const { exit } = require('process');

const readline = require('readline-sync');

var newEvent = {};
var timeline = "";

const input_timelineName = readline.question(`Which timeline does this new event belong to? `);
if (fs.existsSync(`./src/pages/timeline/${input_timelineName}/${input_timelineName}.json`)) {
    timeline = input_timelineName;
} else {
    console.error(`No timeline named as [${input_timelineName}]! Exit.`);
    exit();
}

const input_start = readline.question(`When did this event start? [${(new Date().toISOString().split("T")[0])}] `);
if (input_start === "") {
    newEvent["start"] = new Date().toISOString().split("T")[0];
} else {
    newEvent["start"] = (new Date(input_start)).toISOString().split("T")[0];
}

const input_end = readline.question(`When did this event end? [Empty] `);
if (input_end != "") {
    newEvent["end"] = (new Date(input_end)).toISOString().split("T")[0];
}

const data = fs.readFileSync(`./src/pages/timeline/${input_timelineName}/${input_timelineName}.json`);
const timeline_json = JSON.parse(data);
const existing_groups = timeline_json["groups"].map(el => el["id"]);

while (true) {
    console.log("Existing groups: "+existing_groups);
    const input_group_id = readline.question(`Which group does this new event belong to? `);
    if (existing_groups.includes(input_group_id)) {
        newEvent["group"] = input_group_id;
        break;
    } else {
        console.error(`No existing group id as [${input_group_id}]. Try again!`);
    }
}

const input_title = readline.question(`What is the title of this event? `);
newEvent["title"] = input_title;

const input_des = readline.question(`Desription: `);
newEvent["desription"] = input_des;

newEvent["links"] = []
while(true) {
    console.log("Current Links: " + JSON.stringify(newEvent["links"]));
    const input_link = readline.question(`Any more link? [Empty to skip] `);
    if (input_link === "") {
        break;
    } else {
        newEvent["links"].push(input_link);
    }
}

const colors = ["red", "blue", "green"]
while(true) {
    const input_color = readline.question("What is the color of this event? ");
    if (colors.includes(input_color)) {
        newEvent["color"] = input_color;
        break;
    } else {
        console.log(`Input [${input_color}] is not a valid color. Try again!`);
    }
}

timeline_json["events"].push(newEvent);
fs.writeFileSync(`./src/pages/timeline/${input_timelineName}/${input_timelineName}.json`, JSON.stringify(timeline_json, null, '\t'), (err) => {
    if (err) {
        throw err;
    }

    console.log("New event saved.");
});