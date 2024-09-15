### `jyf-color-picker`

#### 概览
`jyf-color-picker` 是一个用纯JavaScript编写的颜色选择器，它不依赖于任何UI框架，因此可以在任何项目中轻松集成。它支持多种平台，无论是在Vue还是React项目中，都能完美运行。

#### 特点
- **跨平台兼容性**：适用于各种平台，无论是桌面还是移动设备。
- **无需UI框架**：完全独立于任何UI框架，保持了代码的简洁性。
- **易于使用**：简洁的API设计，使得集成和使用变得非常简单。
- **美观大方**：提供现代化的UI设计，提升用户体验。
- **色彩工具集成**：使用 `jyf-color-crafter` 工具，提供强大的色彩处理能力。

#### 安装
要开始使用 `jyf-color-picker`，你可以通过npm来安装它：
```bash
npm install
```

#### 构建
在安装完成后，你可以构建项目以生成生产环境的文件：
```bash
npm build
```

#### 使用方法
##### 示例
你可以在 `/example/index.html` 中找到一个简单的示例，展示如何使用 `jyf-color-picker`。

##### UMD
如果你不想通过npm安装，可以直接在HTML文件中引入UMD版本的脚本：
```html
<script type="text/javascript" src="dist/jyf-color-picker.min.js"></script>
<script type="text/javascript">
    var Picker = new JyfColorPicker(element, options);
</script>
```

#### 配置选项
`jyf-color-picker` 提供了一系列的配置选项，允许你自定义颜色选择器的行为和外观。这些选项包括但不限于：

- `color`: 初始选中的颜色。
- `format`: 颜色格式，如 `hex`, `rgb`, `hsl` 等。
- `onChange`: 颜色改变时的回调函数。

#### 贡献
我们欢迎任何形式的贡献，无论是代码、文档还是建议。如果你有兴趣参与到 `jyf-color-picker` 的开发中来

#### 许可证
`jyf-color-picker` 是在 [MIT许可证](https://github.com/juyufeng/jyf-color-picker/LICENSE) 下发布的，这意味着你可以自由地使用、修改和分发它，只需保留原作者的版权声明和许可证声明。

以上就是对 `jyf-color-picker` 的详细介绍和使用方法。如果你有任何疑问或需要进一步的帮助，请随时联系我们。