import chalk from 'chalk';

export default function easterEgg() {
  const easterEggs = [
    `"May the café be with you." ☕🛸`,
    `"Você é fullstack, mas está sem caféstack..."`,
    `"git commit -m 'mais café, por favor'"`,
    `"Ninguém precisa de café... até rodar um deploy em produção 😅"`,
    `"Compilar sem café é como tentar codar sem IDE."`,
    `"Você desbloqueou o nível secreto: Barista Dev 🧑‍💻 + ☕ = ❤️"`
  ];

  const mensagem = easterEggs[Math.floor(Math.random() * easterEggs.length)];

  console.log(chalk.magentaBright('\n🐣 Easter Egg da CodeCafé:\n'));
  console.log(chalk.yellowBright(`${mensagem}\n`));
}
