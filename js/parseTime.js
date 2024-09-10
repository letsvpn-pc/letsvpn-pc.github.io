function parseTime(time, cFormat) {
    if (arguments.length === 0) {
        return null;
    }

    var baseformat=cFormat||'{y}-{m}-{d} {h}:{i}:{s}';

    var basedate;
    if (typeof time === 'object') {
        basedate = time
    } else {
        if (('' + time).length === 10) time = parseInt(time) * 1000
        basedate = new Date(time)
    }
    var baseformatObj = {
        y: basedate.getFullYear(),
        m: basedate.getMonth() + 1,
        d: basedate.getDate(),
        h: basedate.getHours(),
        i: basedate.getMinutes(),
        s: basedate.getSeconds(),
        a: basedate.getDay()
    }
    var time_str = baseformat.replace(/{(y|m|d|h|i|s|a)+}/g, function(result, key) {
        var vasevalue = baseformatObj[key]
        if (key === 'a') return ['ä¸€', 'äº?', 'ä¸?', 'å›?', 'äº?', 'å…?', 'æ—?'][vasevalue - 1]
        if (result.length > 0 && vasevalue < 10) {
            vasevalue = '0' + vasevalue
        }
        return vasevalue || 0
    })
    return time_str
}