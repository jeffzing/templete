module.exports = {
    extends: [
        'stylelint-config-standard', // 配置stylelint拓展插件
        "stylelint-config-recess-order", // 配置stylelint css属性书写顺序插件,
        'stylelint-config-rational-order',
        'stylelint-config-prettier', // 配置stylelint和prettier兼容
    ],
    plugins: [
        'stylelint-order',
        'stylelint-declaration-block-no-ignored-properties',
        'stylelint-less', // 配置stylelint less拓展插件
        'stylelint-prettier'
    ],
    rules: {
        'plugin/declaration-block-no-ignored-properties': true,
        'comment-empty-line-before': null,
        'declaration-empty-line-before': null,
        'function-name-case': 'lower',
        'no-descending-specificity': null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
        "function-url-quotes": "always", // 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"
        "string-quotes": "double", // 指定字符串使用单引号或双引号
        "unit-case": null, // 指定单位的大小写 "lower(全小写)"|"upper(全大写)"
        "color-hex-case": "lower", // 指定 16 进制颜色的大小写 "lower(全小写)"|"upper(全大写)"
        "color-hex-length": "long", // 指定 16 进制颜色的简写或扩写 "short(16进制简写)"|"long(16进制扩写)"
        'no-invalid-double-slash-comments': null,
        'block-no-empty': null,
        'value-keyword-case': null,
        'rule-empty-line-before': ['always', { except: ['after-single-line-comment', 'first-nested'] }], // 要求或禁止在规则之前的空行 "always(规则之前必须始终有一个空行)"|"never(规则前绝不能有空行)"|"always-multi-line(多行规则之前必须始终有一个空行)"|"never-multi-line(多行规则之前绝不能有空行。)"
        "font-family-no-missing-generic-family-keyword": null, // 禁止在字体族名称列表中缺少通用字体族关键字
        "block-opening-brace-space-before": "always", // 要求在块的开大括号之前必须有一个空格或不能有空白符 "always(大括号前必须始终有一个空格)"|"never(左大括号之前绝不能有空格)"|"always-single-line(在单行块中的左大括号之前必须始终有一个空格)"|"never-single-line(在单行块中的左大括号之前绝不能有空格)"|"always-multi-line(在多行块中，左大括号之前必须始终有一个空格)"|"never-multi-line(多行块中的左大括号之前绝不能有空格)"
        "property-no-unknown": null, // 禁止未知的属性(true 为不允许)
        "property-no-unknown": [
            true,
            {
                ignoreProperties: ["box-flex"], // 忽略某些未知属性的检测
            },
        ],
        "selector-pseudo-element-no-unknown": [
            true,
            {
                ignorePseudoElements: ["ng-deep", "input-placeholder"], // 忽略ng-deep这种合法的伪元素选择器报警
            },
        ],
        "declaration-colon-newline-after": null, //一个属性过长的话可以写成多行
        "media-feature-name-no-unknown": null, // 关闭禁止未知的媒体功能名
        "no-empty-source": null, // 禁止空源码
        "declaration-block-trailing-semicolon": null, // 要求或不允许在声明块中使用尾随分号 string："always(必须始终有一个尾随分号)"|"never(不得有尾随分号)"
        'at-rule-no-unknown': true,
        'property-no-vendor-prefix': null, // 保留各大浏览器不兼容的样式属性名前缀， 如 -moz-user-select: auto
        "value-no-vendor-prefix": null, // 保留各大浏览器不兼容的样式属性值前缀，display: -webkit-box;
        'selector-no-vendor-prefix': null, // 保留各大浏览器不兼容的选择器前缀,如input::-webkit-input-placeholder
        "color-function-notation": "legacy", // 屏蔽background-color: rgba(0, 0, 0, 0.5);这种写法引起的警告
        "alpha-value-notation": "number", // 屏蔽background-color: rgba(0, 0, 0, 0.5);中0.5引起的警告
        'number-max-precision': 10, // css属性值中小数点之后数字的最大位数
        indentation: 4, // 指定缩进空格
        'at-rule-no-vendor-prefix': null, // 动画名称前,可以加浏览器前缀  如@-webkit-keyframes bounce
        // 动画名称命名规则
        // html不区分大小写，推荐 kebab-case（短横线）风格命名
        // todo：现阶段仅提示，后续强制为 kebab-case 风格命名
        'keyframes-name-pattern': [
            '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
            {
                message: 'Expected keyframe name to be kebab-case',
                severity: 'warning',
            },
        ],
        // 类名选择器命名规则
        'selector-class-pattern': [
            '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
            {
                message: 'Expected class selector to be kebab-case',
                severity: 'warning',
            },
        ],
        // id选择器命名规则
        'selector-id-pattern': [
            '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
            {
                message: 'Expected id selector to be kebab-case',
                severity: 'warning',
            },
        ],
        "selector-pseudo-class-no-unknown": [
            true,
            {
                ignorePseudoClasses: ["global", "v-deep", "deep"]
            }
        ],
        'no-duplicate-selectors': null, // css 文件 选择器不允许重复写
        // 如果是小程序允许rpx
        // 'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
        // 'selector-type-no-unknown': [true, { ignoreTypes: ['page'] }],

        // "prettier/prettier": ["error", {"singleQuote": true, "parser": "flow"}] 这里的配置会覆盖.prettierrc.js的配置
        // "prettier/prettier": ["error", {}, {
        //		"usePrettierrc": true
        //	}] // 开启这个配置，可以指定使用.prettierrc.js配置，不会和其他配置冲突
    },
    ignoreFiles: ['node_modules/**/*', './public/**/*'],
    customSyntax: 'postcss-less'
    // overrides: [
    //     {
    //         files: ['./src/**/*.less'],
    //         customSyntax: 'postcss-less',
    //     },
    // ],
};