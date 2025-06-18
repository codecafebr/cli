import inquirer from 'inquirer';
import chalk from 'chalk';
import open from 'open';

export default async function comprar() {
  console.log(chalk.green('\n🛒 Bem-vindo à loja da CodeCafé!\n'));

  const produtos = [
    {
      nome: '☕ Kit Dev - R$119,80',
      valor: 119.80,
      url: 'https://www.codecafe.com.br/produtos/kit-dev/'
    },
    {
      nome: '🔢 CodeCafé 256 - R$49,90',
      valor: 49.90,
      url: 'https://www.codecafe.com.br/produtos/codecafe-256/'
    },
    {
      nome: '🧠 CodeCafé Bit - R$59,90',
      valor: 59.90,
      url: 'https://www.codecafe.com.br/produtos/codecafe-bit/'
    },
    {
      nome: '⚡ CodeCafé Byte - R$59,90',
      valor: 59.90,
      url: 'https://www.codecafe.com.br/produtos/codecafe-byte1/'
    }
  ];

  const { escolha } = await inquirer.prompt([
    {
      type: 'list',
      name: 'escolha',
      message: 'Qual café você quer hoje?',
      choices: produtos.map(p => p.nome)
    }
  ]);

  const produtoSelecionado = produtos.find(p => p.nome === escolha);

  console.log(chalk.yellow(`\nAbrindo ${produtoSelecionado.nome} no navegador... ☕`));

  await open(produtoSelecionado.url);
}
