const fs = require("fs")


fs.createReadStream("./assets/image-crop-out-1516906539582.png")
    .pipe(fs.createWriteStream("./assets/image-crop-out-1516906539582-stream.png"))
    .on("finish", ()=> console.log("imagem escrita com sucesso!"))