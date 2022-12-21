// 콜백헬 예제

const 아반떼 = (callback) => {
    setTimeout(() => {
        console.log("아반떼")
        callback()
    }, 1000)
}

const 소나타 = (callback) => {
    setTimeout(() => {
        console.log("소나타 GO")
        callback()
    }, 2000)
}

const 제네시스 = (callback) => {
    setTimeout(() => {
        console.log("제네시스 Go")
        callback()
    }, 3000)
}

아반떼(() => {
    아반떼(() => {
        제네시스(() => {
            소나타(() => {
                아반떼(() => {
                    소나타(() => {
                        console.log('end')
                    })
                })
            })
        })
    })
})


// 아반떼(() => {
//     소나타(() => {
//         제네시스(() => { })
//     })
// })

// 아반떼(() => {
//     소나타(() => {
//         아반떼(() => {
//             console.log("end")
//         })
//     })
// })