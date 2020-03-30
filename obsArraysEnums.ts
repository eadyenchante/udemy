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

enum Role {ADMIN = 5, READ_ONLY, AUTHOR};

const person = {
  name: "eady",
  age: 40,
  hobbies: ['sports', 'cooking'],
  role: Role.ADMIN
};

// person.role.push('admin');
// person.role[0] =10;

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleUpperCase());
}

if (person.role !== Role.AUTHOR) {
    console.log('is read only');
}
