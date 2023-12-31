/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-07-30 09:20:16
 * @LastEditors: yang 17368465776@163.com
 * @LastEditTime: 2023-07-30 10:08:30
 * @FilePath: /mini-vue-reactive/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as path from 'path'
import { defineConfig } from "vite";

export default defineConfig({
    server: {
        port: 8080
    },
    optimizeDeps: { exclude: ["fsevents"] },
    resolve: {
        alias:  {
            '@' : path.resolve(__dirname, 'src')
        }
    }
})