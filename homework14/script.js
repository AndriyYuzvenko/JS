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
//     .catch(error=>{
//         console.log(error)
//     })

//callback

// let wakeUp = (item, callback) => {
//     setTimeout(() => {
//         if (item) {
//             callback(null, '8:00 = я прокидаюся')
//         } else {
//             callback('щось не працює', null)
//         }
//     }, 2000)
// }
//
// let breakfast = (item, callback) => {
//     setTimeout(() => {
//         if (item) {
//             callback(null, 'між 8 і 8:30 я маю сніданок')
//         } else {
//             callback('щось не працює', null)
//         }
//     }, 2000)
// }
//
// let startLessons = (item, callback) => {
//     setTimeout(() => {
//         if (item) {
//             callback(null, 'о 8:30 я маю пари в універі')
//         } else {
//             callback('щось не працює', null)
//         }
//     }, 2000)
// }
//
// let endLessons = (item, callback) => {
//     setTimeout(() => {
//         if (item) {
//             callback(null, 'о 16:00 в мене закінчуються пари в універі')
//         } else {
//             callback('щось не працює', null)
//         }
//     }, 2000)
// }
//
// let dinner = (item, callback) => {
//     setTimeout(() => {
//         if (item) {
//             callback(null, 'о 16:10 я маю обід')
//         } else {
//             callback('щось не працює', null)
//         }
//     }, 2000)
// }
//
// let work = (item, callback) => {
//     setTimeout(() => {
//         if (item) {
//             callback(null, 'від 16:20 до 17:20 працюю')
//         } else {
//             callback('щось не працює', null)
//         }
//     }, 2000)
// }
//
// let lessonEnglish = (item, callback) => {
//     setTimeout(() => {
//         if (item) {
//             callback(null, 'Від 17:30 до 18:30 маю урок з англійської')
//         } else {
//             callback('щось не працює', null)
//         }
//     }, 2000)
// }
//
// let lessonOkten = (item, callback) => {
//     setTimeout(() => {
//         if (item) {
//             callback(null, 'між 18:30 до 22:00 маю курси і роблю дз по них')
//         } else {
//             callback('щось не працює', null)
//         }
//     }, 2000)
// }
//
// let freeTime = (item, callback) => {
//     setTimeout(() => {
//         if (item) {
//             callback(null, 'від 22:00 маю вільий час')
//         } else {
//             callback('щось не працює', null)
//         }
//     }, 2000)
// }
//
// let goingToBed = (item, callback) => {
//     setTimeout(() => {
//         if (item) {
//             callback(null, '01:00 лягаю спати')
//         } else {
//             callback('щось не працює', null)
//         }
//     }, 2000)
// }
// wakeUp(true, (error, wakeUpNew) => {
//     if (error) {
//         console.error(error)
//     } else {
//         console.log(wakeUpNew)
//         breakfast(true, (error1, breakfastNew) => {
//             if (error1) {
//                 console.error(error1)
//             } else {
//                 console.log(breakfastNew)
//                 startLessons(true, (error2, startLessonsNew) => {
//                     if (error2) {
//                         console.error(error2)
//                     } else {
//                         console.log(startLessonsNew)
//                         endLessons(true, (error3, endLessonsNew) => {
//                             if (error3) {
//                                 console.error(error3)
//                             } else {
//                                 console.log(endLessonsNew)
//                                 dinner(true, (error4, dinnerNew) => {
//                                     if (error4) {
//                                         console.error(error4)
//                                     } else {
//                                         console.log(dinnerNew)
//                                         work(true, (error5, workNew) => {
//                                             if (error5) {
//                                                 console.error(error5)
//                                             } else {
//                                                 console.log(workNew)
//                                                 lessonEnglish(true, (error6, lessonsEnglishNew) => {
//                                                     if (error6) {
//                                                         console.error(error6)
//                                                     } else {
//                                                         console.log(lessonsEnglishNew)
//                                                         lessonOkten(true, (error7, lessonsOktenNew) => {
//                                                             if (error7) {
//                                                                 console.error(error7)
//                                                             } else {
//                                                                 console.log(lessonsOktenNew)
//                                                                 freeTime(true, (error8, freeTimeNew) => {
//                                                                     if (error8) {
//                                                                         console.error(error8)
//                                                                     } else {
//                                                                         console.log(freeTimeNew)
//                                                                         goingToBed(true, (error9, goingToBedNew) => {
//                                                                             if (error9) {
//                                                                                 console.error(error9)
//                                                                             } else {
//                                                                                 console.log(goingToBedNew)
//                                                                             }
//                                                                         })
//                                                                     }
//
//                                                                 })
//                                                             }
//                                                         })
//                                                     }
//                                                 })
//                                             }
//                                         })
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

// async await

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
//     try {
//         const wakeUpNew = await wakeUp(true)
//         console.log(wakeUpNew)
//         const breakfastNew = await breakfast(true)
//         console.log(breakfastNew)
//         const startLessonsNew = await startLessons(true)
//         console.log(startLessonsNew)
//         const endLessonsNew = await endLessons(true)
//         console.log(endLessonsNew)
//         const dinnerNew = await dinner(true)
//         console.log(dinnerNew)
//         const workNew = await work(true)
//         console.log(workNew)
//         const lessonEnglishNew = await lessonEnglish(true)
//         console.log(lessonEnglishNew)
//         const lessonOktenNew = await lessonOkten(true)
//         console.log(lessonOktenNew)
//         const freeTimeNew = await freeTime(true)
//         console.log(freeTimeNew)
//         const goingToBedNew = await goingToBed(true)
//         console.log(goingToBedNew)
//     } catch (error) {
//         console.error(error)
//     }
// }
//
// days()