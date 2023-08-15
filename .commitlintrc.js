const checkType = (header) => {
    header = `${header}`;
    const enumType = ['feat', 'fix', 'style', 'ci', 'chore', 'build', 'docs', 'test', 'merge', 'revert', 'refactor', 'reformat'];
    const realType = header.split(':')[0];
    return enumType.includes(realType);
};

const checkSubject = (header) => {
    header = `${header}`;
    const realSubject = header.split(':')[1];
    if (!realSubject) {
        return false;
    }
    return realSubject.length > 0;
};


/*
 * @Description: commit-msg提交信息格式规范
 *
 * commit-msg格式: <type>: <subject>
 *     - feat: 新增功能
 *     - fix: 修改、修复bug
 *     - style: 代码格式修改,不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
 *     - ci: 更新项目持续集成配置(ci/cd)
 *     - chore: 其他修改, 比如改变构建流程、或者增加依赖库、工具等
 *     - build: 更新项目构建配置(webpack)
 *     - docs: 文档修改
 *     - test: 新增或者修改测试用例
 *     - merge: 合并分支
 *     - revert: 回滚某个更早之前的提交
 *     - refactor: 重构代码(既没有新增功能，也没有修复bug)
 *     - perf: 优化相关，比如提升性能、体验
 */
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum-rule': [2, 'never'],
        'subject-enum-rule': [2, 'never'],
        'type-enum': [0, 'never'],
        'type-empty': [0, 'always'],
        'subject-empty': [0, 'always'],
    },
    plugins: [
        {
            rules: {
                'type-enum-rule': ({ header }) => {
                    return [
                        checkType(header),
                        `       
commit-msg 提交信息格式，需要包含提交类型，类型后面紧跟英文冒号分隔主题信息
格式: <type>: <subject>
     - feat: 新增功能
     - fix: 修改、修复bug
     - style: 代码格式修改,不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
     - ci: 更新项目持续集成配置(ci/cd)
     - chore: 其他修改, 比如改变构建流程、或者增加依赖库、工具等
     - build: 更新项目构建配置(webpack)
     - docs: 文档修改
     - test: 新增或者修改测试用例
     - merge: 合并分支
     - revert: 回滚某个更早之前的提交
     - refactor: 重构代码(既没有新增功能，也没有修复bug)
     - perf: 优化相关，比如提升性能、体验
                        `
                    ];
                },
                'subject-enum-rule': ({ header }) => {
                    return [checkSubject(header), '需要包含提交主题, 格式如: "feat: 开发新功能" 中的 开发新功能'];
                },
            },
        },
    ],
};