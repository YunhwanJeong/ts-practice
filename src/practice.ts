const yunhwan = {
    name: "yunhwan",
    age: 29,
    hobbies: ["basketball", "game"]
};

let favoriteActivities: (string | number)[];
favoriteActivities = ["string", 1, true];

for (const hobby of yunhwan.hobbies) {
    console.log(hobby);
}

console.log(yunhwan.name);
