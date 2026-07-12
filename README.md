# 💌 Cartinha de Amor 💕

Um site lindo e romântico para compartilhar seus sentimentos com sua namorada/namorado!

## ✨ Recursos

- 🎵 **Música de Fundo** - Adicione a música favorita do casal
- 📸 **Galeria de Fotos** - Exiba suas melhores memórias juntos
- 📅 **Contador de Dias** - Mostra quanto tempo vocês estão juntos
- 💌 **Cartinha Personalizada** - Escreva sua mensagem de amor
- 💖 **Animações Românticas** - Corações flutuando na tela
- 📱 **Responsivo** - Funciona em todos os dispositivos

## 🚀 Como Usar

### 1. **Adicionar Data do Namoro**
Abra o arquivo `script.js` e altere a linha:
```javascript
const startDate = new Date('2060-07-04'); // Mude para sua data!
```
Formato: `'YYYY-MM-DD'` (Ano-Mês-Dia)

### 2. **Adicionar Música**
- Coloque um arquivo de áudio chamado `musica.mp3` na pasta do projeto
- O arquivo pode estar nos formatos: MP3, WAV, OGG

### 3. **Adicionar Fotos**
- Coloque suas fotos com os nomes: `foto1.jpg`, `foto2.jpg`, `foto3.jpg`
- Você pode adicionar mais fotos duplicando a estrutura no `index.html`

### 4. **Personalizar a Cartinha**
Abra `index.html` e edite o texto dentro de `<div class="letter-content">`

### 5. **Personalizar Cores**
Abra `style.css` e altere os valores de `background` nos gradientes:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 📁 Estrutura de Arquivos

```
loveDamaria/
├── index.html      # Página principal
├── style.css       # Estilos do site
├── script.js       # Funcionalidades e lógica
├── musica.mp3      # Sua música (adicione)
├── foto1.jpg       # Foto 1 (adicione)
├── foto2.jpg       # Foto 2 (adicione)
├── foto3.jpg       # Foto 3 (adicione)
└── README.md       # Este arquivo
```

## 🎨 Dicas de Personalização

### Alterar Cores do Gradiente
No `style.css`, procure por `#667eea` e `#764ba2` e substitua por cores que desejar.
Veja paletas de cores em: https://colorhunt.co/

### Adicionar Mais Fotos
Adicione mais items na galeria (no `index.html`):
```html
<div class="photo-item">
    <img src="foto4.jpg" alt="Foto 4">
</div>
```

### Mudar Emojis
Procure pelos emojis no código e substitua por outros! Alguns exemplos:
- 💕 💖 💗 💝 💞 ❤️ 🌹 ✨

## 🌐 Publicar Online

### GitHub Pages (Grátis!)
1. Certifique-se de que os arquivos estão no repositório
2. Vá em Settings > Pages
3. Selecione "Deploy from a branch"
4. Escolha a branch "main" ou "master"
5. Salve e aguarde 1-2 minutos
6. Seu site estará em: `https://lovedamaris.github.io/loveDamaria/`

### Outros Opções
- **Netlify**: https://netlify.com (Grátis, muito fácil)
- **Vercel**: https://vercel.com (Grátis, rápido)
- **Firebase**: https://firebase.google.com (Grátis do Google)

## 💝 Resultado Final

Quando tudo estiver pronto, você terá um site lindo para:
- Pedir desculpas ❤️
- Comemorar o aniversário 🎉
- Dizer "Eu te amo" 💕
- Compartilhar com sua pessoa especial 🥰

## 📝 Licença

Feito com ❤️ para o amor!

---

**Dúvidas ou sugestões?** Customize à vontade e divirta-se! 🎵💌✨