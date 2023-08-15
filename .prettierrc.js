/**
 * always 强制
 * never 不检查
 */
module.exports = {
    // 不使用缩进符，而使用空格
    useTabs: false,
    // 是否在代码语句结尾添加分号
    semi: true,
    // 'all':尽可能在结尾处加上尾逗号
    trailingComma: 'es5',
    // 使用 4 个空格缩进
    tabWidth: 4,
    // js css 是否使用单引号，不包含JSX
    singleQuote: false,
    // 是否在JSX中使用单引号
    jsxSingleQuote: true,
    // 代码行的宽度，通用建议每行最大长度建议为100/120，但最好不超过这两个数
    printWidth: 120,
    // 'preserve':使用默认的折行标准
    proseWrap: 'never',
    // 大括号内的首尾需要空格
    bracketSpacing: true,
    // 箭头函数，只有一个参数的时候，也需要括号
    arrowParens: 'always',
    // 设置换行风格，避免不同操作系统造成的大量代码diff
    // lf / crlf / cr / auto
    endOfLine: 'lf',
    // 对象的 key 仅在必要时用引号
    quoteProps: 'as-needed',
    // jsx 标签的反尖括号需要换行
    jsxBracketSameLine: false,
    // 是否格式化一些文件中被嵌入的代码片段的风格，如果插件可以识别。
    // off / auto
    embeddedLanguageFormatting: 'off',
    // 为 HTML，Vue，Angular 和 Suppherbars 指定全局空白的灵敏度
    // “css” - 尊重 CSS display属性的默认值
    // “strict” - 所有空格都被认为是重要的
    // “ignore” - 所有空格都被认为是微不足道的
    htmlWhitespaceSensitivity: 'ignore',
    "properties": "always", // （默认）为属性名称强制执行 小驼峰 样式
    // 每个文件格式化的范围是文件的全部内容
    rangeStart: 0,
    rangeEnd: Infinity,
    // 不需要写文件开头的 @prettier
    requirePragma: false,
    // 不需要自动在文件开头插入 @prettier
    insertPragma: false,
};