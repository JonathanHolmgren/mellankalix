/* import fs from "fs/promises";

export async function renderTemplate(res, template) {
    try {
      const templateBuf = await fs.readFile(template);
      const headerBuf = await fs.readFile("./templates/header.html");
      const navBuf = await fs.readFile("./templates/nav.html");
      const footerBuf = await fs.readFile("./templates/footer.html");
    
      let htmlText = templateBuf.toString();
    
      if (htmlText.includes("%header%")) {
        htmlText = htmlText.replace("%header%", headerBuf.toString());
      } else if (htmlText.includes("%nav%")) {
        htmlText = htmlText.replace("%nav%", navBuf.toString());
      } else if (htmlText.includes("%footer%")) {
        htmlText = htmlText.replace("%footer%", footerBuf.toString());
      }
    
      res.type("html");
      res.send(htmlText);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error rendering template");
    }
  }


/*export  async function renderTemplate(res, template) {
    const templateBuf = await fs.readFile(template);
    const headerBuf = await fs.readFile("./templates/header.html");
    const navBuf = await fs.readFile("./templates/nav.html");
    const footerBuf = await fs.readFile("./templates/footer.html");
  
    const placeholders = ["%header%", "%nav%", "%footer%"];
    let htmlText = templateBuf.toString();
  
    placeholders.forEach((placeholder) => {
      if (placeholder === "%header%") {
        htmlText = htmlText.replace(placeholder, headerBuf.toString());
      } else if (placeholder === "%nav%") {
        htmlText = htmlText.replace(placeholder, navBuf.toString());
      } else if (placeholder === "%footer%") {
        htmlText = htmlText.replace(placeholder, footerBuf.toString());
      }
    });
  
    res.type("html");
    res.send(htmlText);
  }*/