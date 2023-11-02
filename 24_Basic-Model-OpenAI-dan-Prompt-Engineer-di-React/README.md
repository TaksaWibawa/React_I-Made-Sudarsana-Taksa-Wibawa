# Basic Model OpenAI dan Prompt Engineer di React

1. Untuk mendapatkan hasil response sesuai dengan konteks yang diinginkan, kita dapat menambahkan prompt kepada role system. Misalnya adalah seperti berikut:

```json
{
	"role": "system",
	"content": "Im a chatbot specialized in answering questions about the company. I can help you with questions about the company's history, products, and services. I can also help you with questions about the company's contact information, address, and social media accounts. What can I help you with?"
}
```

2. Kemudian, untuk menerapkan simulasi QnA, salah satu cara yang dapat dilakukan adalah dengan menyimpan riwayat percakapan yang telah dilakukan oleh user. Kemudian, riwayat percakapan tersebut dapat digunakan untuk memprediksi jawaban dari pertanyaan yang diajukan oleh user. Berikut adalah contoh riwayat yang akan disimpan:

```json
{
  "role": "user",
  "content": "What is the company's history?"
},
{
  "role": "assistant",
  "content": "The company was founded in 2018."
},
{
  "role": "user",
  "content": "What is the company's address?"
},
{
  "role": "assistant",
  "content": "The company is located in Jakarta, Indonesia."
},
{
  "role": "user",
  "content": "What is the company's contact information?"
},
{
  "role": "assistant",
  "content": "You can contact us at +62 812 3456 7890."
},
{
  "role": "user",
  "content": "What is the company's social media account?"
},
{
  "role": "assistant",
  "content": "You can follow us on Instagram at @company."
}
```

3. Kemdian, kita dapat menggunakan riwayat tersebut untuk dimasukan kembali setiap user membuat prompt baru. Sehingga model dapat mengingat apa saja pertanyaan atau tanggapan yang diberikan oleh user selama percakapan berlangsung.
