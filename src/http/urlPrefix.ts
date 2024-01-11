import { IurlConfig,TgroupType} from '@/utils/types'
const mode = import.meta.env.MODE;
const urlConfig:IurlConfig = {
  // 前缀-{dev:'',pro:''}
}

const getPrefix = (key:TgroupType)=>{
  if(key === undefined){
    key = ''
    urlConfig[key][mode]
  }
  return urlConfig[key][mode]
}

export default getPrefix;
