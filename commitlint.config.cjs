/*
 * @Description: 
 * @Author: Lizhiliang
 * @Date: 2024-01-11 18:18:45
 * @LastEditTime: 2024-01-11 18:31:50
 * @LastEditors: lizhiliang
 * @Usage: 
 */
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat', // 迭代功能
                'conf', // 修改构建配置
                'fix', // 修复bug
                'refactor', // 代码重构
                'optimize', // 代码优化
                'style', // 仅修改样式文件
                'docs', // 文档补充说明
                'test', // 测试用例修改
                'revert', // 代码回滚
                'chore', // 其他修改, 比如改变构建流程、或者增加依赖库、工具等
                'build', // 编译相关的修改，例如发布版本、对项目构建或者依赖的改动
            ],
        ],
        'header-max-length': [0, 'always', 72], //限制最长72
    },
};
