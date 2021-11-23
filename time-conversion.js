function timeConversion(s) {
    if (s.charAt(8) === 'P') {
        let h = Number(s.slice(0,2))
        if (h === 12) {
            return `${h}${s.slice(2,8)}`
        } else {
            return `${h+12}${s.slice(2,8)}`     
        }
    } else {
        let h = Number(s.slice(0,2));
        if (h === 12) {
            return `00${s.slice(2,8)}`
        } else {
            return `${s.slice(0,8)}`
        }
    }
}
