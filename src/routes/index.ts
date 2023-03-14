import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();


/* index.ts ["ts", "ts"] los quita queda index solo */
const cleanFileName = (fileName:string) => {
    const file = fileName.split(".").shift();
    return file;
}

readdirSync(PATH_ROUTER).filter((fileName) =>{

    const cleanName = cleanFileName(fileName);

    if(cleanName !== "index"){
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(`Route loading... ${cleanName}`);
            router.use(`/${cleanName}`, moduleRouter.router)
        })
    }
});


export {router};