# 🌙 Sleep Timer

> Agende o desligamento do seu PC com uma interface elegante inspirada no Spotify.

![Sleep Timer](https://img.shields.io/badge/platform-Windows-0078D6?style=flat-square&logo=windows)
![Electron](https://img.shields.io/badge/built%20with-Electron-47848F?style=flat-square&logo=electron)
![License](https://img.shields.io/badge/license-MIT-1DB954?style=flat-square)

---

## ✨ Funcionalidades

- ⏱ **Presets rápidos** — 15 min, 30 min, 1h, 1h30, 2h
- 🎛 **Tempo personalizado** — defina horas, minutos e segundos exatos
- 🔴 **4 ações disponíveis** — Desligar, Reiniciar, Hibernar ou Sair da conta
- 📊 **Barra de progresso animada** em tempo real
- 🎨 **Interface dark** inspirada no Spotify com animações suaves (GSAP)
- 🖥️ **Janela sem bordas** com visual moderno e compacto
- ✅ **Portátil** — sem instalação, apenas um `.exe`

---

## 📥 Download

👉 **[Baixar SleepTimer.exe](https://github.com/hugosbarbosa/sleep-timer/releases/latest)**

Compatível com Windows 10 e 11 (64-bit).

---

## 🖼 Preview

<!-- Adicione um screenshot aqui depois -->
> Interface escura com visual estilo Spotify, orbe animado e contagem regressiva em tempo real.

---

## 🛠 Tecnologias

| Tecnologia | Uso |
|---|---|
| [Electron](https://www.electronjs.org/) | Framework desktop |
| [Tailwind CSS](https://tailwindcss.com/) | Estilização |
| [GSAP](https://gsap.com/) | Animações |
| Windows `shutdown` API | Agendamento do sistema |

---

## 🚀 Rodar localmente

```bash
# Clone o repositório
git clone https://github.com/hugosbarbosa/sleep-timer.git
cd sleep-timer

# Instale as dependências
npm install

# Rode em modo dev
npm start

# Gere o executável
npm run build
```

O `.exe` será gerado em `dist/SleepTimer.exe`.

---

## 💡 Motivação

Cansado de digitar `shutdown /s /t 3600` no terminal toda vez que queria dormir com o PC ligando algo? Esse app nasceu disso — um jeito visual, rápido e bonito de agendar o desligamento.

---

## 📄 Licença

MIT © [Hugo Barbosa](https://github.com/hugosbarbosa)
