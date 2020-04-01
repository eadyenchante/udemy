"use strict";
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// }= {
//   name: "eady",
//   age: 40,
//   hobbies: ['sports', 'cooking'],
//   role: [2, 'author']
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: "eady",
    age: 40,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};
// person.role.push('admin');
// person.role[0] =10;
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
}
if (person.role !== Role.AUTHOR) {
    console.log('is read only');
}
//# sourceMappingURL=obsArraysEnums.js.map