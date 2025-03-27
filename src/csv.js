"use strict";

const regExpEscape = function (str) {
    return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

const toArray = function(str, sep=",") {
    const sepRegExp = regExpEscape(sep);
    const result = [];
    //const pattern = /(\,|\r?\n|\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^\,\r\n]*))/gi;
    const pattern = new RegExp("(" + sepRegExp + "|\\r?\\n|\\r|^)(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|([^" + sepRegExp + "\\r\\n]*))", "gi");

    //put end newline
    if (str[str.length - 1] !== "\n") {
        str += "\n";
    }

    //parsing data
    let row = [];
    let matches;
    while (matches = pattern.exec(str)) {
        //console.log(matches);
        //check the end of cell (newline)
        if (matches[1] !== sep && matches[1] !== "") {
        	//new line
            result.push(row);
            row = [];
        }

        //read cell
        let cell = matches[2] || matches[3];
        cell = cell.replaceAll("\"\"", "\"");
        row.push(cell);
    }
    if (result[0].length === 0) {
        result[0].push("");
    }
    return result;
};

const toString = function(arr, sep=",") {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        const row = arr[i];
        for (let j = 0; j < row.length; j++) {
            const cell = row[j];
            if (cell.includes(sep) || cell.includes("\"")) {
                str += "\"" + cell.replaceAll("\"", "\"\"") + "\"";
            } else {
                str += cell;
            }
            if (j < row.length - 1) {
                str += sep;
            }
        }
        if (i < arr.length - 1) {
            str += "\n";
        }
    }
    return str;
};

export default {
    toArray,
	toString
    
};