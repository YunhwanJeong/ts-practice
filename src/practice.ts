enum Role {USER, ADMIN, SUPER_ADMIN};

console.log(Role);

const yunhwan = {
    name: "yunhwan",
    age: 29,
    hobbies: ["basketball", "game"],
    role: Role[2]
};

console.log(yunhwan.role);
