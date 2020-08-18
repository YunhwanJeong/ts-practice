const yunhwan: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string]
} = {
    name: "yunhwan",
    age: 29,
    hobbies: ["basketball", "game"],
    role: [2, "admin"]
};

yunhwan.role.push(1); // ! Exception !
yunhwan.role[1] = 1;
yunhwan.role = [1, "superadmin"];
yunhwan.role = [1, "superadmin", 11];

let favoriteActivities: (string | number)[];
favoriteActivities = ["string", 1];

for (const hobby of yunhwan.hobbies) {
    console.log(hobby);
}

console.log(yunhwan.name);
