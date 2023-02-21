# tailwindcss-fluid-typography

A tailwindcss plugin generating clamp functions directly in tailwind.

## Installation

```bash
npm i @lazy_sock/tailwindcss-fluid-typography
```

## Usage

```html
<div class="fluid-[1_3_500_1000]">Lorem Ipsum</div>
```

You have to provide four parameters: the lowest font size (in rem), the highest font-size (in rem), the vw where scaling starts (in px) and the vw where scaling ends (in px). Those parameters are seperated by a underscore ( \_ ).  
If you don't know what those parameters are, check out [this](https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/) guide about scaling font-size linearly.

## License

[MIT](https://choosealicense.com/licenses/mit/)
