import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from 'remark-html';

//process.cwd指全部目錄, posts為目的地
const postDirectory = path.join(process.cwd(),"posts");

//從posts檔案中的md抽出資料
export function getPostsData() {
    // fs 為將postDirectory資料轉為 object
    const fileNames =  fs.readdirSync(postDirectory);
    const allPostsData = fileNames.map((fileName) => {
        //閱讀md中的object項目名稱
        const id = fileName.replace(/\.md$/, ""); //file name(id)
        //取出項目名稱作為Browser Path 路由
        const fullPath = path.join(postDirectory, fileName);
        //取出文本
        const fullContent = fs.readFileSync(fullPath, "utf8");
        //解析其Matter資料,要安裝matter插件
        const matterResult = matter(fullContent);

        //return 資料
        return {
            id,
            ...matterResult.data,
        }
    });

    return allPostsData;
}

//getStaticPath 使用 return 來取得 path
export function getAllPostIds() {
    const fileNames =  fs.readdirSync(postDirectory);
    return fileNames.map((fileName) => {
        return {
            params : {
                id: fileName.replace(/\.md$/, ""),
            }
        }
    })
}

// 以id為基礎取得文本所有數值
export async function getPostData(id) {
    //說明看getPostData函式
    const fullPath = path.join(postDirectory, `${id}.md`);
    const fullContent = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fullContent);

    //使用外部插件(remark, remark-html)令到文本格式可以正常在html讀取
    const blogContent = await remark().use(html).process(matterResult.content);
    //將文未格式轉做 String
    const blogContentHTML = blogContent.toString();

    return {
        id,
        blogContentHTML,
        ...matterResult.data,
    }
}