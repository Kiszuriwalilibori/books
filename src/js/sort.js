// const trim_custom = (string) => {
//   while (string.charCodeAt(0) <= 64 && string.length > 1) {
//     string = string.slice(1);
//   }
//   return string;
// };

// const trim_numerical = (string) => {
//   while (string.charCodeAt(0) < 48 || string.charCodeAt(0) > 57) {
//     string = string.slice(1);
//   }
//   return string;
// };

// export const sort = (table, logical, key) => {
//   try{
//     if(!Array.isArray(table)){throw new Error ('Attempt to call sort function with not an array as argument')}
//     if(!table.length){ throw new Error('Attempt to sort an empty table')}
//     if( key !== null){
//     const getType = (k) => typeof table[0][k];

//     let trim = key === 5 ? trim_numerical : trim_custom;
//     const sorts = {
//       string: (logical, key) => {
//         table.sort((a, b) => {
//           const x = trim(a[key]);
//           const y = trim(b[key]);

//           if (logical) {
//             if (x < y) {
//               return 1;
//             }
//             if (x > y) {
//               return -1;
//             }
//             return 0;
//           }
//           if (x < y) {
//             return -1;
//           }
//           if (x > y) {
//             return 1;
//           }
//           return 0;
//         });
//       },

//       number: (logical, key) => {
//         table.sort((a, b) => {
//           const x = a[key];
//           const y = b[key];

//           if (logical) {
//             if (x < y) {
//               return 1;
//             }
//             if (x > y) {
//               return -1;
//             }
//             return 0;
//           }
//           if (x < y) {
//             return -1;
//           }
//           if (x > y) {
//             return 1;
//           }
//           return 0;
//         });
//       },
//     };
    
//     sorts[getType(key)](logical, key);
//   }
//   }

// catch(err){console.log(err.name, "\n", "\n", err.message, "\n", "\n", err.stack)}
// finally{return table;}

// };
