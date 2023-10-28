# Installation Open.AI di React

1. Untuk melakukan instalasi Open.AI di React, kita perlu menginstall library Open.AI terlebih dahulu dengan cara `npm install openai`

2. Kemudian kita dapat melakukan konfigurasi dengan cara membuat file `openai.js` pada folder `src` dan menuliskan kode berikut:

```js
import OpenAI from "openai";

export const openai = new OpenAI({
 apiKey: YOUR_API_KEY,
 dangerouslyAllowBrowser: true, // untuk mengizinkan penggunaan API Key di browser
});
```

3. Setelah itu, kita dapat melakukan request sederghana ke API Open.AI dengan cara menuliskan kode berikut:

```js
import { openai } from "./openai";

const request = async () => {
 const result = await openai.chat.completions.create({
  prompt: "This is a test",
  model: "gpt-3.5-turbo",
 });
 console.log(result);
};
```

4. Perlu diingat bahwa untuk Trial, kita akan diberikan credit sebesar $5. Sehingga, kita perlu memperhatikan penggunaan credit kita. Untuk melihat credit yang kita miliki dan membatasi token yang digunakan, kita dapat menambahkan parameter `maxTokens` pada request kita. Contoh:

```js
const request = async () => {
 const result = await openai.chat.completions.create({
  prompt: "This is a test",
  model: "gpt-3.5-turbo",
  maxTokens: 5,
 });
 console.log(result);
};
```
