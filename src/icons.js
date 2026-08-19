import {
  SiPython, SiCplusplus, SiJavascript, SiC, SiHtml5, SiCss,
  SiReact, SiNodedotjs, SiExpress, SiFlask, SiVite,
  SiMysql, SiMongodb, SiFirebase,
  SiScikitlearn, SiPandas, SiNumpy,
  SiGit, SiGithub, SiSap,
} from 'react-icons/si'
import { TbSql, TbApi, TbBrain, TbSparkles, TbFilter, TbCertificate } from 'react-icons/tb'
import { VscVscode } from 'react-icons/vsc'
import { FaAws } from 'react-icons/fa6'

const registry = {
  SiPython, SiCplusplus, SiJavascript, SiC, SiHtml5, SiCss,
  SiReact, SiNodedotjs, SiExpress, SiFlask, SiVite,
  SiMysql, SiMongodb, SiFirebase,
  SiScikitlearn, SiPandas, SiNumpy,
  SiGit, SiGithub, SiSap,
  TbSql, TbApi, TbBrain, TbSparkles, TbFilter, TbCertificate,
  VscVscode,
  FaAws,
}

export function getIcon(name) {
  return registry[name] || null
}
