// 导入axios
import axios from 'axios'

// 配置的axios
// baseURL 作用：配置基准地址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'

// 导出配置好的axios（挂载到main）
export default axios
