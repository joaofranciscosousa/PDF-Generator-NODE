var Reader = require('./src/Reader')
var Processor = require('./src/Processor')
var Table = require('./src/Table')
var HtmlParser = require("./src/HtmlParser")
var Writer = require("./src/Writer")
var PDFWriter = require("./src/PDFWriter")

var reader = new Reader()
var writer = new Writer()

async function main(){
    var data = await reader.Read("./worksheets.csv")

    var ProcessData = Processor.Process(data)

    var users = new Table(ProcessData)

    var html = await HtmlParser.Parse(users)

    writer.Write("htmlGenerated.html", html)

    PDFWriter.WritePDF("pdfGenerated.pdf", html)
}

main()