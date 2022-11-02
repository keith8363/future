import vue from "@vitejs/plugin-vue"
import { defineConfig, loadEnv } from "vite"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from "path"
import path from 'path'

const pathResolve = (dir: string): any => {
	return resolve(__dirname, dir)
}

const alias: Record<string, string> = {
	"@": pathResolve("src"),
	"components": pathResolve("src/components"),
	"#": pathResolve("src/types"),
}

/**
 * @command 在 Vite 的 API 中，在开发环境下 command 的值为 serve，而在生产环境下为 build
 * @mode 模式 --- 根据运行模式加载文件(dev/serve或者build)
 */
export default defineConfig(({ command, mode }) => {
	// 默认情况下只加载.env文件中前缀为_vite的环境变量,调用loadEnv修改为调用全部环境变量
	const root = process.cwd()
	const env = loadEnv(mode, root)
	return {
		open: true, // 是否自动在浏览器打开
		root, // 项目根路径(index.html文件所在的位置)
		base: "/", // 公共基础路径
		// mode: "development", // 默认"development"用于开发,"production"用于构建
		define: {
			__APP_ENV__: env.APP_ENV,
		},
		plugins: [
			vue(),
      createSvgIconsPlugin({
         // 指定需要缓存的图标文件夹
         iconDirs: [path.resolve(process.cwd(), 'src/icons')],
         // 指定symbolId格式
         symbolId: 'icon-[dir]-[name]',
      }),
      // 自动导入vue相关api
			AutoImport({
        imports:[
          'vue',
          'vue-router',
          'pinia'
        ],
				resolvers: [ElementPlusResolver()], // 自动导入element组件及Icon
        dts: 'src/auto-import.d.ts',
			}),
			Components({
        dirs: ['src/components/'], // 自动导入自定义组件
        extensions: ['vue'], // 自动导入组建的文件类型
				resolvers: [ElementPlusResolver()], // 自动解析element组件及Icon
        dts: true, // 生成dts文件
        deep:true // 遍历子目录
			})
     
		],
		resolve: { alias },
		// 开发时服务器配置选项
		server: {
			// https: false,
			host: true, // 监听所有IP地址
			port: 6275, // 端口
			open: true, // 在开发服务器启动时自动在浏览器中打开应用程序
			proxy: {
				"/api": {
					target: env.VUE_APP_BASE_API,
					ws: true, // 是否代理websockets
					changeOrigin: true, // 是否跨域
					rewrite: (path) => path.replace(/^\/api/, ""),
				},
			},
		},
		// 构建打包时配置选项
		build: {
			target: "modules", // 浏览器兼容目标
			outDir: "dist", // 指定输出路径（相对于 项目根目录)
			assetsDir: "assets", // 静态资源得存放路径文件名
			sourcemap: false, // 构建后是否生成 source map 文件
			chunkSizeWarningLimit: 1500, // 规定触发警告的 chunk(文件块) 大小
			minify: "terser", // 混淆器，terser构建后文件体积更小
			reportCompressedSize: true, // 启用gzip压缩大小报告(禁用时可提高构建大型项目的性能)
			rollupOptions: {
				// 自定义底层的 Rollup 打包配置
				output: {
					entryFileNames: `assets/[name].${new Date().getTime()}.js`,
					chunkFileNames: `assets/[name].${new Date().getTime()}.js`,
					assetFileNames: `assets/[name].${new Date().getTime()}.[ext]`,
					compact: true,
					manualChunks: {
						vue: ["vue", "vue-router", "pinia"],
						echarts: ["echarts"],
					},
				},
			},
			//生产环境自动删除console
			terserOptions: {
				compress: {
					drop_console: true, // 自动去除console
					drop_debugger: true, // 清除 debugger 语句
				},
				ie8: true, // 是否支持ie8
				output: { comments: true }, // 删除注释
			},

			css: {
				preprocessorOptions: {
					less: {
						javascriptEnabled: true,
						modifyVars: {
							"primary-color": "#1890ff", // 全局主色
							"link-color": " #1890ff", // 链接色
							"success-color": " #52c41a", // 成功色
							"warning-color": " #faad14", // 警告色
							"error-color": " #f5222d", // 错误色
							"font-size-base": " 14px", // 主字号
							"heading-color": " rgba(0, 0, 0, 0.85)", // 标题色
							"text-color": " rgba(0, 0, 0, 0.65)", // 主文本色
							"text-color-secondary": " rgba(0, 0, 0, 0.45)", // 次文本色
							"disabled-color": " rgba(0, 0, 0, 0.25)", // 失效色
							"border-radius-base": " 2px", // 组件/浮层圆角
							"border-color-base": " #d9d9d9", // 边框色
							"box-shadow-base": " 0 2px 8px rgba(0, 0, 0, 0.15)", // 浮层阴影
						},
					},
				},
			},
		},
	}
})
