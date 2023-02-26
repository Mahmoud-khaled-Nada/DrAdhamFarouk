const GeneralNada = { 
    isElInViewPort (el) {
    let rect = el.getBoundingClientRect()
    return (
        (rect.top <= 0 && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
},
nada(number) {
let n = 10;
return n +=number
}
}


export default GeneralNada