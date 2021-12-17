// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

//promise

// let wakeUp = (item) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (item) {
//                 resolve('8:00 = я прокидаюся')
//             } else {
//                 reject('щось не працює')
//             }
//         }, 2000)
//     })
// }
//
// let breakfast = (item) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (item) {
//                 resolve('між 8 і 8:30 я маю сніданок')
//             } else {
//                 reject('щось не працює')
//             }
//         }, 2000)
//     })
// }
// let startLessons = (item) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (item) {
//                 resolve('о 8:30 я маю пари в універі')
//             } else {
//                 reject('щось не працює')
//             }
//         }, 2000)
//     })
// }
//
// let endLessons = (item) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (item) {
//                 resolve('о 16:00 в мене закінчуються пари в універі')
//             } else {
//                 reject('щось не працює')
//             }
//         }, 2000)
//     })
// }
//
// let dinner = (item) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (item) {
//                 resolve('о 16:10 я маю обід')
//             } else {
//                 reject('щось не працює')
//             }
//         }, 2000)
//     })
// }
//
// let work = (item) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (item) {
//                 resolve('від 16:20 до 17:20 працюю')
//             } else {
//                 reject('щось не працює')
//             }
//         }, 2000)
//     })
// }
//
// let lessonEnglish = (item) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (item) {
//                 resolve('Від 17:30 до 18:30 маю урок з англійської')
//             } else {
//                 reject('щось не працює')
//             }
//         }, 2000)
//     })
// }
//
// let lessonOkten = (item) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (item) {
//                 resolve('між 18:30 до 22:00 маю курси і роблю дз по них')
//             } else {
//                 reject('щось не працює')
//             }
//         }, 2000)
//     })
// }
//
// let freeTime = (item) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (item) {
//                 resolve('від 22:00 маю вільий час')
//             } else {
//                 reject('щось не працює')
//             }
//         }, 2000)
//     })
// }
//
// let goingToBed = (item) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (item) {
//                 resolve('01:00 лягаю спати')
//             } else {
//                 reject('щось не працює')
//             }
//         }, 2000)
//     })
// }
// wakeUp(true)
//     .then(wakeUpNew => {
//         console.log(wakeUpNew)
//         return breakfast(true)
//     })
//     .then(breakfastNew => {
//         console.log(breakfastNew)
//         return startLessons(true)
//     })
//     .then(startLessonsNew => {
//         console.log(startLessonsNew)
//         return endLessons(true)
//     })
//     .then(endLessonsNew => {
//         console.log(endLessonsNew)
//         return dinner(true)
//     })
//     .then(dinnerNew => {
//         console.log(dinnerNew)
//         return work(true)
//     })
//     .then(workNew => {
//         console.log(workNew)
//         return lessonEnglish(true)
//     })
//     .then(lessonEnglishNew => {
//         console.log(lessonEnglishNew)
//         return lessonOkten(true)
//     })
//     .then(lessonOktenNew => {
//         console.log(lessonOktenNew)
//         return freeTime(true)
//     })
//     .then(freeTimeNew => {
//         console.log(freeTimeNew)
//         return goingToBed(true)
//     })
//     .then(goingToBedNew => {
//         console.log(goingToBedNew)
//     })

//callback

