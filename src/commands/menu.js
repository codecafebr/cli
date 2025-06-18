import chalk from 'chalk';

export default function showMenu() {
  console.log(chalk.cyan('\n📋 Cardápio oficial da CodeCafé ☕\n'));

  const produtos = [
    {
      nome: '☕ Kit Dev',
      preco: 119.80,
      parcelas: '4x de R$29,95 sem juros',
      destaque: 'Inclui: CodeCafé Bit + Byte + colher dosadora'
    },
    {
      nome: '🔢 CodeCafé 256',
      preco: 49.90,
      parcelas: '4x de R$12,48 sem juros',
      destaque: '100% Arábica - Torra Média'
    },
    {
      nome: '🧠 CodeCafé Bit',
      preco: 59.90,
      parcelas: '4x de R$14,98 sem juros',
      destaque: '100% Arábica - Torra Escura'
    },
    {
      nome: '⚡ CodeCafé Byte',
      preco: 59.90,
      parcelas: '4x de R$14,98 sem juros',
      destaque: 'Só restam 4 em estoque!'
    }
  ];

  produtos.forEach((p, i) => {
    console.log(chalk.green.bold(`${i + 1}. ${p.nome}`));
    console.log(`   ${chalk.white(`Preço:`)} R$${p.preco.toFixed(2)}  ${chalk.gray(`(${p.parcelas})`)}`);
    console.log(`   ${chalk.gray(p.destaque)}\n`);
  });

  console.log(chalk.magentaBright('→ Use "codecafe comprar" para fazer seu pedido!\n'));
}
