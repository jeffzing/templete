module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['plugin:react/recommended', 'standard-with-typescript', 'prettier'],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            impliedStrict: true,
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: 'tsconfig.json',
    },
    plugins: ['react', 'prettier'],
    /**
     * off或者0 => 关闭规则
     * warn或者1 => 开启规则，警告（不影响代码执行）
     * error或者2 => 开启规则，报错（代码不能执行，界面报错）
     */
    rules: {
        // @fixable 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
        'eqeqeq': [
            'error',
            'always',
            {
                null: 'ignore'
            }
        ],
        semi: [2, 'always'],
        // 引号风格，使用单引号，需要转义时忽略，反斜号忽略
        // quotes: [
        //     2,
        //     'single',
        //     {
        //         avoidEscape: true,
        //         allowTemplateLiterals: true,
        //     },
        // ],
        '@typescript-eslint/strict-boolean-expressions': 0,
        '@typescript-eslint/prefer-optional-chain': 0,
        '@typescript-eslint/restrict-template-expressions': [
            2,
            {
                allowNumber: true,
                allowBoolean: true,
                allowAny: true,
                allowNullish: true,
                allowRegExp: true,
            },
        ],
        '@typescript-eslint/semi': [2, 'always'],
        '@typescript-eslint/no-useless-constructor': 2,
        '@typescript-eslint/no-empty-function': 1, // 禁止空函数
        '@typescript-eslint/no-var-requires': 0, // 不允许在 import 语句中使用 require 语句
        '@typescript-eslint/explicit-function-return-type': 0, // 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明
        '@typescript-eslint/explicit-module-boundary-types': 0, // 要求导出函数和类的公共类方法的显式返回和参数类型
        '@typescript-eslint/no-explicit-any': 0, // 禁止使用 any 类型
        '@typescript-eslint/no-use-before-define': 2,
        '@typescript-eslint/no-unused-vars': 1, // 禁止定义未使用的变量
        '@typescript-eslint/naming-convention': [
            2,
            {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE', 'snake_case', 'PascalCase'],
                leadingUnderscore: 'forbid',
                filter: {
                    // 忽略部分无法控制的命名
                    regex: '^(__html|zh_CN|en_US)$',
                    match: false,
                },
            },
            {
                selector: 'property',
                format: ['camelCase', 'UPPER_CASE', 'snake_case', 'PascalCase'],
                leadingUnderscore: 'forbid',
                filter: {
                    // 忽略部分无法控制的命名
                    regex: '^(__html|zh_CN|en_US)$',
                    match: false,
                },
            },
            {
                selector: 'class',
                format: ['PascalCase'],
                leadingUnderscore: 'forbid',
            },
            {
                selector: 'interface',
                format: ['PascalCase'],
                leadingUnderscore: 'forbid',
            },
            {
                selector: 'parameter',
                format: ['camelCase', 'UPPER_CASE', 'snake_case'],
                leadingUnderscore: 'allow',
                filter: {
                    regex: '^(Child|WrappedComponent)$',
                    match: false,
                },
            },
            {
                selector: 'memberLike',
                format: ['PascalCase', 'camelCase', 'snake_case'],
                leadingUnderscore: 'forbid',
                filter: {
                    // 忽略部分无法控制的命名
                    regex: '^(__html|zh_TW|zh_CN|en_US|_ga|SignUp_.*|Crm_.*|UNSAFE_.*)$',
                    match: false,
                },
            },
            {
                selector: 'typeLike',
                format: ['PascalCase', 'camelCase', 'snake_case'],
                leadingUnderscore: 'forbid',
            },
        ],
        // 类和接口的命名必须遵守帕斯卡命名法，比如 PersianCat
        // '@typescript-eslint/class-name-casing': 2,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/ban-types': [ // 禁止使用特定类型
            2,
            {
                extendDefaults: true,
                types: {
                    '{}': false,
                    Function: false,
                },
            },
        ],

        'n/no-callback-literal': 0,

        'linebreak-style': [2, 'unix'],
        'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
        'no-plusplus': 0,
        'no-console': 1,
        'no-debugger': 2,
        'no-fallthrough': [
            2,
            {
                commentPattern: 'fallthrough',
            },
        ],
        'no-const-assign': 2, //禁止修改const声明的变量
        'no-unused-vars': 1,
        'class-methods-use-this': 0,
        camelcase: 0,
        'global-require': 0,
        'no-use-before-define': 0,
        'no-restricted-syntax': 0,
        'no-continue': 0,
        'consistent-return': 0,
        'prefer-const': [
            2,
            {
                destructuring: 'all',
            },
        ],
        "key-spacing": [0, { "beforeColon": false, "afterColon": true }], // 对象字面量中冒号的前后空格
        "object-curly-spacing": [0, "never"], // 大括号内是否允许不必要的空格
        "generator-star-spacing": 0, // 生成器函数*的前后空格
        "comma-spacing": 0, // 逗号前后的空格
        "array-bracket-spacing": [2, "never"], // 是否允许非空数组里面有多余的空格
        "no-trailing-spaces": 1, // 一行结束后面不要有空格
        'no-multiple-empty-lines': 1, // 删除多余的空行
        "no-spaced-func": 2, // 函数调用时 函数名与()之间不能有空格
        "no-regex-spaces": 2, // 禁止在正则表达式字面量中使用多个空格 /foo bar/
        "no-multi-spaces": 1, // 不能用多余的空格
        "no-mixed-spaces-and-tabs": [2, false], // 禁止混用tab和空格
        // 'no-irregular-whitespac': 2, // 不能有不规则的空格
        // 'require-render-return': 2, // 确保在 render 方法中存在返回值
        // 自闭合的标签前要加一个空格
        'no-multi-spaces': 1,
        'react/jsx-tag-spacing': 1,
        'react/self-closing-comp': 2, // 没有子元素的标签请自闭合
        'react/jsx-closing-bracket-location': 1, // 如果组件包含多行属性，在新的一行闭合标签
        'react/no-array-index-key': 0, // 避免使用数组的索引作为 key 属性值, 建议使用稳定的ID
        'react/jsx-boolean-value': 1, // 当属性值为true时可以省略
        'react/jsx-curly-spacing': 1, // 不要在 JSX 的花括号里边加空格
        'react/jsx-closing-bracket-location': 1, // 对齐：遵循以下JSX语法的对齐风格
        'react/no-multi-comp': 2, // 每个文件只包含一个 React 类组件，但是多个函数式组件可以放到一个文件中
        'react/jsx-pascal-case': 2, // 引用命名：React 组件使用 大驼峰，组件实例使用 小驼峰
        'react/jsx-filename-extension': [2, { extensions: ['.tsx', 'ts', '.jsx', 'js'] }],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-one-expression-per-line': 0,
        'react/destructuring-assignment': 0,
        'react/state-in-constructor': 0,
        'react/require-default-props': 0,
        'react/jsx-props-no-spreading': 0,
        'react/prop-types': 0,
        'jsx-quotes': [2, 'prefer-single'],
    },
};