// let wakeUp = (item, callback) => {
//     setTimeout(() => {
//         if (item) {
//             console.log('8:00 = я прокидаюся')
//             callback()
//         } else {
//             console.log('щось не працює')
//         }
//     }, 2000)
// }
//
// let breakfast = (item, callback) => {
//     setTimeout(() => {
//         if (item) {
//             console.log('між 8 і 8:30 я маю сніданок')
//             callback()
//         } else {
//             console.log('щось не працює')
//         }
//     }, 2000)
// }
//
// let startLessons = (item, callback) => {
//     setTimeout(() => {
//         if (item) {
//             console.log('о 8:30 я маю пари в універі')
//             callback()
//         } else {
//             console.log('щось не працює')
//         }
//     }, 2000)
// }
//
// let endLessons = (item, callback) => {
//     setTimeout(() => {
//         if (item) {
//             console.log('о 16:00 в мене закінчуються пари в універі')
//             callback()
//         } else {
//             console.log('щось не працює')
//         }
//     }, 2000)
// }
//
// let dinner = (item, callback) => {
//     setTimeout(() => {
//         if (item) {
//             console.log('о 16:10 я маю обід')
//             callback()
//         } else {
//             console.log('щось не працює')
//         }
//     }, 2000)
// }
//
// let work = (item, callback) => {
//     setTimeout(() => {
//         if (item) {
//             console.log('від 16:20 до 17:20 працюю')
//             callback()
//         } else {
//             console.log('щось не працює')
//         }
//     }, 2000)
// }
//
// let lessonEnglish = (item, callback) => {
//     setTimeout(() => {
//         if (item) {
//             console.log('Від 17:30 до 18:30 маю урок з англійської')
//             callback()
//         } else {
//             console.log('щось не працює')
//         }
//     }, 2000)
// }
//
// let lessonOkten = (item, callback) => {
//     setTimeout(() => {
//         if (item) {
//             console.log('між 18:30 до 22:00 маю курси і роблю дз по них')
//             callback()
//         } else {
//             console.log('щось не працює')
//         }
//     }, 2000)
// }
//
// let freeTime = (item, callback) => {
//     setTimeout(() => {
//         if (item) {
//             console.log('від 22:00 маю вільий час')
//             callback()
//         } else {
//             console.log('щось не працює')
//         }
//     }, 2000)
// }
//
// let goingToBed = (item) => {
//     setTimeout(() => {
//         if (item) {
//             console.log('01:00 лягаю спати')
//         } else {
//             console.log('щось не працює')
//         }
//     }, 2000)
// }
// wakeUp(true, () => {
//     breakfast(true, () => {
//         startLessons(true, () => {
//             endLessons(true, () => {
//                 dinner(true, () => {
//                     work(true, () => {
//                         lessonEnglish(true, () => {
//                             lessonOkten(true, () => {
//                                 freeTime(true, () => {
//                                     goingToBed(true)
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

//async await

// let wakeUp = (item) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (item) {
//                 resolve('8:00 = я прокидаюся')
//             } else {
//                 reject('щось не працює')
//             }
//         }, 2000)
//     })
// }
//
// let breakfast = (item) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (item) {
//                 resolve('між 8 і 8:30 я маю сніданок')
//             } else {
//                 reject('щось не працює')
//             }
//         }, 5000)
//     })
// }
//
// let startLessons = (item) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (item) {
//                 resolve('о 8:30 я маю пари в універі')
//             } else {
//                 reject('щось не працює')
//             }
//         }, 2000)
//     })
// }
//
// let endLessons = (item) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (item) {
//                 resolve('о 16:00 в мене закінчуються пари в універі')
//             } else {
//                 reject('щось не працює')
//             }
//         }, 2000)
//     })
// }
//
// let dinner = (item) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (item) {
//                 resolve('о 16:10 я маю обід')
//             } else {
//                 reject('щось не працює')
//             }
//         }, 2000)
//     })
// }
//
// let work = (item) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (item) {
//                 resolve('від 16:20 до 17:20 працюю')
//             } else {
//                 reject('щось не працює')
//             }
//         }, 2000)
//     })
// }
//
// let lessonEnglish = (item) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (item) {
//                 resolve('Від 17:30 до 18:30 маю урок з англійської')
//             } else {
//                 reject('щось не працює')
//             }
//         }, 2000)
//     })
// }
//
// let lessonOkten = (item) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (item) {
//                 resolve('між 18:30 до 22:00 маю курси і роблю дз по них')
//             } else {
//                 reject('щось не працює')
//             }
//         }, 2000)
//     })
// }
//
// let freeTime = (item) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (item) {
//                 resolve('від 22:00 маю вільий час')
//             } else {
//                 reject('щось не працює')
//             }
//         }, 2000)
//     })
// }
//
// let goingToBed = (item) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (item) {
//                 resolve('01:00 лягаю спати')
//             } else {
//                 reject('щось не працює')
//             }
//         }, 2000)
//     })
// }
//
// async function days() {
//     const wakeUpNew = await wakeUp(true)
//     console.log(wakeUpNew)
//     const breakfastNew = await breakfast(true)
//     console.log(breakfastNew)
//     const startLessonsNew = await startLessons(true)
//     console.log(startLessonsNew)
//     const endLessonsNew = await endLessons(true)
//     console.log(endLessonsNew)
//     const dinnerNew = await dinner(true)
//     console.log(dinnerNew)
//     const workNew = await work(true)
//     console.log(workNew)
//     const lessonEnglishNew = await lessonEnglish(true)
//     console.log(lessonEnglishNew)
//     const lessonOktenNew = await lessonOkten(true)
//     console.log(lessonOktenNew)
//     const freeTimeNew = await freeTime(true)
//     console.log(freeTimeNew)
//     const goingToBedNew = await goingToBed(true)
//     console.log(goingToBedNew)
// }
//
// days()