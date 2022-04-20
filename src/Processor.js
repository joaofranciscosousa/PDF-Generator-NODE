class Processor{
    static Process(data){
        var a = data.split("\r\n")
        var rows = []

        a.forEach(row => {
            var array = row.split(",")
            rows.push(array)
        });
        
        return rows
    }
}

module.exports = Processor;