
const LoadCSV = function(str) {
    const result = [];
    const pattern = /(\,|\r?\n|\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^\,\r\n]*))/gi;

    //put end newline
    if (str[str.length - 1] !== "\n") {
        str += "\n";
    }

    //parsing data
    let row = [];
    while (matches = pattern.exec(str)) {
        //console.log(matches);
        //check the end of cell (newline)
        if (matches[1] !== "," && matches[1] !== "") {
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

export default {
	LoadCSV
};